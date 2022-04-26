import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <main className="App">
      <header>
        <Link to="/" className="home-link">
          <div className="header-titles">
            <h1>⚔️ Kzarka Appeared ⚔️</h1>
            <p>Only you can save us from the Lord of Corruption</p>
          </div>
        </Link>
      </header>

      <div className="score-board-container">
        <h3>How to play</h3>
        
        <div>
          <span className="help">
            Click on Kzarka as many times as you can within 15 seconds!
          </span>
        </div>
      </div>
    </main>
  );
};

export default Guide;