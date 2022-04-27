import React from "react";
import Logo from "../../assets/LogoLarge.svg";
import Image from "next/image";
import { FiEye } from "react-icons/fi";

import {
  Button,
  Container,
  Form,
  FormContainer,
  LogoContainer,
  Title,
} from "./styles";
import Link from "next/link";

const Register: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Image src={Logo} alt="Logo" width="600px" height="350px" />
      </LogoContainer>
      <FormContainer>
        <Title>Registra-se</Title>
        <p>Crie seu conta agora mesmo!</p>

        <Form>
          <label htmlFor="Email">
            Email <br />
            <input type="email" id="Email" placeholder="Digite sue email" />
          </label>
          <label htmlFor="Nome">
            Nome <br />
            <input type="email" id="Nome" placeholder="Digite sue nome" />
          </label>
          <label htmlFor="Senha">
            Senha <br />
            <input type="password" id="Senha" placeholder="******" />
            <button className="icon">
              <FiEye size={32} />
            </button>
          </label>

          <span>
            Já tem uma conta ? 
            <Link href="/login">
              <a className="login"> Cadastra-se</a>
            </Link>
          </span>
          <div>

          <Button type="submit">Criar</Button>
          </div>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Register;
