import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NotFound from './pages/NotFound';

// Context providers can be added here later if needed

function App() {
  // Sound effect for button hovering - gamification feature
  useEffect(() => {
    const hoverSound = new Audio('/sounds/hover.mp3');
    const buttons = document.querySelectorAll('.game-button, .nav-link');
    
    const playHoverSound = () => {
      hoverSound.currentTime = 0;
      hoverSound.volume = 0.2;
      hoverSound.play().catch(e => console.log('Audio play prevented:', e));
    };
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', playHoverSound);
    });
    
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', playHoverSound);
      });
    };
  }, []);

  return (
    <Router>
      <div className="App bg-background text-text-primary min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
