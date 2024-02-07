import React from 'react';
import styled from 'styled-components';
import { ContainerSection1 } from './styled.Section1';
import illustration1 from './../../assets/img/illustration1.svg';
import illustration2 from './../../assets/img/illustration2.svg';
import illustration3 from './../../assets/img/illustration3.svg';

const StyledBox = styled.div`
  background-color: #2f207b;

  .box-1 {
    padding: 2rem;
    text-align: center;
  }

  h2 {
    color: #c4c4c4;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;

    .text-blue-300 {
      color: #64a1f4;
    }
  }

  .box-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    justify-items: center;
    align-items: center;
  }

  .box-2 img {
    max-width: 100%;
    animation: pulse 2s infinite alternate;
  }

  p {
    color: #64a1f4;
    font-weight: 600;
    margin-top: 1rem;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

export default function Section1() {
  return (
    <ContainerSection1>
      <StyledBox>
        <div className="box-1">
          <h2>NOSSOS <span className="text-blue-300">PILARES</span> na sua <span className="text-blue-300">SAÚDE</span>...</h2>
          <div className='box-2'>
            <div>
              <img className="pulse" src={illustration2} alt="Ilustração sobre a importância dos óculos" />
              <p><strong>22.9% dos problemas de aprendizado estão relacionados à falta de óculos</strong></p>
            </div>
            <div>
              <img className="pulse" src={illustration1} alt="Ilustração sobre a importância dos óculos" />
              <p><strong>O Brasil tem uma das maiores taxas de evasão escolar do mundo, sendo que parte disso está relacionada à falta de óculos</strong></p>
            </div>
            <div>
              <img className="pulse" src={illustration3} alt="Ilustração sobre a importância dos óculos" />
              <p><strong>Nos inspiramos em casos de sucesso de implementação de programas de doação de óculos</strong></p>
            </div>
          </div>
        </div>
      </StyledBox>
    </ContainerSection1>
  );
}
