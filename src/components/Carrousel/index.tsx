import React, { useEffect, useState } from "react";
import { Title } from "../../styles/components";
import {
  Container,
  CarouselContainerItems,
  CarrouselItem,
  CarrouselContainer,
  CarouselImage,
} from "./styles";



const links = [
  {
    id: 1,
    title: "Titulo 1",
    url: " https://source.unsplash.com/1920x1080/?nature,water",
    professor: "Professor 1",
  },

  {
    id: 2,
    title: "Titulo 2",
    url: " https://source.unsplash.com/1920x1080/?game",
    professor: "Professor 2",
  },
  {
    id: 3,
    title: "Titulo 3",
    url: " https://source.unsplash.com/1920x1080/?science,space",
    professor: "Professor 3",
  },
  {
    id: 4,
    title: "Titulo 4",
    url: " https://source.unsplash.com/1920x1080/?rock,music",
    professor: "Professor 4",
  },
  {
    id: 5,
    title: "Titulo 5",
    url: " https://source.unsplash.com/1920x1080/?rockets,space",
    professor: "Professor 5",
  },
];

export function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === links.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Container>
      <Title>Cursos Populares</Title>
      <CarrouselContainer>
        <CarouselContainerItems>
          {links.map((link, key) => {
            return (
              <CarrouselItem
                onClick={() => setIndex(key)}
                image={link.url}
                key={key}
                isItemActive={index == key}
              />
            );
          })}
        </CarouselContainerItems>
        <CarouselImage image={links[index].url}>
          <div>
            <h2>{links[index].title}</h2>
            <p>{links[index].professor}</p>
          </div>
        </CarouselImage>
      </CarrouselContainer>
    </Container>
  );
}
