function cRear() {      
      try {
        fetch('http://localhost:8080/API/aves/')
      .then(respuesta => respuesta.json())
      .then(datos => {
        document.getElementById('formul').innerHTML =    
              `<div id="formu">
          <h2>Nombre</h2>
          <input type="text" id="nombre" placeholder="NOMBRE">
          <h2>Alimentación</h2>
          <input type="text" id="alimento" placeholder="ALIMENTO">
          <h2>Viene</h2>
          <input type="text" id="viene"  placeholder="VIENE">
          <h2>URL de la imagen</h2>
          <input type="text" id="imgUrl" placeholder="ingrese la url de la imagen">
          <button onclick="mAke()"  id="crear">guardar</button>
  
  
      </div>`
      document.getElementById('formul').style.display = 'block';
      })
      } catch (error) {
        console.error('no se pudo encontrar', error)
      }
  }
  function mAke() {
    try { 
        fetch('http://localhost:8080/API/aves/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: document.getElementById('nombre').value,
          alimentación: document.getElementById('alimento').value,
          Viene : document.getElementById('viene').value,
          imgUrl: document.getElementById('imgUrl').value
        }),
      }).then(respuesta => respuesta.json())
        .then(datos => console.log(datos))
        
        location.reload();

        } catch (error) {
            console.error('no se pudo crear', error)
        }
  }
  