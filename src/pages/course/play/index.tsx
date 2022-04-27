import Link from "next/link";
import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Container,ListRequirements,SubTitle,Title,Path } from "../../../styles/components";
import {
  ContainerContent,
  Description,
  Lessons,
} from "./styles";

const courseplay: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Path>
          <Link href="/study">Painel usuário/</Link>
          Nome do curso
        </Path>
        <Title>Curso de javascript</Title>

        <ContainerContent>
          <iframe
            width="100%"
            height="640"
            src="https://www.youtube.com/embed/snEKQ0d-0FU"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <Lessons>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
            <li>
              <span>1. Historia</span>
              <span>3M</span>
            </li>
          </Lessons>
        </ContainerContent>
        <SubTitle>Descrição</SubTitle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tortor diam, pulvinar vitae venenatis at, volutpat eu est. Nam
          condimentum ut justo ut suscipit. Cras et augue id dui sagittis
          aliquam sagittis sed nisi.{" "}
        </Description>
        <SubTitle>Requisitos</SubTitle>
        <ListRequirements>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          </li>
        </ListRequirements>
      </Container>

      <Footer />
    </>
  );
};

export default courseplay;
