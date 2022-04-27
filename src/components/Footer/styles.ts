import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.black[200]};
  margin-top: 128px;
  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: ${(props) => props.theme.fontWeights.roboto[600]};
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 0.15em;
  text-transform: uppercase;

  div {
    justify-content: space-between;
    align-items: center;
    padding: 16px 2rem;
    display: flex;
    max-width: 1440px;

    margin: 0 auto;
  }
  p {
    font-size: 1rem;
  }
`;
export const Logo = styled.h1`
  font-size: 48px;
  line-height: 56px;
  
 
  span {
    color: ${(props) => props.theme.colors.purple};
  }
`;
