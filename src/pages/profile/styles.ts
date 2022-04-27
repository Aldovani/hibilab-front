import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 240px;
  margin-top: 32px;

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    margin-top: 16px;
    /* identical to box height */
    border-radius: 8px;

    letter-spacing: 0.15em;

    color: #000000;
    width: 100%;
    padding: 22px;
  }
  label {
    margin-top: 32px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.15em;

    color: #ffffff;
  }
  button {
    align-self: flex-start;
    border: 0;
    border-radius: 8px;
    background: ${(props) => props.theme.colors.purple};
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    padding: 1rem 50px;
    margin-top: 64px;
  }

  div {
    align-self: center;
    justify-self: center;
    position: relative;
  }
`;
export const AvatarImagem = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 370px;
  height: 370px;
  border-radius: 100%;
  border: 12px solid ${(props) => props.theme.colors.purple};
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    opacity: 0;
    border-radius: 50%;
    transition: all 0.3s ease-in;
  }

  &:hover {
    & + span {
      visibility: visible;
      opacity: 1;
    }

    &::after {
      opacity: 0.5;
    }
  }

  & + span {
    transition: 0.2s ease-in;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    z-index: 4;
    letter-spacing: 0.15em;
    text-align: center;
    color: ${(props) => props.theme.colors.white};
    pointer-events: none;
  }
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  letter-spacing: 0.05em;
  display: inline-block;

  color: ${(props) => props.theme.colors.white};
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 8px;
    background-color: ${(props) => props.theme.colors.purple};
  }
`;

