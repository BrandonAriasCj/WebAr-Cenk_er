var modal = document.getElementById("myModal");
var boxContent = document.getElementById("boxContent");
var btn = document.getElementById("aboutUs");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == boxContent) {
    modal.style.display = "none";
  }
}



document.addEventListener('DOMContentLoaded', () => {
  var btnLn = document.getElementById("btnLn");
var btnInsta = document.getElementById("btnInsta");
var btnsContact = document.querySelectorAll(".btnContact");
var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");
btnLn.onclick = function() {
  window.open("https://www.linkedin.com/company/fabula-kreatif/", "_blank");
}
btnInsta.onclick = function() {
  window.open("https://www.instagram.com/ajansfabula?igsh=MWwyZ3E2YmowcnQyaQ%3D%3D&utm_source=qr", "_blank");
}
btnsContact.forEach((btn)=>{btn.onclick = function(){
  alert("form building");
}});


square1.onclick = function(){
  window.open("https://www.anasigorta.com.tr","_blank");
}
square2.onclick = function(){
  window.open("https://www.fenerbahce.org","_blank");
}
square3.onclick = function(){
  window.open("https://www.camework.com","_blank");
}
square4.onclick = function(){
  window.open("https://www.maxithings.com","_blank");
}
square5.onclick = function(){
  window.open("https://www.mentasigorta.com","_blank");
}
square6.onclick = function(){
  window.open("https://www.tebom.net","_blank");
}

});

document.addEventListener('DOMContentLoaded', () => {
  const modelViewer = document.querySelector('model-viewer');
  
  let lastZoom = modelViewer.getCameraOrbit().radius;
  

  const adjustHotspots = () => {
    const hotspots = document.querySelectorAll('button.Hotspot');
    const currentZoom = modelViewer.getCameraOrbit().radius;

    if (lastZoom !== currentZoom) {
      const scaleFactor = 26 - currentZoom;
      hotspots.forEach(hotspot => {
        hotspot.style.width = `${1.3 * scaleFactor}em`; // Tamaño ajustado
        hotspot.style.height = `${1.3 * scaleFactor}em`; // Tamaño ajustado
      });
      lastZoom = currentZoom;
    }
  };

  // Usar un bucle de actualización para ajustar los hotspots
  const updateLoop = () => {
    adjustHotspots();
    requestAnimationFrame(updateLoop);
  };

  updateLoop();
});


document.addEventListener('DOMContentLoaded', ()=>{
  function esDispositivoMovil() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const esMovilPorUserAgent = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
    const esMovilPorTamaño = window.matchMedia('(max-width: 767px)').matches;
    
    return esMovilPorUserAgent || esMovilPorTamaño;
  }
  
  if (esDispositivoMovil()) {
    const hotspots = document.querySelectorAll('button.Hotspot');
    hotspots.forEach(hotspot => {
      hotspot.style.borderSize = `5px`; // Tamaño ajustado
    });
  } else {
    alert("Estas en una computadora");
    const modelViewer = document.querySelector('model-viewer');
    modelViewer.setAttribute('camera-orbit', '225deg 75deg 15m');

  }
});

//button.annotation

document.querySelector('#modelGlb').addEventListener('error', function(event) {
  console.log('Error loading the 3D model, switching to the alternative model.');
  this.src = 'https://cdn.glitch.global/8b6e14c7-6897-4c17-9de9-41a2e82d2d5f/compressed.glb?v=1723335254742'; // Enlace alternativo
});




const allowedElement = document.getElementById('modelGlb');

function isInsideAllowedElement(event) {
    return event.target === allowedElement;
}

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey && !isInsideAllowedElement(event)) {
        event.preventDefault();
    }
}, { passive: false });

document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && (event.key === '+' || event.key === '-')) || event.key === 'Meta') {
        if (!isInsideAllowedElement(event)) {
            event.preventDefault();
        }
    }
});

document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1 && !isInsideAllowedElement(event)) {
        event.preventDefault();
    }
}, { passive: false });

