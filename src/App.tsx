import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { StyledEngineProvider } from "@mui/material";
import { GlobalStyle } from "styles/theme";
import Home from "routes/Home";
import Detail from "routes/Detail";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyle />
      <QueryClientProvider client={new QueryClient()}>
        <StContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/:id" element={<Detail />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </StContainer>
      </QueryClientProvider>
    </StyledEngineProvider>
  );
};

export default App;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 900px;
  height: 100%;
  padding: 30px;

  border-radius: 50px;

  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`;
