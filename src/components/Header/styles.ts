import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem auto 128px;
  max-width: 1440px;
  padding: 0 2rem;

  position: relative;
  nav {
    ul {
      display: flex;
      gap: 32px;

      a {
        color: ${(props) => props.theme.colors.white};
        font-family: ${(props) => props.theme.fonts.roboto};
        font-weight: ${(props) => props.theme.fontWeights.roboto[400]};
        font-size: 2rem;
        &.active {
          &::after {
            content: "";
            display: block;
            width: 100%;
            height: 6px;
            background: ${(props) => props.theme.colors.purple};
          }
        }
      }
    }
  }
`;

export const Avatar = styled.div`
  .avatar {
    border: 3px solid ${(props) => props.theme.colors.purple} !important;
    border-radius: 100%;
    width: 100% !important;
    cursor: pointer;
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 5;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  bottom: 0;
  right: 0;
  transform: translateY(calc(100% + 1rem));

  ul {
    width: 484px;

    background: ${(props) => props.theme.colors.black[200]};
    display: flex;
    flex-direction: column;
    border: 4px solid ${(props) => props.theme.colors.purple};
    border-radius: 8px;
  }

  li {
    display: block;

    width: 100%;
  }
  a {
    display: block;
    width: 100%;
    padding: 32px 64px;
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.roboto};
    font-weight: ${(props) => props.theme.fontWeights.roboto[400]};
    font-size: 1.5rem;
    &.active {
      background-color: ${(props) =>
        transparentize(".5", props.theme.colors.black[500])};
      color: ${(props) => props.theme.colors.purple};
    }

    &:hover {
      background-color: ${(props) =>
        transparentize(".1", props.theme.colors.black[500])};
      color: ${(props) => props.theme.colors.purple};
    }
  }
`;

export const Button = styled.a<{
  isVariant?: boolean;
}>`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: ${(props) => props.theme.fontWeights.roboto[700]};
  font-size: 1rem;
  color: ${(props) =>
    props.isVariant
      ? ` ${props.theme.colors.white}`
      : ` ${props.theme.colors.purple}`};

  background: ${(props) =>
    props.isVariant ? ` ${props.theme.colors.purple}` : `transparent`};
  border: ${(props) =>
    props.isVariant ? `3px solid ${props.theme.colors.purple}` : ""};
  border-radius: 8px;
  padding: 16px 16px;
  margin-left: 1rem;
  text-transform: uppercase;
`;
