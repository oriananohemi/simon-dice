const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');

class juego {
  constructor() {
    this.inicializar();
  }

  inicializar() {
    btnEmpezar.classList.add('hide');
  }
}

function empezarJuego() {
  var juego = new Juego();
}
