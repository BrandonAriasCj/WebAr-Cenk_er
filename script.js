document.addEventListener("DOMContentLoaded", ()=>{
    var modal1 = document.getElementById("ModalAboutUs");
    var boxContent1 = document.getElementById("boxAboutUs");
    var btn1 = document.getElementById("aboutUs");
    var span1 = document.getElementsByClassName("close")[0];
    btn1.onclick = function() {
      modal1.style.display = "block";
    }

    span1.onclick = function() {
      modal1.style.display = "none";
    }



    var modal2 = document.getElementById("ModalContact");
    var boxContent2 = document.getElementById("boxContact");
    var btn2 = document.getElementById("btnContact");
    var span2 = document.getElementsByClassName("close")[1];
    btn2.onclick = function() {
      modal2.style.display = "block";
    }

    span2.onclick = function() {
      modal2.style.display = "none";
    }


    window.onclick = function(event) {
      if (event.target == boxContent1) {
        modal1.style.display = "none";
        console.log("condicion cumplida para modal1");
      }
  
      if (event.target == boxContent2) {
        modal2.style.display = "none";
        console.log("condicion cumplida para modal2");
      }
    }
});



document.addEventListener('DOMContentLoaded', () => {
  var btnLn = document.getElementById("btnLn");
var btnInsta = document.getElementById("btnInsta");
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


document.addEventListener('DOMContentLoaded', ()=>{
  function esDispositivoMovil() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const esMovilPorUserAgent = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
    const esMovilPorTamaño = window.matchMedia('(max-width: 767px)').matches;
    
    return esMovilPorUserAgent || esMovilPorTamaño;
  }
  
  if (esDispositivoMovil()) {
    alert("Estas en un mobil");
    const hotspots = document.querySelectorAll('.Hotspot');
    hotspots.forEach(hotspot => {
      hotspot.style.borderWidth = `10px`; // Tamaño ajustado
      console.log(hotspot);
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


document.addEventListener("DOMContentLoaded", ()=>{
  const modelViewer = document.querySelector('#modelGlb');

  // Espera a que el modelo esté completamente cargado
  modelViewer.addEventListener('load', () => {
    const animations = modelViewer.availableAnimations;
    console.log('Available Animations:', animations);
  });
});



document.addEventListener("DOMContentLoaded", ()=>{
  const modelViewer = document.querySelector('#modelGlb');
  let animationIndex = 0;

  // Espera a que el modelo esté completamente cargado
  modelViewer.addEventListener('load', () => {
    const animations = modelViewer.availableAnimations;

    if (animations.length > 0) {
      // Cambiar la animación cada 10 segundos
      setInterval(() => {
        animationIndex = (animationIndex + 1) % animations.length;
        modelViewer.animationName = animations[animationIndex];
        modelViewer.play();
      }, 10000); // 10000ms = 10 segundos
    } else {
      console.log('No hay animaciones disponibles en el modelo.');
    }
  });
});





/* ajax */


document.addEventListener("DOMContentLoaded", ()=>{

  document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe de la forma tradicional

    // Crear un objeto FormData con los datos del formulario
    var formData = new FormData(this);

    // Enviar los datos a través de AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/mail.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parsear la respuesta JSON
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            // Mostrar la respuesta como una alerta
            alert(response.message);
            
            // Si el envío fue exitoso, limpiar los campos del formulario
            if (response.status === 'success') {  
                console.log("reconoce el success")
                document.querySelector("#contactForm").reset();
                
            }
        }
    };
    xhr.send(formData);
});


});

