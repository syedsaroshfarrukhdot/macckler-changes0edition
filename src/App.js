import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import MultiStepForm from "./components/form/MultiStepForm"


function App() {
  return (
    <div>
   <Header />
   <div className="site_wrapper">
    <div className="wrraper_header">
     
    </div>
   <MultiStepForm />
   </div>
   </div>
  );
}

export default App;
