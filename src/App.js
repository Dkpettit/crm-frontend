/**
 * Name: App.js
 * Author: Dave Pettit
 * Date: April 24, 2021
 * Purpose: React interface loaded to 'root' in index.js, called by ReactDom.render function
 *  
 * 
 * https://www.youtube.com/watch?v=yiO8qXQ4BIc
 */

 // npx create-react-app .
 // npm install react-bootstrap bootstrap
 // yarn start

import './App.css';

import { Entry } from './pages/entry/Entry.page';

function App() {
  return (
    <div className="App">
      <Entry />
    </div>
  );
}

export default App;
