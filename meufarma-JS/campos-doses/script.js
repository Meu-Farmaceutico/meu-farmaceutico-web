const camposDose = document.querySelector('.campos-dose');

const campoTipo = document.getElementById('tipo-selecionado');
const campoFrequencia = document.getElementById('freq-selecionada')

const tipoMedicamento = "gota";
const frequenciaDeUso = "2 vezes ao dia";

localStorage.setItem('tipo', tipoMedicamento);
localStorage.setItem('freq', frequenciaDeUso)

console.log(localStorage.getItem('tipo'));
console.log(localStorage.getItem('freq'));

  
campoFrequencia.value = localStorage.getItem('freq');
let contador = localStorage.getItem('freq')
for (let i = 1;  i <= contador; i ++) {
    camposDose.innerHTML += `  <label for='time'>Horário da ${i}º dose<ľabel> 
                        <input id="time" type="time">`    
}