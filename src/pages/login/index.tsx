import React from "react";
import Logo from "../../assets/LogoLarge.svg";
import Image from "next/image";
import { FiEye } from "react-icons/fi";

import {
  Button,
  CheckBoxContainer,
  Container,
  Form,
  FormContainer,
  LogoContainer,
  Title,
} from "./styles";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Entrar</Title>
        <p>Bem vindo de volta</p>

        <Form>
          <label htmlFor="Email">
            Email <br />
            <input type="email" id="Email" placeholder="Digite sue email" />
          </label>
          <label htmlFor="Senha">
            Senha <br />
            <input type="password" id="Senha" placeholder="******" />
            <button className="icon">
              <FiEye size={32} />
            </button>
          </label>

          <div>
              <CheckBoxContainer htmlFor="saved">
                Lembrar-me
                <input id="saved" type="checkbox" />
                <span className="checkmark"></span>
              </CheckBoxContainer>
            <Link href="">
              <a>Esqueceu a senha</a>
            </Link>
          </div>
          <Link href="/register">
            <a className="register">Cadastra-se</a>
          </Link>
          <Button type="submit">Entrar</Button>
        </Form>
      </FormContainer>
      <LogoContainer>
        <Image src={Logo} alt="Logo" width="600px" height="350px" />
      </LogoContainer>
    </Container>
  );
};

export default Login;
