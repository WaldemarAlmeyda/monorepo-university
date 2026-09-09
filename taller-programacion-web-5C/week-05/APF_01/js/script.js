const botonMenu = document.querySelector('.nav__boton');
const listaNav = document.querySelector('.nav__lista');

if (botonMenu && listaNav) {
  botonMenu.addEventListener('click', function () {
    listaNav.classList.toggle('nav__lista--abierta');

    const abierto = listaNav.classList.contains('nav__lista--abierta');
    botonMenu.setAttribute('aria-expanded', abierto);
  });
}

const botonArriba = document.getElementById('volver-arriba');

if (botonArriba) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      botonArriba.hidden = false;
    } else {
      botonArriba.hidden = true;
    }
  });

  botonArriba.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const formularios = document.querySelectorAll('form[data-demo="true"]');

formularios.forEach(function (formulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const mensaje = formulario.querySelector('.mensaje-confirmacion');
    if (mensaje) {
      mensaje.hidden = false;
      mensaje.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

const areaMensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador-mensaje');

if (areaMensaje && contador) {
  areaMensaje.addEventListener('input', function () {
    contador.textContent = areaMensaje.value.length;
  });
}
