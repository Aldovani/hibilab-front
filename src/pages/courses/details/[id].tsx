import Link from "next/link";
import React from "react";
import Badge from "../../../components/Badge";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import {
  SubTitle,
  Container,
  ListRequirements,
  Path,
  Title,
} from "../../../styles/components";

import {
  Content,
  ContentList,
  Course,
  Courses,
  Description,
  DetailsContainer,
  DetailsInfo,
  Grid,
  ImageCourse,
  ImageMin,
  Teacher,
} from "./styles";

const Details: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Grid>
          <div>
            <Content>
              <Path>
                <Link href="/courses">Cursos/</Link>
                curso de java
              </Path>
              <Title>Curso de ReactJS</Title>
              <Teacher>Professor</Teacher>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                tortor diam, pulvinar vitae venenatis at, volutpat eu est. Nam
                condimentum ut justo ut suscipit. Cras et augue id dui sagittis
                aliquam sagittis sed nisi.
              </Description>
            </Content>

            <ContentList>
              <SubTitle>Conteúdo do curso</SubTitle>
              <ul>
                <li>
                  <p>Aula 01 - Historia</p>
                  <span>10M</span>
                </li>
                <li>
                  <p>Aula 01 - Historia</p>
                  <span>10M</span>
                </li>
                <li>
                  <p>Aula 01 - Historia</p>
                  <span>10M</span>
                </li>
                <li>
                  <p>Aula 01 - Historia</p>
                  <span>10M</span>
                </li>
                <li className="showMore">mostrar mais</li>
              </ul>
            </ContentList>

            <ListRequirements>
              <SubTitle>Requisitos</SubTitle>
              <ul>
                <li>
                  Curso para iniciantes: você aprenderá do zero como desenvolver
                  aplicações para Android; não é necessário ter conhecimento
                  prévio de programação
                </li>
                <li>Computador com acesso à internet.</li>
                <li>Nenhum software pago é necessário.</li>
                <li>Android Studio 2.1 ou inferior</li>
              </ul>
            </ListRequirements>
          </div>

          <div>
            <DetailsContainer>
              <ImageCourse image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

              <DetailsInfo>
                <Button>Matricular-se</Button>
                <span>Tempo: 1h 10m de video</span>
                <span>
                  Dificuldade: <Badge difficulty="intermediário" />{" "}
                </span>
                <span>Idioma: português </span>
              </DetailsInfo>
            </DetailsContainer>

            <Courses>
              <SubTitle>Cursos semelhantes</SubTitle>

              <ul>
                <Course>
                  <ImageMin image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                  <div>
                    <h3>Curso de nodejs</h3>
                    <p>Professor</p>
                    <Link href="/">Detalhes</Link>
                  </div>
                </Course>
                <Course>
                  <ImageMin image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                  <div>
                    <h3>Curso de nodejs</h3>
                    <p>Professor</p>
                    <Link href="/">Detalhes</Link>
                  </div>
                </Course>
                <Course>
                  <ImageMin image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                  <div>
                    <h3>Curso de nodejs</h3>
                    <p>Professor</p>
                    <Link href="/">Detalhes</Link>
                  </div>
                </Course>
              </ul>
            </Courses>
          </div>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default Details;
