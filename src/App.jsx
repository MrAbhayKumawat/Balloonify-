import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Balloon from './Components/Home/Balloon';
import FormPage from './Components/Form/FormPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Balloon />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;