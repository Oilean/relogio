const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    
    let hh = dateToday.getHours();
    let mm = dateToday.getMinutes();
    let ss = dateToday.getSeconds();

    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    
    horas.textContent = hh;
    minutos.textContent = mm;
    segundos.textContent = ss;
})