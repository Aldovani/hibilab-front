import React, { useState } from "react";

import { Avatar, Button, Container, Menu } from "./styles";
import Image from "next/image";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.jpg";

import { ActiveLink } from "../ActiveLink";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Image src={logo} alt="Logo" width="47px" height="80px" />

      <nav>
        <ul>
          <li>
            <ActiveLink href="/" activeClassName="active">
              <a>Inicio</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/courses" activeClassName="active">
              <a>Cursos</a>
            </ActiveLink>
          </li>
        </ul>
      </nav>

      {/* <div>
        <Button href="">Fazer login</Button>
        <Button isVariant href="">
          Cadastrar
        </Button>
      </div> */}

      <Avatar onClick={() => setOpen(!open)}>
        <Image
          src={avatar}
          alt="Avatar"
          width="90px"
          height="90px"
          className="avatar"
          quality={100}
        />

        <Menu isOpen={open}>
          <ul>
            <li>
              <ActiveLink href="/profile" activeClassName="active">
                <a>Meu Perfil</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/study" activeClassName="active">
                <a>Meu aprendizado</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/admin" activeClassName="active">
                <a>Amin</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/Sair" activeClassName="active">
                <a>Sair</a>
              </ActiveLink>
            </li>
          </ul>
        </Menu>
      </Avatar>
    </Container>
  );
};

export default Header;
