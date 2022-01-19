import 'App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import ImportantPage from 'pages/ImportantPage/ImportantPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/important" element={<ImportantPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
