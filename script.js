let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.onbeforematch(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }

    })
}


document.getElementById('contact-form').addEventListener('submit', async function(e){
    e.preventDefault();

    const datos = {
        nombre: this.nombre.value,
        email: this.email.value,
        mensaje: this.mensaje.value
    };

    const resp = await fetch('https://formspree.io/f/tu-codigo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });

    if(resp.ok){
        alert('¡Mensaje enviado con éxito!');
        this.reset();
    }else{
        alert('Hubo un problema al enviar el mensaje.');
    }
});



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}