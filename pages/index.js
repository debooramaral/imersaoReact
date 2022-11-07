//para carregar arquivos de fora, faça dessa forma abaixo, depois disso chame-os no escopo desejado
import config from "../config.json"
import styled from "styled-components";

function HomePage() { 
    //variaveis que monta ali embaixo
    // const mensagem = "Bem vindo a AluraTube !";
    const estilodaHomePage = { backgroundColor: "pink" }; 
  return ( //parenteses para flexibilidade de edição do código no escopo
    //monta aqui, o estilo e se tiver, mensagem
    <div style={estilodaHomePage}> 
        <Menu/>
        <Header/>
        <Timeline/>
    </div> 
    //exato momento em que o componente para de ser só uma pedaço de interface, para ser um tag <>
    //quando tem ..styled={{}} a primeira chaves, é valor JS dentro do html (azul) depois o objeto (amarelo)
  );
}

export default HomePage


//para quem não esta acostumado com varios arquivos, insere tudo em um
function Menu(){
    return(
        <div>
            Menu
        </div>
    )
}

//crio o compenente que ja tem o proprio estilo 
const StyleHeader = styled.div` 
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;	
function Header(){
    return(
        //chame o que foi importado de fora (config.json) para cá
        <StyleHeader>
            {/* <img src="banner"/> */}
            <div>
                <img src={`https://github.com/${config.github}.png`}/>
                {config.name}
                {config.job}
            </div>
        </StyleHeader> 
        //quando tem {{}} a primeira chaves, é de nivel do JS 
    )
}

function Timeline(){
    return(
        <div>
            Timeline
        </div>
    )
}


/*CONFIG.JSON
uma especie de package json que define as coisas gerais do projeto, quais são os scripts e tudo mais
teremos o nosso config do nosso projeto, especifico do projeto; coisas mais gerais que mostra quem ta utilizando meu projeto
*/