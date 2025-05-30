import './App.css'; // Import App.css for global styles
import Header from './components/page/Header';
import Footer from './components/page/Footer';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <div className="layout-container">
      <header>
        <Header />
      </header>
      <main>
        <MainLayout />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
