import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { GlobalStyle } from "styles/theme";
import Home from "routes/Home";
import Detail from "routes/Detail";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
};

export default App;
