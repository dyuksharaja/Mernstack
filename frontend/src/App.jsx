
import Home from "./assets/components/page/Home";
import Footer from "./assets/components/pages/Footer";
import Header from "./assets/components/pages/Header";
import UseState from "./hooks/UseState";
import Navbar from "./assets/components/Navbar";
import About from "./assets/components/page/About";
import {Routes,Route} from "react-router-dom";
import Contact from "./assets/components/page/Contact";
import Service from "./assets/components/page/Service";
import UseEffect from "./hooks/UseEffect";
import Form from "./assets/components/Form";
import Todo from "./assets/components/Todo";
const App=()=>{
  return(
  <>
  
  <Header/>
  <Header/>
  <Footer/>
  <Home name="DYUKSHA RAJA"dept="BCA"/>    
  <Home name="DISHA "dept="BBA CA"/>    
  <UseState/>
  <Navbar/>
  <Routes>
    
    <Route path="/"element={<Home name="dyuksha" dept="bca"/>}/>
    <Route path="/about"element={<About/>}/>
    <Route path="/contact"element={<Contact/>}/>
    <Route path="/service"element={<Service/>}/>
    <Route path="/useState"element={<UseState/>}/>
    <Route path="/UseEffect"element={<UseEffect/>}/>
    <Route path="/Form"element={<Form/>}/>
    <Route path="/Todo"element={<Todo/>}/>
  </Routes>
 </>   
  )
}
export default App;