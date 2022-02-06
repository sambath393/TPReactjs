import { Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/homeScreen';
import Navbar from './routes/navbar';
import './static/App.css';

function App() {

  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
  );
}

export default App;
