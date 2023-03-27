import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/fivo-sans-modern');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Fivo Sans Modern', sans-serif;
  }
`;


import Map from "./components/Map";


function App() {
  return (
    <>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/map" element={<Map />} />
    </Routes>
    </>
  );
}

export default App;
