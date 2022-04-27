import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 136px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.black[200]};
  border-radius: 4px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Teacher = styled.span`
  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  margin: 32px 0;
  display: block;

  color: ${(props) => props.theme.colors.gray};
`;
export const Description = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;

  color: #c4c4c4;
`;

export const ContentList = styled.div`
  margin: 128px 0;

  ul {
    width: 100%;
    margin-top: 64px;
  }

  li {
    background: #212529;
    border-radius: 4px;
    padding: 1.5rem 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;

    letter-spacing: 0.15em;

    color: #fffffe;

    & + li {
      margin-top: 0.5rem;
    }
    &.showMore {
      justify-content: center;
    }
    span{
      color: ${(props) => props.theme.colors.gray};
      font-size: 1.5rem;
    }
  }
`;

export const ImageCourse = styled.div<{ image: string }>`
  height: 400px;

  background: url(${(props) => props.image});
  background-size: cover;
`;

export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: ${(props) => props.theme.colors.white};
  padding: 2rem;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.15em;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};
  border: none;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.15em;
  padding: 8px;
`;

export const Courses = styled.div`
  margin-top: 64px;
  ul {
    margin-top: 2rem;
  }
`;
export const Course = styled.li`
  height: 170px;
  display: flex;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.black[200]};
  color: ${(props) => props.theme.colors.white};
  h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.15em;
  }
  div {
    padding: 1rem;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.15em;

    color: #c4c4c4;
    margin: 1rem 0 2rem;
  }

  a {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.15em;
    color: #fffffe;
    display: inline-block;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 4px;
      background-color: ${(props) => props.theme.colors.purple};
    }
  }
  & + li {
    margin-top: 2rem;
  }
`;
export const ImageMin = styled.div<{ image: string }>`
  width: 170px;
  height: 100%;
  border-radius: 4px 0 4px 0;

  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
