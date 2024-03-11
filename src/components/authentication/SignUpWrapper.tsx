import SignUpPage from "./SignUpPage";
import styled from "@emotion/styled";

export const SignUp = () => {
  return (
    <Wrapper>
      <SignUpPage />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;