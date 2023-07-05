import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" style={{ minHeight: 'unset' }}>
          <img src={logo} className="App-logo" alt="logo" />
          <div>Hello from O4C (ktistak) - v2!</div>
          <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/otherPage">Other Page</Link>
          </div>
        </header>
        <div style={{ padding: "20px" }}>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherPage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
