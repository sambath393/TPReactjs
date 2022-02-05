import { Route, Routes } from 'react-router-dom';
import Provider from './context/provider';
import HomeScreen from './pages/homeScreen';
import Navbar from './routes/navbar';
import './static/App.css';

function App() {

  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
