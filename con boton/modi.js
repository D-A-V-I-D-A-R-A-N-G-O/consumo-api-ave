function moDificar() {
    /*     let Pepe = document.getElementById('lista').value
     */   
          let Pepe = 1
          fetch('http://localhost:8080/API/aves/'+Pepe, {
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
        }).then(respuesta => resporespuestanse.json())
          .then(datos => console.log(datos))
      } 