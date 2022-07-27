import {BrowserRouter} from "react-router-dom"
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./Quiz.png)"}}>
   <Header/>
    </div>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
