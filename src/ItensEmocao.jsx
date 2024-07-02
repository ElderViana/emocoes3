import React, {useState} from 'react'; //Importa os eventos que ocorrem nos elementos da página web.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //Está importando os ícones da FontAwesomeIcon.


const ItensEmocao = ({titulo, imagem, iconSolid, iconRegular, descricao}) => { //Está criando os parâmetros das primeiras estruras HTML.


  const [fav, setFav] = useState(); /*A variável 'fav', armazena o valor lógico que a função 'useState' está lhe fornecendo. 
                                        A função 'setFav' é responsável pela atualização do valor lógico da variável 'fav'.*/
  const handleFavClick = () => {
    const newFav = !fav; /*Esta variável armazena o valor lógico oposto da vaiável 'fav'. 
                            O operador lógico not é reponsável  pela inversão.*/

    setFav(newFav); // A função 'setFav' atualiza o valor lógico da variável 'fav' usando o valor lógico da variável 'newFav'.
  }


  const [hover, setHover] = useState();  /*A variável 'hover', armazena o valor lógico que a função 'useState' está lhe fornecendo. 
                                            A função 'setHover' é responsável pela atualização do valor lógico da variável 'hover'.*/
  const handleHoverMouse = () => {
    const newHover = !hover;  /*Esta variável armazena o valor lógico oposto da vaiável 'hover'. 
                                O operador lógico not é reponsável  pela inversão.*/

    setHover(newHover); // A função 'setHover' atualiza o valor lógico da variável 'hover' usando o valor lógico da variável 'newHover'.
  }

  return(
    
    <div className='card-filme'>
        {
          hover == true //O valor lógico de 'hover' está sendo comparado com o valor lógico 'true'.
          ? <h3>{titulo}</h3> //Se a condição anterior for verdadeira, este comando será executado e o nome da emoção será exibido.
          : <h3></h3> //Se a condição anterior for falsa, este comando será executado e o nome não aparecerá.
        }
        <div className='titulo-card'>

          {
            fav == true //O valor lógico de 'fav' está sendo comparado com o valor lógico 'true'.

            ? <FontAwesomeIcon icon={iconSolid} size="2x" color='white' className='fa-star' onClick={handleFavClick}/>
            /*Se a condição anterior for verdadeira, este comando será executado. O ícone sólido será exibido e o clique que o
              usuário deu sobre o ícone, ativará a função 'handleFavClick'.*/

            : <FontAwesomeIcon icon={iconRegular} size="2x" className='fa-star' onClick={handleFavClick}/>
             /*Se a condição anterior for falsa, este comando será executado. O ícone regular será exibido e o clique que o
              usuário deu sobre o ícone, ativará a função 'handleFavClick'.*/
          }
          <div className='card-personagem'>
            {
              fav == true ?
            <p onClick={handleFavClick}>{descricao}</p>
            /*Caso o usuário mova o mouse para dentro ou para fora da imagem, a função 'handleHoverMouse' será ativada*/
            : 
            <img src={imagem} alt={titulo} onMouseEnter={handleHoverMouse} onClick={handleFavClick} onMouseLeave={handleHoverMouse}/>

            }
          </div>
          
       
        </div>
   
      

      </div>
  )
}


export default ItensEmocao; //A função 'ItensEmocao' está sendo exportada.