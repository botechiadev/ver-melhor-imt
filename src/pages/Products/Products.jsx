import { ContainerProducts } from "./styled.Products";
import styled from "styled-components";
import Image from "./../../assets/criancasElentes.png"; // Importe sua imagem de crianças com óculos

const StyledInfo = styled.div`
padding-top: 80px;
padding-bottom: 80px;
  max-width: 800px;
  margin: auto;
  padding-top: 80px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #656565;
  }

  img {
    max-width: 100%;
    margin-top: 2rem;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`;

export default function SponsorGlasses() {
  return (
    <ContainerProducts>
      <StyledInfo>
        <h2>Projeto de Apadrinhamento de Óculos para Crianças Carentes</h2>
        <p>
          Nosso projeto visa fornecer óculos para crianças de comunidades carentes, garantindo que elas tenham acesso à visão corrigida para melhorar seu desempenho escolar e qualidade de vida.
        </p>
        <img src={Image} alt="Crianças com óculos" />
      </StyledInfo>
    </ContainerProducts>
  );
}
