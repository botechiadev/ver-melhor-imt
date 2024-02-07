import { ContainerFormRegister, ContainerBtn } from './styled.FormRegister';
import Register1 from './Register1/Register1';
import Register2 from './Register2/Register2';
import Register3 from './Register3/Register3';
import { useState } from 'react';
import { FaUserAlt, FaStethoscope, FaGlasses } from 'react-icons/fa'; // Importando ícones do React Icons

export default function FormRegister() {
  const [viewClick, setViewClick] = useState(0);

  const onClick1 = () => {
    setViewClick(1);
  };

  const onClick2 = () => {
    setViewClick(2);
  };

  const onClick3 = () => {
    setViewClick(3);
  };

  return (
    <>
      <ContainerBtn>
        <button onClick={onClick1}>PADRINHO</button>
        <button onClick={onClick2}>MÉDICO</button>
        <button onClick={onClick3}>ÓTICA</button>
      </ContainerBtn>
      <ContainerFormRegister>
        {viewClick === 0 && (
          <div className='flex'>
            <div className='block'>
              <h2>SEJA BEM VINDO AO CADASTRO ÚNICO DE VOLUNTÁRIOS</h2>
              <p>
                Nesta fase inicial, estamos captando parceiros para tornar o projeto viável. Inscreva-se clicando em sua categoria para receber mais informações.
              </p>
              <table className='border-collapse border border-gray-400'>
                <thead>
                  <tr>
                    <th className='border border-gray-400'>CATEGORIA</th>
                    <th className='border border-gray-400'>DESCRIÇÃO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-400'>PADRINHO</td>
                    <td className='border border-gray-400'>
                      <FaUserAlt className='inline mr-2' />
                      Você doará vouchers com valores simbólicos para a compra de óculos. Em troca, receberá um clube de pontos beneficente das lojas parceiras com descontos da região.
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-400'>MÉDICO</td>
                    <td className='border border-gray-400'>
                      <FaStethoscope className='inline mr-2' />
                      Médicos que contribuem com serviços de exames oftalmológicos para avaliar o grau dos apadrinhados.
                    </td>
                  </tr>
                  <tr>
                    <td className='border border-gray-400'>ÓTICA</td>
                    <td className='border border-gray-400'>
                      <FaGlasses className='inline mr-2' />
                      Óticas que disponibilizam óculos ou descontos para a confecção do programa.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {viewClick === 3 && <Register1 />}
        {viewClick === 2 && <Register2 />}
        {viewClick === 1 && <Register3 />}
      </ContainerFormRegister>
    </>
  );
}
