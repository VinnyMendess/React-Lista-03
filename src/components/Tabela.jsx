// 4) Renderizar uma Tabela: 

// Crie um componente que receba um array de objetos como propriedade e renderize esses objetos em uma tabela HTML, com colunas para id, nome e idade. 



function Tabela(props){

    return(
        <li>Eu sou um: {props.nome}</li>
    )

}

function Resultado (){
    const name = [
    {id:1,nome:"Vinicius"},
    {id:2,nome:"Davi B"},
    {id:3,nome:"Davi I"},
    {id:4,nome:"Felipe"},
    {id:5,nome:"Vitor"},
    ]
    return(
        <>
        <h1>Quais São os Carros que estão na minha garagem:</h1>
        <ul>
            {name.map((name) => <Tabela key={name.id} nome={name.nome} />)}
        </ul>
        </>
    )
}


export default Resultado