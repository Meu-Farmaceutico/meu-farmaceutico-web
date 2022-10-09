const main = document.querySelector('.main');

const mockLembrete = [
    {id: 2, nome: "Gardenal", freq: "1 vez a cada 2 dias", qtd:90, ativo: false},
    {id: 1, nome: "Captopril", freq:"2 vezes ao dia", qtd: 50, ativo: true},
    
];


main.innerHTML = mockLembrete.map((lembrete) => {
    return `<article class="card" style = background-color:${lembrete.ativo? "#FFFFFF": "lightgrey"}>
    <div class="card-info">
        <h3 class="card-nome-medicamento">${lembrete.nome}</h3>
        <p class="card-frequencia-uso">${lembrete.freq}</p>
        <p class="card-quantidade-medicamento">${lembrete.qtd} unid. restantes</p>
    </div>
    <div class="card-action">
        <button class="card-toggle-lembrete"><img src=${lembrete.ativo ? "./assets/icons/bell-active.svg": "./assets/icons/bell-inactive.svg"} alt="ligar/desligar lembrete" class="icone"></button>
    </div>
</article>`
})