import styled from "styled-components";
import { transparentize } from "polished";

type BadgeProps = {
  difficulty: "iniciante" | "intermediário" | "Especialista";
  position?: boolean;
};

const colors = {
  iniciante: "#6CD13C",
  intermediário: "#D1963C",
  Especialista: "#D13C3C",
  default: "#fff",
};


export const Container = styled.span<BadgeProps>`
  color: ${({difficulty}) => colors[difficulty]};
  background: ${(props) => props.theme.colors.black[200]};
  background: ${({difficulty}) => transparentize(0.7, colors[difficulty])};

  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: ${(props) => props.theme.fontWeights.roboto[400]};
  font-size: 24px;
  padding: 6px 13px;
  border-radius: 19px;
  letter-spacing: 0.15em;
  text-transform: capitalize;

  ${(props) =>
    props.position &&
    `
position: absolute;
  top: 16px;
  right: 16px;`}
`;
