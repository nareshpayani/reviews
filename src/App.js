import React from 'react'
import './App.css';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="app">
      <section className='container'>
        <div className='title'>
          <h2>Review Comments</h2>
            <div className='underline'></div>
        </div>
            <Reviews/>
        </section>
    </div>
  );
}

export default App;
