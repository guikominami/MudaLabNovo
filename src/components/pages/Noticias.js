import React from "react";
import { styled } from "styled-components";
import Section from "../elements/SectionComponent";
import Container from "../elements/ContainerComponent";
import linkIcon from "../../assets/icons/link.svg";

const Box = styled.div`
  width: 80%;

  margin-top: 2rem;
  margin-bottom: 2rem;

  //display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 48em) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SubTitle = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  margin-bottom: 1rem;
  margin-right: 10rem;

  @media (max-width: 64em) {
    width: 100%;
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 100%;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: left;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  //height: 70vh;

  //margin-top: 4rem;
  margin-bottom: 1rem;

  //display: flex;
  //vertical
  justify-content: center;
  //horizontal
  align-items: center;
  //alinhar uma div em cima da outra
  flex-direction: column;

  @media (max-width: 48em) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const ListItem = styled.li`
  img {
    margin-left: 6px;
    width: 2%;
  }
`;

const Line = styled.div`
  box-shadow: 1px 5px black;
  width: 80%;
  height: 1px;
  margin-bottom: 1rem;
  //border-top: 2px solid #fff;
  //   <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
`;

const Noticias = () => {
  return (
    <Section>
      <Container>
        <Box>
          <SubTitle>
            Mudalab no Laboratório Flutuante Cururuar - rio Cururu, ilha do
            Marajó/ Pará/Brasil.
          </SubTitle>
          <VideoContainer>
            <iframe
              src="https://www.youtube.com/embed/j8zXP8ccA1Y"
              title="Pará sustentável"
              width="350"
              height="180"
            />
          </VideoContainer>
          <Line />
          <SubTitle>
            Mudalab no programa da Rede Globo de televisão “Como será? ” - Fab
            Lab Livre Heliópolis.
          </SubTitle>
          <VideoContainer>
            <iframe
              src="https://www.youtube.com/embed/Z9I0dwHk4a8"
              title="Pará sustentável"
              width="350"
              height="170"
            />
          </VideoContainer>
          <Line />
          <SubTitle>
            Mudalab no Projeto Materiais Pedagógicos Acessíveis (links abaixo
            para acessar as matérias).
          </SubTitle>
          <SubText>
            <ListItem>
              <a
                href="https://porvir.org/educacao-inclusiva-conheca-10-materiais-pedagogicos-acessiveis-para-criar-e-aplicar-na-escola/"
                target="_blank"
                rel="noreferrer"
              >
                Matéria na plataforma de conteúdos Porvir - Inovações em
                Educação.
                <img src={linkIcon} alt="link" />
              </a>
            </ListItem>
          </SubText>
          <SubText>
            <ListItem>
              <a
                href="https://www.cenpec.org.br/noticias/materiais-para-uma-educacao-inclusiva"
                target="_blank"
                rel="noreferrer"
              >
                Matéria da NGO CENPEC - Materiais para uma educação inclusiva.
                <img src={linkIcon} alt="link" />
              </a>
            </ListItem>
          </SubText>
          <Line />
          <SubTitle>
            Mudalab selecionado no edital BiblioHack LAB com Projeto OMEC | uma
            experiência multissensorial de leitura de 1984.
          </SubTitle>
          <SubText>
            <ListItem>
              <a
                href="https://www.bibliolab.com.br/post/omec-uma-experi%C3%AAncia-multissensorial-de-leitura-de-1984"
                target="_blank"
                rel="noreferrer"
              >
                BiblioHack LAB promove laboratório aberto sobre o futuro do
                livro e da leitura.
                <img src={linkIcon} alt="link" />
              </a>
            </ListItem>
          </SubText>
          <SubText>
            <ListItem>
              <a
                href="https://ufmg.br/comunicacao/noticias/tecnologias-de-incentivo-a-leitura-chegam-a-biblioteca-publica-estadual-em-bh"
                target="_blank"
                rel="noreferrer"
              >
                Tecnologias de incentivo à leitura chegam à Biblioteca Pública
                Estadual em BH.
                <img src={linkIcon} alt="link" />
              </a>
            </ListItem>
          </SubText>
          <Line />
          <SubTitle>
            Projeto ECOLAB - Alternativas Inovadoras para a Reutilização do
            Plástico.
          </SubTitle>
          <SubText>
            <ListItem>Ecolab na São Paulo Maker Week.</ListItem>
          </SubText>
          <VideoContainer>
            <iframe
              src="https://www.youtube.com/embed/ddqEGVhnEJY"
              title="EcoLAB"
              width="350"
              height="170"
            />
          </VideoContainer>
          <SubText>
            <ListItem>
              <a
                href="https://www.reciclasampa.com.br/artigo/skate-pode-virar-arte-e-itens-de-decoracao"
                target="_blank"
                rel="noreferrer"
              >
                 Matéria no Recicla Sampa - Skate pode virar arte e itens de decoração.
                <img src={linkIcon} alt="link" />
              </a>
            </ListItem>
          </SubText>
          <SubText>
            <ListItem>
              <a
                href="https://eventos.ufpr.br/sds/sds/paper/viewFile/4506/998"
                target="_blank"
                rel="noreferrer"
              >
                 Matéria no Simpósio de Design Sustentável SDS21/ Universidade Federal
                Paraná - MudaLab e Precious Plastic: considerações sobre o
                Movimento Maker, Sustentabilidade e Periferia com o uso do lixo
                plástico.
                <img src={linkIcon} alt="link" />
              </a>
            </ListItem>
          </SubText>
          <SubText>
            <ListItem>
              <a
                href="https://www.redbull.com/br-pt/station-5-anos-programacao-especial"
                target="_blank"
                rel="noreferrer"
              >
                 Matéria sobre o workshop Skate Infinito no Red Bull Station/SP.
                <img src={linkIcon} alt="link" />
              </a>
            </ListItem>
          </SubText>
          <Line />
          <SubTitle>Projetos de Robótica</SubTitle>
          <SubText>
            <ListItem>
              <a
                href="https://agoravale.com.br/noticias/cultura/circuito-sesc-de-artes-apresenta-diversas-atracoes-gratuitas-em-pracas-e-parques-no-mes-de-agosto"
                target="_blank"
                rel="noreferrer"
              >
                Matéria na Agora Vale - Circuito SESC de artes apresenta
                diversas atrações gratuitas em praças e parques no mês de
                agosto.
                <img src={linkIcon} alt="link" />
              </a>
            </ListItem>
          </SubText>
          <SubText>
            <ListItem>
              <a
                href="https://portal.varzeapaulista.sp.gov.br/2022/08/11/varzea-paulista-recebe-o-circuito-sesc-de-artes/"
                target="_blank"
                rel="noreferrer"
              >
                Matéria para a prefeitura de Várzea Paulista - Várzea Paulista recebe o Circuito Sesc de Artes.
                <img src={linkIcon} alt="link" />
              </a>
            </ListItem>
          </SubText>
          <SubText>
            <ListItem>
              <a
                href="https://www.acidadevotuporanga.com.br/cidade/2022/08/circuito-sesc-de-artes-estaciona-neste-domingo-em-votuporanga-n73792"
                target="_blank"
                rel="noreferrer"
              >
                Matéria para a A Cidade - o jornal de Votuporanga - MudaLab leva o Roboíno Maker.
                <img src={linkIcon} alt="link" />
              </a>
            </ListItem>
          </SubText>           
        </Box>
      </Container>
    </Section>
  );
};

export default Noticias;
