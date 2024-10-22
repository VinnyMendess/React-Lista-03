// 1) Renderizar Lista Dinâmica com Map: 

// Crie um componente que receba um array de nomes como propriedade e renderize cada nome em um item de lista (<li>) dentro de uma lista não ordenada (<ul>), usando o método map(). 

function Personagens(proops) {
    return(
        <li>Eu sou o personagem: {proops.personagem}</li>
    )
};

function Lol() {
    const boneco =['Jax'  , 'Yasuo' , 'Tryndamere'  , 'Wukong' , 'Yummi' , 'Sylas', 'Fiora' , 'Rammus', 'Yone' ] 

    return(
        <>
        <h1>Lista de Personagens Lol</h1>
        <ul>{boneco.map((boneco) => <Personagens personagem ={boneco}/>)}</ul>
        </>
    )
}

export default  Lol;
