// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Gnb from "./components/Gnb.jsx";
// import Home from "./pages/Home.jsx";
// import Profile from "./pages/Profile.jsx";
// import Portfolio from "./pages/Portfolio.jsx";
// import PortfolioDetail  from "./pages/PortfolioDetail.jsx";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Gnb />

//       <main className="page">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/portfolio" element={<Portfolio />} />
          
//           <Route path="/portfolio/:id" element={<PortfolioDetail />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

import Gnb from "./components/Gnb.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import PortfolioDetail  from "./pages/PortfolioDetail.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Gnb />

      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
      </main>
    </>
  );
}