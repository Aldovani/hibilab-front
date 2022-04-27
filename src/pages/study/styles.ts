import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 385px);
  grid-auto-rows: 480px;
  gap: 2rem;
  margin-top: 64px;
`;

export const Card = styled.div`
  cursor: pointer;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.black[200]};
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin: 16px 0 16px 16px;
    color: #ffffff;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin: 0 16px 32px 16px;
    color: #ffffff;
  }
`;

export const ImageCourse = styled.div<{ image: string }>`
  width: 100%;
  height: 300px;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
`;
export const ProgressBar = styled.div<{ percentage: number }>`
  height: 16px;
  background-color: ${(props) => props.theme.colors.white};
  width: calc(100% - 2rem);
  margin: 32px auto;
  border-radius: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: ${(props) => props.percentage}%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.purple};
    border-radius: 20px;
  }
  &::before {
    content: "${(props) => props.percentage}%";
    position: absolute;
    display: block;
    bottom: -16px;
    transform: translate(-50%, 50%);
    left: ${(props) => props.percentage}%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;
  }
`;
