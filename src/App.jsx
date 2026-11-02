import React, { useState } from 'react';
import { RouterProvider, useRouter } from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RequestModal from './components/RequestModal';
import ConfirmationModal from './components/ConfirmationModal';
import LegalModal from './components/LegalModal';
import AuroraCanvas from './components/AuroraCanvas';
import HomePage from './pages/HomePage';
import StandortKampagnenPage from './pages/StandortKampagnenPage';
import ContentVideoPage from './pages/ContentVideoPage';
import CreativeAudioPage from './pages/CreativeAudioPage';
import DigitalHubsPage from './pages/DigitalHubsPage';
import UeberUnsPage from './pages/UeberUnsPage';
import VenturesPage from './pages/VenturesPage';

function AppContent() {
  const { currentPath } = useRouter();
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, type: 'impressum' });

  const handleOpenFunnel = () => {
    setIsRequestModalOpen(true);
  };

  const handleCloseFunnel = () => {
    setIsRequestModalOpen(false);
  };

  const handleFormSubmitted = (data) => {
    setIsRequestModalOpen(false);
    setConfirmationData(data);
    setIsConfirmationOpen(true);
  };

  const handleOpenLegal = (type) => {
    setLegalModalState({ isOpen: true, type });
  };

  const handleCloseLegal = () => {
    setLegalModalState((prev) => ({ ...prev, isOpen: false }));
  };

  // Route matching
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/standort-kampagnen':
        return <StandortKampagnenPage onOpenFunnel={handleOpenFunnel} />;
      case '/content-video':
        return <ContentVideoPage onOpenFunnel={handleOpenFunnel} />;
      case '/creative-audio':
        return <CreativeAudioPage onOpenFunnel={handleOpenFunnel} />;
      case '/digital-hubs':
        return <DigitalHubsPage onOpenFunnel={handleOpenFunnel} />;
      case '/ueber-uns':
        return <UeberUnsPage onOpenFunnel={handleOpenFunnel} />;
      case '/ventures':
        return <VenturesPage onOpenFunnel={handleOpenFunnel} />;
      case '/':
      default:
        return (
          <HomePage
            onOpenFunnel={handleOpenFunnel}
          />
        );
    }
  };

  return (
    <div className="app-container">
      {/* 1. Ambient Aurora Mesh (WebGL / GLSL Simplex-Noise Fragment Shader) */}
      <AuroraCanvas />

      {/* Floating App Dock Navigation */}
      <Navbar onOpenFunnel={handleOpenFunnel} />

      {/* Main Page Content */}
      <main className="content-wrapper">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Request Modal Overlay (Geht per Klick auf die Buttons auf) */}
      <RequestModal
        isOpen={isRequestModalOpen}
        onClose={handleCloseFunnel}
        onSubmitted={handleFormSubmitted}
      />

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        formData={confirmationData}
      />

      {/* Legal Modals */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        onClose={handleCloseLegal}
        type={legalModalState.type}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
