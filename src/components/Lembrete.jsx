import './lembrete.css'

const Lembrete = (props) => {
   const [lembretes, setLembretes] = [
    {id: 2, nome: "Gardenal", freq: "1 vez a cada 2 dias", qtd:90, ativo: false},
    {id: 1, nome: "Captopril", freq:"2 vezes ao dia", qtd: 50, ativo: true},        
];
    
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