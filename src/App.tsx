import './App.css';
import {CalculatorBody} from "./calculator/CalculatorBody.tsx";
import {Footer} from "./footer/Footer.tsx";
import {Header} from "./header/Header.tsx";

function App() {


  return (
    <>
        <Header />
        <CalculatorBody />
        <Footer />
    </>
  )
}

export default App;
