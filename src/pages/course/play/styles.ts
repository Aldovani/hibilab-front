import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Path = styled.span`
display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.purple};

  a {
    color: ${(props) => props.theme.colors.white};
  }
`
export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: 0.05em;
  align-self: flex-start;
  display: inline-block;


  color: ${(props) => props.theme.colors.white};

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 8px;
    background-color: ${(props) => props.theme.colors.purple};
  }
`;

export const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
margin: 64px 0 32px;

`;

export const Lessons = styled.div`
  background-color: ${(props) => props.theme.colors.black[200]};
  overflow-y: scroll;
  max-height: 640px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #212529;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.purple};
  }

  li {
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid ${(props) => props.theme.colors.gray};
    padding: 18px 64px;
    width: 100%;
    color: #ffffff;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0.15em;
    span {
      font-size: 14px;
    }
    span:first-of-type {
      font-size: 24px;
    }
  }
`;
export const SubTitle = styled.h2`
 font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  display: inline-block;
  color: #ffffff;
  margin:  64px 0 32px 0;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 8px;
    background: ${(props) => props.theme.colors.purple};
  }
`

export const Description = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 150%;


color: #C4C4C4;
`
