import styled from "styled-components";

type ButtonProps = {
  disabled?: boolean;
  outline?: boolean;
  margin?: string;
  width?: string;
};

export const ContainerButton = styled.button<ButtonProps>`
  width: ${(props) => props.width || "auto"};
  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.purple};
  border: 0;
  border-radius: 4px;
  padding: 16px 16px;
  text-align: center;
  text-transform: uppercase;
  margin: ${(props) => props.margin || "0"};
  cursor: pointer;
  transition: .2s linear;


  &:hover {
    filter: brightness(.8);
  }

  ${(props) =>
    props.outline &&
    `
  background: transparent;
  border: 3px solid ${props.theme.colors.purple};
  color: ${props.theme.colors.purple};
  
  
  &:hover {
    background: ${props.theme.colors.purple};
    color: ${props.theme.colors.white};
    filter: brightness(1);
  }
  
  `}

  
`;
