import React from'react';
import Projects from './Projects';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#writing">Writing</a></li>
            <li><a href="#sketching">Sketching</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Projects />
      </main>
      <footer>
        {/* Footer content will go here */}
      </footer>
    </div>
  );
}

export default App;