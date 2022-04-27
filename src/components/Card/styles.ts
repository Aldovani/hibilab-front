import styled from "styled-components";



export const Container = styled.div`
  display: grid;
  grid-template-rows: 315px 285px;
  max-width: 500px;
  background: ${(props) => props.theme.colors.black[200]};
  position: relative;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
`;

export const CardImage = styled.div<{ image: string }>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image});
  border-radius: 4px 4px 0px 0px;
`;

export const CardDetails = styled.div`
  padding: 1rem;
`;


export const CardTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: ${(props) => props.theme.fontWeights.roboto[700]};
  font-size: 40px;
  line-height: 47px;
`;
export const CardTeacher = styled.h3`
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: ${(props) => props.theme.fontWeights.inter[400]};
  font-size: 20px;
  margin: 8px 0;
`;

export const CardDescription = styled.p`
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: ${(props) => props.theme.fontWeights.inter[400]};
  font-size: 18px;
  color: ${(props) => props.theme.colors.gray};
  line-height: 150%;
`;
export const Button = styled.a<{ outline?: boolean }>`
  background: ${(props) =>
    props.outline ? "transparent" : `${props.theme.colors.purple}`};
  padding: 16px 32px;

  border-radius: 4px;
  border: ${(props) =>
    props.outline && `3px solid ${props.theme.colors.purple} `};

  color: ${(props) => props.theme.colors.white};

  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: ${(props) => props.theme.fontWeights.roboto[500]};
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-top: 2.5rem;
  transition: filter 0.2s;
  cursor: pointer;
  display: block;
  text-align: center;

  &:hover {
    filter: brightness(1.2);
  }
`;
