import React from "react";
import { FiEdit2, FiX } from "react-icons/fi";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { Container, SubTitle, Title } from "../../../styles/components";

import {
  Flex,
  Form,
  ListLessons,
} from "../styles";

const edit: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Flex>
          <Title>Editar curso</Title>

          <div>
            <Button outline>Nova Aula</Button>
            <Button>Salvar</Button>
          </div>
        </Flex>

        <Form>
          <label htmlFor="course" id="LCourse">
            Nome do curso <br />
            <input
              type="text"
              id="course"
              placeholder="Digite o nome do curso"
            />
          </label>
          <label htmlFor="teacher" id="LTeacher">
            Nome do Professor <br />
            <input
              type="text"
              id="teacher"
              placeholder="Digite o nome do professor"
            />
          </label>
          <label htmlFor="difficulty" id="LDifficulty">
            Dificuldade <br />
            <select id="difficulty">
              <option value="">inIciante</option>
              <option value="">Intermediário</option>
              <option value="">Especialista</option>
            </select>
          </label>
          <label htmlFor="description" id="LDescription">
            Descrição <br />
            <textarea placeholder="Descrição" id="description"></textarea>
          </label>
          <label htmlFor="requirements" id="LRequirements">
            Requisitos <br />
            <textarea placeholder="Descrição" id="requirements"></textarea>
          </label>
          <div>
            <Button>Carregar imagem</Button>
            <span>Foto.png</span>
          </div>
        </Form>

        <SubTitle>Aulas</SubTitle>

        <ListLessons>
          <li>
            <span>Aula 1</span>
            <div>
              <button>
                <FiEdit2 size={32} color="#fefefe" />
              </button>
              <button>
                <FiX size={32} color="#fefefe" />
              </button>
            </div>
          </li>
          <li>
            <span>Aula 1</span>
            <div>
              <button>
                <FiEdit2 size={32} color="#fefefe" />
              </button>
              <button>
                <FiX size={32} color="#fefefe" />
              </button>
            </div>
          </li>
          <li>
            <span>Aula 1</span>
            <div>
              <button>
                <FiEdit2 size={32} color="#fefefe" />
              </button>
              <button>
                <FiX size={32} color="#fefefe" />
              </button>
            </div>
          </li>
          <li>
            <span>Aula 1</span>
            <div>
              <button>
                <FiEdit2 size={32} color="#fefefe" />
              </button>
              <button>
                <FiX size={32} color="#fefefe" />
              </button>
            </div>
          </li>
          <li>
            <span>Aula 1</span>
            <div>
              <button>
                <FiEdit2 size={32} color="#fefefe" />
              </button>
              <button>
                <FiX size={32} color="#fefefe" />
              </button>
            </div>
          </li>
          <li>
            <span>Aula 1</span>
            <div>
              <button>
                <FiEdit2 size={32} color="#fefefe" />
              </button>
              <button>
                <FiX size={32} color="#fefefe" />
              </button>
            </div>
          </li>
        </ListLessons>
      </Container>
      <Footer />
    </>
  );
};

export default edit;
