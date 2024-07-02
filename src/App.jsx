import './App.css';
import Nojinho from './img/nojinho.png';
import Raiva from './img/raiva.png';
import Alegria from './img/alegria.png';
import Medo from './img/medo.png';
import Tristeza from './img/tristeza.png';
import Tedio from './img/tedio.png';
import Vergonha from './img/vergonha.png';
import Inveja from './img/inveja.png';
import Ansiedade from './img/ansiedade.png';
import EmocaoItens from './EmocaoItens'; //A função 'EmocaoItens' está sendo importada.
import background from './img/fundo.webp';


import { faFaceSadCry as tristezaSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceSadCry as tristezaRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceLaughBeam as alefriaSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceLaughBeam as alegriaRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceGrinStars as invejaSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceGrinStars as invejaRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceFrown as medoSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceFrown as medoRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceDizzy as ansiedadeSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceDizzy as ansiedadeRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceMehBlank as vergonhaSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceMehBlank as vergonhaRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceAngry as raivaSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceAngry as raivaRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceGrin as nojinhoSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceGrin as nojinhoRegular } from '@fortawesome/free-regular-svg-icons';

import { faFaceTired as tedioSolid } from '@fortawesome/free-solid-svg-icons';
import { faFaceTired as tedioRegular } from '@fortawesome/free-regular-svg-icons';



function App() {

  const emocoes = [ 
    { nome: 'Nojinho', descricao:'O nojo é uma emoção forte causada por algo considerado repulsivo, sujo ou moralmente inaceitável.' , imagem: Nojinho, iconSolid: nojinhoSolid, iconRegular: nojinhoRegular},
    { nome: 'Raiva', descricao:'A raiva é uma emoção intensa desencadeada por frustração, injustiça ou provocação, levando a uma resposta de irritação.' , imagem: Raiva, iconSolid: raivaSolid, iconRegular: raivaRegular },
    { nome: 'Alegria', descricao:'A alegria é uma emoção positiva e vibrante que envolve sentimentos de felicidade, contentamento e satisfação.' , imagem: Alegria, iconSolid: alefriaSolid, iconRegular: alegriaRegular },
    { nome: 'Medo', descricao:'O medo é uma emoção intensa provocada pela percepção de uma ameaça real ou imaginária' , imagem: Medo, iconSolid: medoSolid, iconRegular: medoRegular },
    { nome: 'Tristeza', descricao:'A tristeza é uma emoção humana natural que surge em resposta a experiências negativas, perdas ou decepções.' , imagem: Tristeza, iconSolid: tristezaSolid, iconRegular: tristezaRegular},
    { nome: 'Tédio', descricao:'O tédio é uma sensação de falta de interesse, estímulo ou excitação em relação às atividades ou ao ambiente ao redor. ' , imagem: Tedio, iconSolid: tedioSolid, iconRegular: tedioRegular },
    { nome: 'Vergonha', descricao:'A vergonha é uma emoção intensa e desconfortável que surge quando uma pessoa sente que fez algo errado, embaraçoso ou socialmente inaceitável.' , imagem: Vergonha, iconSolid: vergonhaSolid, iconRegular: vergonhaRegular },
    { nome: 'Inveja', descricao:'A inveja é uma emoção negativa que surge quando uma pessoa deseja algo que outra possui.' , imagem: Inveja, iconSolid: invejaSolid, iconRegular: invejaRegular },
    { nome: 'Ansiedade', descricao:'A ansiedade é uma emoção caracterizada por sentimentos de preocupação, apreensão e medo.' , imagem: Ansiedade, iconSolid: ansiedadeSolid, iconRegular: ansiedadeRegular }
  ]; /*Lista de objetos. Cada objeto possui como propriedades o seu nome, a imagem que está sendo importada,
        e os dois ícones, o sólido e o regular.*/


  return (
    <>
    <img className='fundo' src={background}/>
      <EmocaoItens 
        titulo="Como você está se sentindo?" //Este valor está sendo atribuído ao primeiro parâmetro da função 'EmocaoItens'.
      
      

        
        emocoes={emocoes} //A lista emocoes, está sendo usada como valor do segundo parâmetro da função 'EmocaoItens'.
      />
    </>
  )
}

export default App //Afunção 'App' está sendo exportada.
