// 5) Renderizar Imagens com Condição: 

// Crie um componente que receba um array de URLs de imagens. O componente deve renderizar todas as imagens cujas URLs não estejam vazias. 
function URLs(props){
    if(props.url.trim() !== ""){
    return <li><img src={props.url} alt="Imagem" style={{ width: '200px', margin: '10px' }} /></li>;

}else{
    return null
}

}

function IsNotVisible(){
    return  <h1>Voltei novamente!</h1>
}

function Imagem(props){
    const name = [
        {id:1,url:" "},
        {id:2,url:"https://s3.wasabisys.com/instax/74/instax/2022/08/fotografias-de-paisagens-1661176157.jpeg"},
        {id:3,url:" "},
        {id:4,url:"https://thumbs.dreamstime.com/b/belas-fotos-rosa-e-roxo-no-infravermelho-de-paisagens-rurais-na-europa-lindas-infravermelhos-roxos-cor-alemanha-157831242.jpg"},
        {id:5,url:" "}
        ] 
    const msg = props.msg
    if (msg.trim() === ""){
        return <IsNotVisible/>
    }else{
        return (
            <ul>
            {name.map((Imagem) =>(
                <URLs key={Imagem.id} url={Imagem.url}/>
            ))}
        </ul>
        )
    }
}

export default Imagem