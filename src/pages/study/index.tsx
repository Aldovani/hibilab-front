import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Title } from "../../styles/components";

import {
  Card,
  Grid,
  ProgressBar,
  ImageCourse,
} from "./styles";

const study: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Meu aprendizado</Title>

        <Grid>
          <Link href="/courses/details/1" passHref>
            <Card>
              <ImageCourse image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              <h2>Curso javascript</h2>
              <span>professor</span>

              <ProgressBar percentage={60} />
            </Card>
          </Link>
        </Grid>

        <Title>Finalizados</Title>

        <Grid>
          <Link href="/course/play?1" passHref>
            <Card>
              <ImageCourse image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
              <h2>Curso javascript</h2>
              <span>professor</span>

              <ProgressBar percentage={100} />
            </Card>
          </Link>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default study;
