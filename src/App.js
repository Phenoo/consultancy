import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Template from "./pages/Template";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import ScrollUp from "./components/ScrollUp";
import Blogs from "./pages/Blogs";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route exact path='*' element={<Main />}/>
        <Route path='/about' element={<About /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/services' element={<ServicePage /> } />
        <Route path='/blogs' element={<Blogs /> } />
        <Route path='/template' element={<Template /> } />
      </Routes>
      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
