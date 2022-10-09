const unidade = document.querySelector('.unidade');
const freqDeUso = document.querySelector('.uso');

unidade.addEventListener('change', () => {
    localStorage.setItem('unidade', unidade.value);
});

freqDeUso.addEventListener('change', () => {
    localStorage.setItem('freq', freqDeUso.value);
});