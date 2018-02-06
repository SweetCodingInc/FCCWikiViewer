import './App.css';
import React from 'react';


import { Sidebar } from './components/sidebar.component';
import { Viewer } from './components/viewer.component';

const App = () => {
  return (
    <div className="f r">
      <div className="side">
        <Sidebar />
      </div>
      <div className="f r">
        <Viewer />
      </div>
    </div>
  );
}

export default App;
