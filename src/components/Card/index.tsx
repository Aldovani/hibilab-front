import Link from "next/link";
import React from "react";
import Badge from "../Badge";
import Button from "../Button";

import {
  Container,
  CardImage,
  CardDescription,
  CardDetails,
  CardTitle,
  CardTeacher,
} from "./styles";

export const Card: React.FC = () => {
  return (
    <Container>
      <CardImage image="https://source.unsplash.com/1920x1080/?science,space" />

      <Badge difficulty="Especialista"  position/>
      <CardDetails>
        <CardTitle>Nome do Curso </CardTitle>
        <CardTeacher>Teacher </CardTeacher>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          voluptatibus
        </CardDescription>
        <div>
          <Link href="/courses/details/1" passHref>
            <Button outline={true} margin="2.5rem 0 0 0" width="100%">Detahles </Button>
          </Link>
        </div>
      </CardDetails>
    </Container>
  );
};
