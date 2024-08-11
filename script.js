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



var btnLn = document.getElementById("btnLn");
var btnInsta = document.getElementById("btnInsta");
var btnContact = document.getElementById("btnContact");
btnLn.onclick = function() {
  window.location.assign("https://www.linkedin.com/company/fabula-kreatif/");
}
btnInsta.onclick = function() {
  window.location.assign("https://www.instagram.com/ajansfabula?igsh=MWwyZ3E2YmowcnQyaQ%3D%3D&utm_source=qr");
}
btnContact.onclick = function() {
  alert("Contact form building");
}


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
      hotspot.style.borderSize = `10px`; // Tamaño ajustado
    });
  } else {
    alert("Estas en una computadora");
  }
});

//button.annotation