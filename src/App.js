import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./Quiz.png)"}}>
   <Header/>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/quiz" element={<Quiz />} />
    <Route path="/result" element={<Result />} />
    </Routes>

    </div>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
