import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

function getNormalizedPath() {
  const hash = window.location.hash;
  if (hash.startsWith('#/')) {
    return hash.slice(1);
  } else if (hash.startsWith('#') && hash.length > 1 && !hash.startsWith('#/')) {
    // anchor within current page
    return window.location.pathname;
  }
  return window.location.pathname || '/';
}

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(getNormalizedPath());

  useEffect(() => {
    const handleLocationChange = () => {
      const newPath = getNormalizedPath();
      setCurrentPath(newPath);
      // If it's not an in-page anchor jump, scroll to top
      if (!window.location.hash || window.location.hash.startsWith('#/')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const id = window.location.hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (to) => {
    if (to.startsWith('#') && !to.startsWith('#/')) {
      // In-page anchor on home or current
      const id = to.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', to);
        return;
      } else {
        // If not on home page, navigate to /#id
        window.history.pushState(null, '', `/${to}`);
        setCurrentPath('/');
        setTimeout(() => {
          const target = document.getElementById(id);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      }
    }

    if (to !== currentPath) {
      window.history.pushState(null, '', to);
      setCurrentPath(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function Link({ to, children, className = '', activeClassName = 'active', onClick, ...props }) {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to;

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`${className} ${isActive ? activeClassName : ''}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}
