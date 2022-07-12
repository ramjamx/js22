console.log('hola hackerman');

// hago una lista de objetos
const boxes = document.querySelectorAll('.box')

// con typeof puedo saber de que tipo es una variable, en este caso objeto.
console.log(`boxes es una variable de tipo: ${typeof boxes}`);

// convierto objetos a un array
const box = Array.from(boxes).forEach(
  //por cada objeto añado una función anónima
  (boxContent) =>{
    // cada función anónima escucha un clic
    boxContent.addEventListener('click', function () {
      // verifico que estoy apuntando al contenido del objeto
      console.log(`cambiame a ${boxContent.innerHTML}`)
      // cambio el estilo de boy
      document.body.style.backgroundColor = boxContent.innerHTML;
    })
  }
  
);

