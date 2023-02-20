import styled from "styled-components";

const Home = () => {
  return <StContainer>hello world !</StContainer>;
};

export default Home;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  padding: 30px;

  border-radius: 50px;

  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  max-width: 1200px;
  min-width: 800px;
`;
