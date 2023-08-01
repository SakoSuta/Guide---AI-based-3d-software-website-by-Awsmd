import  './App.css';
import Logo from './assets/Logo.svg';

function App() {
  return (
    <main>
      <nav>
        <div><img src={Logo} alt="logo" /></div>
        <ul>
          <li>About</li>
          <li>Pricing</li>
          <li>Services</li>
          <li>Community</li>
        </ul>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Mon bouton
      </button>

      <section>
        <div>
          <h2>Artificial intelligence</h2>
          <p>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems.</p>
        </div>
        <div>
          <div>
            <button>Creativity</button>
            <span>Creat the best projets</span>
          </div>
          <h1>Create an abstraction</h1>
        </div>
        <div>
          <span>Digital artworks</span>
          <span>3D Modeling</span>
          <span>Branding</span>
        </div>
      </section>
    </main>
  );
}

export default App;
