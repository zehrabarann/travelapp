import 'antd/dist/antd.css';
import './App.css';
import './style/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { PlacesProvider } from './context/PlacesContext';

function App() {
  return (
    <PlacesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </PlacesProvider>
  );
}

export default App;
