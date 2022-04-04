import './App.css';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <CustomerReviews></CustomerReviews>
    </div>
  );
}

export default App;
