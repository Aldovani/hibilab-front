import styled from "styled-components";


export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
`;
export const Course = styled.li`
  display: grid;
  grid-template-columns: 380px 1fr 72px;
  background-color: ${(props) => props.theme.colors.black[200]};
  grid-auto-rows: 360px;

  color: ${(props) => props.theme.colors.white};

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;

  letter-spacing: 0.15em;

  div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin: 16px 0 32px;
  }

  button,svg {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: fit-content;
transition: .2s ease;
    &:hover {
      filter: brightness(70%);
    }
  }
  span {
    margin-bottom: 32px;
  }

  & + li {
    margin-top: 32px;
  }
`;
export const Content = styled.div`
  padding-left: 2rem;
  margin-top: 64px;
`;
export const Icons = styled.div`
  gap: 64px;
  margin-top: 64px;
`;

export const ImageCourse = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
`;
