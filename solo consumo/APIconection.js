async function obtenerAves() {
    try {
        const response = await fetch('https://api-ave-d8ar.onrender.com/API/aves');
        const data = await response.json();
        const avesContainer = document.getElementById('aves-container');
        console.log(data); 
        data.forEach(ave => {
            const aveElement = document.createElement('div');
            aveElement.classList.add('ave');
            
            let caRita = () => {
                let pepe
                if (ave.Viene === "Mucho") { 
                    pepe = [ave.Viene, "😁"];
                } else if (ave.Viene === "A Veces") { 
                    pepe = [ave.Viene, "😐"];
                } else if (ave.Viene === "Casi Siempre") {
                    pepe = [ave.Viene,  "😅"];
                } else if  (ave.Viene === "Ya No") {
                    pepe = [ave.Viene, "😔"];
                } else if(ave.Viene)
                    pepe = [ave.Viene]
                return pepe
            }

            aveElement.innerHTML = 
            `<div>
                <h2 id="nombre">${ave.nombre}</h2>
                <img id="imgUrlS" src="${ave.imgUrl}" alt="${ave.nombre}">
                <h3>ALIMENTACIÓN: ${ave.alimentación}</h3>
                <h3>VIENE: ${caRita()}</h3>
            </div>`;
            avesContainer.appendChild(aveElement);
        });
    } catch (error) {
        console.error("no se pudo hacer", error);
    }
}

window.onload = obtenerAves;
