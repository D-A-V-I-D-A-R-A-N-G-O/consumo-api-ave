async function obtenerlistaAves() {
  try {
      const response = await fetch('https://api-ave-d8ar.onrender.com/API/aves');
      const data = await response.json();
      const listaContainer = document.getElementById('lista');
      listaContainer.innerHTML = '';  // Limpiar la lista antes de cargar los nuevos datos
      data.forEach(ave => {
          const aveElement = document.createElement('option');
          aveElement.value = ave.id;
          aveElement.textContent = ave.nombre;
          listaContainer.appendChild(aveElement);
      });
      console.log(data);
  } catch (error) {
      console.error("no se pudo hacer", error);
  }
}
window.onload = obtenerlistaAves;


function reciBir() { 
    let Pepe = document.getElementById('lista').value
    
    try {
      fetch('https://api-ave-d8ar.onrender.com/API/aves/'+Pepe)
    .then(respuesta => respuesta.json())
    .then(datos => {
      document.getElementById('formul').style.display = 'none';
      let caRita = () => {
        let pepe
        if (datos.Viene === "Mucho") { 
            pepe = [datos.Viene, "😁"];
        } else if (datos.Viene === "A Veces") { 
            pepe = [datos.Viene, "😐"];
        } else if (datos.Viene === "Casi Siempre") {
            pepe = [datos.Viene,  "😅"];
        } else if  (datos.Viene === "Ya No") {
            pepe = [datos.Viene, "😔"];
        } else if(datos.Viene)
            pepe = [datos.Viene]
        return pepe}
      document.getElementById('aves-container').innerHTML =    
            `<div id="personaje">
                <h2 >${datos.nombre}</h2>
                <img src="${datos.imgUrl}" alt="${datos.nombre}">
                <h3>ALIMENTACIÓN: ${datos.alimentacion}</h3>
                <h3>VIENE: ${caRita()}</h3>
                <button id="eDitar" onclick="eDitar()" >Editar</button>
            </div>`
    })
    } catch (error) {
      console.error('no se pudo encontrar', error)
      document.getElementById('nombre-ave').innerHTML = "No se encontró el ave"
    }
  }
  
function eDitar() {
        
  let Pepe = document.getElementById('lista').value 
    
    try {
      fetch('https://api-ave-d8ar.onrender.com/API/aves/'+Pepe)
    .then(respuesta => respuesta.json())
    .then(datos => {
      let caRita = () => {
        let pepe
        if (datos.Viene === "Mucho") { 
            pepe = [datos.Viene, "😁"];
        } else if (datos.Viene === "A Veces") { 
            pepe = [datos.Viene, "😐"];
        } else if (datos.Viene === "Casi Siempre") {
            pepe = [datos.Viene,  "😅"];
        } else if  (datos.Viene === "Ya No") {
            pepe = [datos.Viene, "😔"];
        } else if(datos.Viene)
            pepe = [datos.Viene]
        return pepe}
      document.getElementById('formul').innerHTML =    
            `<div id="formu">
        <h2>Nombre</h2>
        <input type="text" id="nombre" placeholder=${datos.nombre}>
        <h2>Alimentación</h2>
        <input type="text" id="alimento" placeholder=${datos.alimentacion}>
        <h2>Viene</h2>
        <input type="text" id="viene"  placeholder="${caRita()}">
        <h2>URL de la imagen</h2>
        <input type="text" id="imgUrl" placeholder="ingrese la url de la imagen">
        <hr>
        <button onclick="moDificar()"  id="moDificar">guardar</button>


    </div>`
    document.getElementById('formul').style.display = 'block';
    })
    } catch (error) {
      console.error('no se pudo encontrar', error)
    }
}
  function moDificar() {
    let Pepe = document.getElementById('lista').value
     
          fetch('https://api-ave-d8ar.onrender.com/API/aves/'+Pepe, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: document.getElementById('nombre').value,
            alimentación: document.getElementById('alimento').value,
            Viene : document.getElementById('viene').value,
            imgUrl: document.getElementById('imgUrl').value
          }),
        })
        .then(respuesta => respuesta.json())
        .then(datos => {
          console.log(datos);
          reciBir();  
         

        })
        .catch(error => console.error('no se pudo modificar', error));
      }
      

 function cRear() {
    let Pepe = document.getElementById('lista').value
    try {
      function moDificar() {     
              fetch('https://api-ave-d8ar.onrender.com/API/aves/'+Pepe, {
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
    } 
    } catch (error) {
      console.error('no se pudo modificar', error)
    }
 }
  