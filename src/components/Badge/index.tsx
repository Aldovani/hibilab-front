import React from "react";

import { Container } from "./styles";

type BadgeProps = {
  difficulty: "iniciante" | "intermediário" | "Especialista";
  position?: boolean;
};

const Badge: React.FC<BadgeProps> = ({ difficulty, position }) => {
  return (
    <Container difficulty={difficulty} position={position}>
      {difficulty}
    </Container>
  );
};

export default Badge;
