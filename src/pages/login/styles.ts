import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
 
`;

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.black[200]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 128px;
`;

export const LogoContainer = styled.div`
  align-self: center;
  justify-self: center;
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 75px;
  letter-spacing: 0.05em;
  color: ${(props) => props.theme.colors.white};

  & + p {
    margin-top: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: #c4c4c4;
    margin-bottom: 64px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #fffffe;

    position: relative;
    & + label {
      margin-top: 1rem;
    }
  }
  input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    width: 100%;
    border-radius: 8px;
    color: ${(props) => props.theme.colors.black[500]};

    padding: 23px 32px;
    margin-top: 8px;

    &[type="password"],
    &[type="text"] {
      padding: 23px 64px 23px 32px;
    }
    &::placeholder {
      color: ${(props) => props.theme.colors.black[200]};
    }
  }
  .icon {
    position: absolute;
    right: 32px;
    top: 50%;
    border: 0;
    background: transparent;
  }

  a {
    color: ${(props) => props.theme.colors.white};
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #fffffe;
    text-decoration: none;

    &.register {
      color: ${(props) => props.theme.colors.purple};
    }
  }

  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
  }
`;

export const Button = styled.button`
  border: 0;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  padding: 1rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;

  text-align: center;
  text-transform: uppercase;
  margin-top: 32px;
`;

export const CheckBoxContainer = styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  padding-left: 40px;
  margin-bottom: 12px; 

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .checkmark:after {
      display: block;
    }
  }

  .checkmark {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 0;
    height: 32px;
    width: 32px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 8px;

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 10px;
      height: 15px;
      border: solid ${(props) => props.theme.colors.purple};
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;
