import React, { Component } from 'react';
import { Header } from './components/app-bar.component';
import { ContentComponent } from './components/content.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContentComponent/>
      </div>
    );
  }
}

export default App;
