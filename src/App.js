import { Route, Routes } from 'react-router-dom';
import Provider from './context/provider';
import HomeScreen from './pages/homeScreen';
import './static/App.css';

function App() {

  return (
    <div className="App">
      <Provider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
