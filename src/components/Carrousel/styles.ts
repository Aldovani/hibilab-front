import styled from "styled-components";

type CarrouselItemProps = {
  isItemActive: boolean;
  image: string;
};

export const Container = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CarrouselContainer = styled.div`
  display: grid;
  grid-template-columns: 181px 1fr;
  margin-top: 2rem;
`;
export const CarouselContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const CarrouselItem = styled.div<CarrouselItemProps>`
  transition: all 0.5s;
  height: 90px;

  width: 100%;
  background: ${(props) =>
      !props.isItemActive &&
      ` linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),`}
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CarouselImage = styled.div<{ image: string }>`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.image});
  background-size: cover;
  transition: all 0.5s;
  background-position: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  position: relative;
  div {
    position: absolute;
    left: 2rem;
    bottom: 2rem;
  }
  h2 {
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.roboto};
    font-weight: ${(props) => props.theme.fontWeights[700]};
    font-size: 3rem;
  }
  p {
    color: ${(props) => props.theme.colors.gray};
    font-family: ${(props) => props.theme.fonts.inter};
    font-weight: ${(props) => props.theme.fontWeights[400]};
    font-size: 1.25rem;
  }
`;
