import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/layout";
import Home from "./routes/home";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PhysicalFitnessAssessment from "./components/PhysicalFitnessAssessment";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Jua", sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename="pft-v2">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="physical" element={<PhysicalFitnessAssessment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// test
export default App;
