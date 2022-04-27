import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 32px;
  }
`;

export const Form = styled.form`
  margin-top: 64px;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-areas:
    "nome nome"
    "professor dificuldade"
    "descricao requisitos"
    "upload  .";
  gap: 32px;

  #LCourse {
    grid-area: nome;
  }
  #LTeacher {
    grid-area: professor;
  }
  #LDifficulty {
    grid-area: dificuldade;
  }
  #LDescription {
    grid-area: descricao;
  }
  #LRequirements {
    grid-area: requisitos;
  }
  #upload {
    grid-area: upload;
  }

  label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.15em;

    color: #ffffff;
  }
  input,
  select,
  textarea {
    width: 100%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15em;

    color: #000000;

    padding: 25px;
    border-radius: 8px;
    margin-top: 16px;
    resize: vertical;
  }
  textarea {
    height: 200px;
  }
  div {
    display: block;
  }
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;

    letter-spacing: 0.15em;

    color: #ffffff;
    margin-left: 32px;
  }
`;

export const ListLessons = styled.ul`
  li {
    display: flex;
    background-color: ${(props) => props.theme.colors.black[200]};
    padding: 32px 50px;
    justify-content: space-between;
    border-radius: 8px;
    transition: 0.2s ease-in;

    & + li {
      margin-top: 16px;
    }

    &:hover {
      filter: brightness(90%);
    }
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;

    letter-spacing: 0.15em;

    color: #ffffff;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    width: fit-content;
    margin-left: 32px;
  }
`;
