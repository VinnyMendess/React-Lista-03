// 2) Renderizar Componentes com Props: 

// Crie um componente pai que passe uma propriedade (props) para um componente filho, e o componente filho deve renderizar essa propriedade no JSX. 
import  React from 'react'; 


const Filho = ({ mensagem })  => {
    return <h1>{mensagem}</h1>
}

const Papis = () => {
    const mensagemParaFilho = "Oi papis"

    return (
        <div>
            <h2>Componente Pai</h2>
            <Filho mensagem={mensagemParaFilho} />

        </div>
    )

}

export default  Papis

