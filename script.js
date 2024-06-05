document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    showSlide(currentSlide);
});


      // Selecciona todos los enlaces con la clase 'text-small'
      let links = document.querySelectorAll('.text-small');

      // Para cada enlace, agrega un evento de click
      links.forEach(link => {
        link.addEventListener('click', function(event) {
          // Previene el comportamiento por defecto del enlace
          event.preventDefault();

          // Obtiene el ID del enlace
          let id = this.getAttribute('id');

          // Define la información a mostrar en la alerta
          let info;

          // Usa un switch para determinar qué información mostrar basándote en el ID del enlace
          switch(id) {
            case 'individual':
              info = 'Información sobre la habitación individual:\n\n- Una cama individual\n- Baño privado\n- TV y aire acondicionado\n- Precio desde $35.00';
              break;
            case 'matrimonial':
              info = 'Información sobre la habitación matrimonial:\n\n- Una cama matrimonial\n- Baño privado\n- TV y aire acondicionado\n- Precio desde $35.00';
              break;
            case 'dobles':
              info = 'Información sobre la habitación doble:\n\n- Dos camas individuales\n- Baño privado\n- TV y aire acondicionado\n- Precio desde $35.00';
              break;
            case 'triples':
              info = 'Información sobre la habitación triple:\n\n- Tres camas individuales\n- Baño privado\n- TV y aire acondicionado\n- Precio desde $54.00';
              break;
            case 'cuadruples':
              info = 'Información sobre la habitación cuádruple:\n\n- Cuatro camas individuales\n- Baño privado\n- TV y aire acondicionado\n- Precio desde $72.00';
              break;
            default:
              info = 'No se encontró información para esta habitación.';
              break;
          }

          // Muestra la alerta SweetAlert2 con la información correspondiente
          Swal.fire({
            title: 'Información de la habitación',
            text: info,
            icon: 'info',
            confirmButtonText: 'Cerrar',
            footer: `<button class="btn-primary" onclick="window.location.href='./Servicios.html'">Conoce los servicios por reservar esta habitación</button>`
          });

        });
      });

  document.getElementById('btn-reserva').addEventListener('click', function() {
  Swal.fire({
    title: 'Reserva',
    html: `
    <div class="contacto-texto">
      <p class="contact-info"> Por el momento no contamos con reservaciones mediante la pagina, pero puedes escribirnos para reservar tu habitacion ideal !</p>
      <p class="contact-info"><strong>Numero 1:</strong> <img src="public/WhatsApp.svg.webp" alt="whatsappLogo" class="logo"> <a href="https://api.whatsapp.com/send?phone=593979089004" target="_blank">+593 97 908 9004</a></p>
      <p class="contact-info"><strong>Numero 2:</strong> <img src="public/WhatsApp.svg.webp" alt="whatsappLogo" class="logo"> <a href="https://api.whatsapp.com/send?phone=593990927132" target="_blank">+593 99 092 7132</a></p>
    </div>
      `,
    icon: 'info',
    confirmButtonText: 'OK'
  });
});

document.querySelectorAll('.btn-primary').forEach(function(button) {
button.addEventListener('click', function() {
  Swal.fire({
    title: 'Reserva',
    html: `
    <div class="contacto-texto">
      <p class="contact-info"> Por el momento no contamos con reservaciones mediante la pagina, pero puedes escribirnos para reservar tu habitacion ideal !</p>
      <p class="contact-info"><strong>Numero 1:</strong> <img src="public/WhatsApp.svg.webp" alt="whatsappLogo" class="logo"> <a href="https://api.whatsapp.com/send?phone=593979089004" target="_blank">+593 97 908 9004</a></p>
      <p class="contact-info"><strong>Numero 2:</strong> <img src="public/WhatsApp.svg.webp" alt="whatsappLogo" class="logo"> <a href="https://api.whatsapp.com/send?phone=593990927132" target="_blank">+593 99 092 7132</a></p>
    </div>
      `,
    icon: 'info',
    confirmButtonText: 'OK'
  });
});
});