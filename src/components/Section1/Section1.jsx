import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ContainerSection1 } from './styled.Section1';
import illustration1 from './../../assets/img/illustration1.svg';
import illustration2 from './../../assets/img/illustration2.svg';
import illustration3 from './../../assets/img/illustration3.svg';

// Agrupamento de cores em uma constante para facilitar a modificação
const colors = {
  blue: '#64a1f4',
  gray: '#6e6e6e',
  lightGray: 'whitesmoke',
};

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
`;

const StyledBox = styled.div`
  background-color: #2f207b;
  padding: 2rem;
  text-align: center;

  h2 {
    color: ${colors.gray};
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;

    .text-blue {
      color: ${colors.blue};
    }
  }

  .box-2 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .box-2 div {
    flex: 1 1 200px;
    min-height: 260px;
    align-items: center;
    background: ${colors.lightGray};
    padding: 1.2rem;
    border-radius: 22px;
    position: relative;
  }

  .box-2 img {
    background: #9cdaff;
    padding: 1rem;
    border-radius: 22px;
    max-width: 100%;
    animation: ${pulseAnimation} 2s infinite alternate;
  }

  p {
    color: ${colors.gray};
    font-weight: 500;
    margin-top: 1rem;
  }
`;

export default function Section1() {
  return (
      <ContainerSection1>
        <StyledBox>
          <div className="box-1">
            <h2>NOSSOS <span className="text-blue">PILARES</span> na sua <span className="text-blue">SAÚDE</span>...</h2>
            <div className='box-2'>
              <div>
                <img src={illustration2} alt="Ilustração sobre a importância dos óculos" />
                <p><strong>22.9% dos problemas de aprendizado estão relacionados à falta de óculos</strong></p>
              </div>
              <div>
                <img src={illustration1} alt="Ilustração sobre a importância dos óculos" />
                <p><strong>O Brasil tem uma das maiores taxas de evasão escolar do mundo, sendo que parte disso está relacionada à falta de óculos</strong></p>
              </div>
              <div>
                <img src={illustration3} alt="Ilustração sobre a importância dos óculos" />
                <p><strong>Nos inspiramos em casos de sucesso de implementação de programas de doação de óculos</strong></p>
              </div>
            </div>
          </div>
        </StyledBox>
      </ContainerSection1>
  );
}
