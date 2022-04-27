import { Card } from "../components/Card";
import { Carousel } from "../components/Carrousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container, Section } from "../styles";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Carousel />
        <Section>
          <Card />
          <Card />
          <Card />
        </Section>
      </Container>
      <Footer />
    </>
  );
}
