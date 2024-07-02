import ItensEmocao from "./ItensEmocao"; //A função 'ItensEmocao' está sendo importada.

const EmocaoItens = ({titulo, emocoes}) => { /*Esta função criando dois parâmetros, o primerio será utilizado no elemento de HTML que 
                                                será criado, O segundo parâmetro será utilizado como argumento da função 'ItensEmocao'.*/
    return (
        <>
            <h1 className='sub-title'>{titulo}</h1>
            <div className='section-itens'>
                {
                    emocoes.map((emocao) => //A função 'map()' vai mapear cada index da lista de objetos 'emocoes'.
                        <ItensEmocao titulo={emocao.nome} imagem={emocao.imagem} iconSolid={emocao.iconSolid} iconRegular={emocao.iconRegular} descricao={emocao.descricao}/>
                        /*Para cada index da lista 'emocoes', será adicionado como valores dos parâmetros da função 'ItensEmocao', as propriedades 
                            de cada objeto que está contido na lista 'emocoes'*/
                    )
                }
            </div>
        </>
    )
}

export default EmocaoItens; //A função 'EmocaoItens' está sendo exportada.