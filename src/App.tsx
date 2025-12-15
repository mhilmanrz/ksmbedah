import { useState } from 'react';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Services } from './components/Services';
import { Doctors } from './components/Doctors';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

type Page = 'home' | 'profile' | 'services' | 'doctors' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'profile':
        return <Profile />;
      case 'services':
        return <Services />;
      case 'doctors':
        return <Doctors />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
