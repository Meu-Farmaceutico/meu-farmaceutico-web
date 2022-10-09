import './lembrete.css'

const Lembrete = (props) => {
    return (
<article class="card" style = {{backgroundColor: props.ativo? "#FFFFFF": "lightgrey"}}>
    <div class="card-info">
        <h3 class="card-nome-medicamento">${props.nome}</h3>
        <p class="card-frequencia-uso">${props.freq}</p>
        <p class="card-quantidade-medicamento">${props.qtd} unid. restantes</p>
    </div>
    <div class="card-action">
        <button class="card-toggle-lembrete"><img src={props.ativo ? "./assets/icons/bell-active.svg": "./assets/icons/bell-inactive.svg"} alt="ligar/desligar lembrete" class="icone"/></button>
    </div>
</article>
    )
}

export default Lembrete;