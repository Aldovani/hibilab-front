import React from "react";
import { FiSearch } from "react-icons/fi";

import { Card } from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container } from "../../styles/components";

import {
  Section,
  Search,
  TopicsContainer,
  TopicItem,
  ShowMore,
  Pagination,
  PaginationItem,
} from "./styles";

const courses: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Search>
          <input type="text" placeholder="Pesquisar curso" />
          <button>
            <FiSearch size={64} color="#fefefe" />
          </button>
        </Search>

        <TopicsContainer>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <TopicItem>Java</TopicItem>
          <ShowMore>Mostrar mais</ShowMore>
        </TopicsContainer>

        <Section>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>

        <Pagination>
          <PaginationItem current>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem>3</PaginationItem>
          <PaginationItem>4</PaginationItem>
        </Pagination>
      </Container>
      <Footer />
    </>
  );
};

export default courses;
