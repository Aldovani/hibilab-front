import Link from "next/link";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FiX, FiPackage, FiEdit2 } from "react-icons/fi";
import { ImageCourse, Course, Content, Icons, Flex } from "./styles";
import Button from "../../components/Button";
import {Container, Title } from "../../styles/components";

const admin: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        
        <Flex>
          <Title>Painel administrativo</Title>
          <Link href="course/create" passHref>
            <Button>Novo Curso</Button>
          </Link>
        </Flex>

        <ul>
          <Course>
            <ImageCourse image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Content>
              <h2>CURSO DE JAVASCRIPT</h2>
              <p>Professor</p>
              <span>100 videos</span>
              <span>Tempo: 10h 50m</span>
            </Content>
            <Icons>
              <button>
                <FiPackage size={32} color="#fefefe" />
              </button>
              <Link href="/course/edit" passHref>
                <FiEdit2 size={32} color="#fefefe" />
              </Link>
              <button>
                <FiX size={32} color="#fefefe" />
              </button>
            </Icons>
          </Course>
          <Course>
            <ImageCourse image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <Content>
              <h2>CURSO DE JAVASCRIPT</h2>
              <p>Professor</p>
              <span>100 videos</span>
              <span>Tempo: 10h 50m</span>
            </Content>
            <Icons>
              <button>
                <FiPackage size={32} color="#fefefe" />
              </button>
              <Link href="/course/edit" passHref>
                <FiEdit2 size={32} color="#fefefe" />
              </Link>
              <button>
                <FiX size={32} color="#fefefe" />
              </button>
            </Icons>
          </Course>
        </ul>
      </Container>
      <Footer />
    </>
  );
};

export default admin;
