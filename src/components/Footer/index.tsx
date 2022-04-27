import React from "react";

import { Container, Logo } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <Logo>
          HIB<span>LAB</span>
        </Logo>
        <p>Todos os direitos reservados </p>
      </div>
    </Container>
  );
};

export default Footer;
