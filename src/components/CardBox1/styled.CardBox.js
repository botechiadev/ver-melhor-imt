import styled from 'styled-components';
import bg from '../../assets/img/bg.png';

export const ContainerCardBox = styled.li`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  border: 3px solid #070d45;
  width: 32%;
  padding: 1rem;
  transition: box-shadow 0.3s ease;

  @media screen and (max-width: 720px) {
    width: 80%;
  }

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;
