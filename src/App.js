import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import ServicePage from "./pages/ServicePage";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Main />}/>
        <Route path='/about' element={<About /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/service' element={<ServicePage /> } />
        <Route path='/blogs' element={<Blogs /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
