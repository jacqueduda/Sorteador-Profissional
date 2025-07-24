 function generateNumber() {

const min = Math.ceil(document.querySelector('.input-box').value)
const max = Math.floor(document.querySelector('.input-box2').value)

if (min >= max) {
  alert('O valor mínimo deve ser menor que o valor máximo')
} else {

  const result = Math.floor(Math.random() * (max - min + 1)) + min

alert (result)}

 }
    
     function atualizarRelogio() {
      const agora = new Date();

      const dia = String(agora.getDate()).padStart(2, '0');
      const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Janeiro = 0
      const ano = agora.getFullYear();

      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      const segundos = String(agora.getSeconds()).padStart(2, '0');

      const dataHoraFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

      document.getElementById('relogio').textContent = dataHoraFormatada;
    }

    // Atualiza imediatamente e depois a cada segundo
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);
  