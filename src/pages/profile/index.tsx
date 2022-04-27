import React from "react";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Title } from "../../styles/components";

import { AvatarImagem, Grid } from "./styles";

const profile: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Meu perfil</Title>

        <Grid>
          <form>
            <label htmlFor="name">
              Nome
              <br />
              <input type="text" id="name" defaultValue="Aldovani Henrique da costa" />
            </label>
            <label htmlFor="email">
              Email
              <br />
              <input type="email" id="email" defaultValue="aldovaniHCosta@gmail.com" />
            </label>
            <label htmlFor="password">
              Senha
              <br />
              <input type="password" id="password" defaultValue="123456789" />
             
            </label>
            <Button >Salvar</Button>
          </form>
          <div>
            <AvatarImagem image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
            <span>Trocar Imagem</span>
          </div>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default profile;
