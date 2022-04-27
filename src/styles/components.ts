import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  color: ${(props) => props.theme.colors.white};
  text-decoration: underline;
  text-decoration-color:${props => props.theme.colors.purple} ;
  text-decoration-thickness: 8px;

`;

export const SubTitle = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;

  text-decoration: underline;
  text-decoration-color:${props => props.theme.colors.purple} ;
  text-decoration-thickness: 8px;

`;

export const Path = styled.span`
  font-family: "Inter";
  font-style: normal;
  display: block;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.purple};

  a {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const ListRequirements = styled.ul`
  list-style: outside;
  margin-top: 2rem;
  li {
    margin-left: 36px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    list-style: disc;
    color: ${props=> props.theme.colors.gray};

    & + li {
      margin-top: 1rem;
    }
  }
`;
