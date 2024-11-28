async function obtenerlistaAves() {
  try {
      const response = await fetch('http://181.133.27.242:8080/API/aves');
      const data = await response.json();
      const listaContainer = document.getElementById('lista');
      listaContainer.innerHTML = '';  
      data.forEach(ave => {
          const aveElement = document.createElement('option');
          aveElement.value = ave.id;
          aveElement.textContent = ave.nombre;
          listaContainer.appendChild(aveElement);
             document.getElementById('todo').style.display = 'none'
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
      fetch('http://181.133.27.242:8080/API/aves/'+Pepe)
    .then(respuesta => respuesta.json())
    .then(datos => {
      document.getElementById('formularioo').style.display = 'none';
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
        if (!datos.nombre) {
          return alert("ese man no existe"),
          window.location.reload()
        } else {
          document.getElementById('aves-container').innerHTML =    
            `
                <h2 >${datos.nombre}</h2>
                <img src="${datos.imgUrl}" alt="${datos.nombre}">
                <h2>ALIMENTACIÓN: ${datos.alimentacion}</h2>
                <h2>VIENE: ${caRita()}</h2>
                <button id="eDitar" onclick="eDitar()" >EDITAR</button>
            
              `
              document.getElementById('todo').style.display = 'flex'
              document.getElementById('aves-container').style.display = 'flex'
        }
      
    })
    } catch (error) {
      console.error('no se pudo encontrar', error)
      window.location.reload()

    }
  }
  
function eDitar() {
        
  let Pepe = document.getElementById('lista').value 
    
    try {
      fetch('http://181.133.27.242:8080/API/aves/'+Pepe)
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
      document.getElementById('formularioo').innerHTML =    
            `
        <h2>Nombre</h2>
        <input type="text" id="nombre" placeholder="${datos.nombre}">
        <h2>Alimentación</h2>
        <input type="text" id="alimento" placeholder="${datos.alimentacion}">
        <h2>Viene</h2>
        <input type="text" id="viene"  placeholder="${caRita()}">
        <h2>URL de la imagen</h2>
        <input type="url" id="imgUrl" placeholder="url de la imagen">
          <div id="boton">
            <button onclick="moDificar()"  id="moDificar">GUARDAR</button>
            <button id="borrar" onclick="eLiminar()">BORRAR</button>
        </div>
        `
    document.getElementById('formularioo').style.display = 'flex';
    })
    } catch (error) {
      console.error('no se pudo encontrar', error)
    }
}
  function moDificar() {
    let Pepe = document.getElementById('lista').value
     
          fetch('http://181.133.27.242:8080/API/aves/'+Pepe, {
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
        .catch(error => 
          console.error('no se pudo modificar', error));
      }
      

      async function cRear() {      
        try {
           
            const response = await fetch('http://181.133.27.242:8080/API/aves/');
            const data = await response.json();
           
            document.getElementById('formularioo').innerHTML =    

            `      
            <h2>personaje nuevo</h2>
                  <h2>Nombre</h2>
                  <input type="text" id="nombre" placeholder="NOMBRE">
                  <h2>Alimentación</h2>
                  <input type="text" id="alimento" placeholder="ALIMENTO">
                  <h2>Viene</h2>
                  <input type="text" id="viene"  placeholder="VIENE">
                  <h2>URL de la imagen</h2>
                  <input type="text" id="imgUrl" placeholder="URL DE IMAGEN">
                  <button onclick="mAke()" id="guardar">Guardar</button>
            `
              
            document.getElementById('todo').style.display = 'flex';
            document.getElementById('formularioo').style.display = 'flex';
            document.getElementById('aves-container').style.display = 'none'

        } catch (error) {
            console.error('No se pudo encontrar', error);
        }
    }
    
    async function mAke() {
        try {
            const nombre = document.getElementById('nombre').value
            const alimentacion = document.getElementById('alimento').value
            const Viene = document.getElementById('viene').value
            const imgUrl = document.getElementById('imgUrl').value

            if (!nombre || !alimento || !Viene || !imgUrl) {
              return alert('Todos los campos son obligatorios');
          }

            const response = await fetch('http://181.133.27.242:8080/API/aves/', {
              
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                nombre,
                alimentacion, 
                Viene,  
                imgUrl
                
              }),
            });
    
            const datos = await response.json();
            console.log(datos);
            await reciBir();  
            obtenerlistaAves();

          } catch (error) {
            console.error('No se pudo crear', error);
        }
    }
    
async function eLiminar() {
  let Pepe = document.getElementById('lista').value
   try {
    const response = await fetch('http://181.133.27.242:8080/API/aves/'+Pepe, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
   }
   });
    const datos = await response.json();
    console.log(datos);
    window.location.reload();
    alert('a sido exterminado')
  } catch (error) {
   console.error('No se pudo crear', error);
}
}
  
