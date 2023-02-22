import styled from "styled-components";
import { ProductsBoard } from "component";

const Home = () => {
  return (
    <>
      <StTitle>AXIOSK</StTitle>
      <ProductsBoard />
    </>
  );
};

export default Home;

const StTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 3rem;
`;
