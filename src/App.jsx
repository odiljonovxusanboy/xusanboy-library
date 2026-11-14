import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Store from "./pages/Store/Store";
import Blog from "./pages/Blog/Blog";
import PageNotFoun from "./pages/PageError/PageNotFoun";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFoun />} />
    </Routes>
  );
}

export default App;
