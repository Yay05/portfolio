import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/route";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Cv from "./routes/Cv"
import Error from "./routes/error";
// import reportWebVitals from './reportWebVitals';

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Cv" element={<Cv />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;