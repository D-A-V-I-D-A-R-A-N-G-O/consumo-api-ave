function eDitar() {
    let Pepe = 1
    /* let Pepe = document.getElementById('lista').value */
      
      try {
        fetch('http://localhost:8080/API/aves/'+Pepe)
      .then(respuesta => respuesta.json())
      .then(datos => {
        document.getElementById('formu').innerHTML =    
              `<div id="formu">
          <input type="text" id="nombre" placeholder="ingrese el nombre">
          <input type="text" id="alimento" placeholder="ingrese el alimento">
          <input type="text" id="viene"  placeholder="cada cuanto viene">
          <input type="text" id="imgUrl" placeholder="ingrese la url de la imagen">
      </div>`
      })
      } catch (error) {
        console.error('no se pudo encontrar', error)
      }
  }
  