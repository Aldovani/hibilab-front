import styled from "styled-components";
import { transparentize } from "polished";


export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 32px;
`;
export const Search = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 64px;

  input {
    flex: 1;
    font-size: 36px;
    font-family: ${(props) => props.theme.fonts.roboto};
    color: ${(props) => props.theme.colors.black[500]};
    border: none;
    padding: 0 64px;
    border-radius: 4px 0 0 4px;
  }
  button {
    width: 180px;
    border: 0;
    background: ${(props) => props.theme.colors.purple};
    border-radius: 0 4px 4px 0;
  }
`;
export const TopicsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  position: relative;
  margin-bottom: 128px;
`;
export const TopicItem = styled.button`
  border: 0;
  cursor: pointer;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.purple};
  color: ${(props) => props.theme.colors.white};

  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 30px 0;
`;

export const ShowMore = styled.button`
  cursor: pointer;
  border: 0;
  position: absolute;
  bottom: 0;
  transform: translateY(calc(100% + 16px));
  left: 0;
  background: transparent;
  color: ${(props) => props.theme.colors.white};
  padding: 8px;
  font-family: ${(props) => props.theme.fonts.roboto};
  font-weight: 600;
  font-size: 1rem;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 2px solid ${(props) => props.theme.colors.purple};
  border-radius: 8px;
`;

export const Pagination = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 64px;
`;
export const PaginationItem = styled.li<{ current?: boolean }>`
  border: 3px solid
    ${(props) =>
      props.current ? props.theme.colors.purple : props.theme.colors.white};
  cursor: pointer;
  padding: 16px;
  border-radius: 50%;

  color: ${(props) =>
    props.current ? props.theme.colors.purple : props.theme.colors.white};

  font-family: ${(props) => props.theme.fonts.inter};
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: 0.2s ease-in;

  &:hover {
    background: ${(props) =>
      props.current
        ? transparentize(0.2,props.theme.colors.purple)
        : transparentize(0.2,props.theme.colors.white)};
    color: ${(props) =>
      !props.current ? props.theme.colors.purple : props.theme.colors.white};
  }
`;
