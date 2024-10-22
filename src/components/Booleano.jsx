function IsVisible(){
    return <h1>Surpresa eu voltei!</h1>
}

function IsNotVisible(){
    return  <h1>Voltei novamente!</h1>
}

function Resposta(props){
    const msg = props.msg
    if (msg === true){
        return <IsVisible/>
    }else{
        return <IsNotVisible/>
    }
}

export default Resposta

