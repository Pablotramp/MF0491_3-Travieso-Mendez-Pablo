// EJERCICIO 1
function dimeTipoMotor() {
  let tipoMotor = document.querySelector('#motor')
  let parent = document.querySelector('.solc-ejerc-1')
  let pEjer1 = document.createElement('p')
  pEjer1.className = ("pEjer1")

  switch (tipoMotor.value) {
    case '0' :
      parent.removeChild(parent.lastChild);
      parent.append(pEjer1)
      pEjer1.innerHTML = `“No hay establecido un valor definido para el tipo de bomba”`
    break;
    case '1' :
      parent.removeChild(parent.lastChild);
      parent.append(pEjer1)
      pEjer1.innerHTML = `“La bomba es una bomba de agua”`
    break;
    case '2' :
      parent.removeChild(parent.lastChild);
      parent.append(pEjer1)
      pEjer1.innerHTML = `“La bomba es una bomba de gasolina”`
    break;
    case '3' :
      parent.removeChild(parent.lastChild);
      parent.append(pEjer1)
      pEjer1.innerHTML = `“La bomba es una bomba de hormigón”`
    break;
    case '4' :
      parent.removeChild(parent.lastChild);
      parent.append(pEjer1)
      pEjer1.innerHTML = `“La bomba es una bomba de pasta alimenticia”`
    break;
    default :
      parent.removeChild(parent.lastChild);
      parent.append(pEjer1)
      pEjer1.innerHTML = `“No existe un valor válido para tipo de bomba”`
    break;
  }
}
document.querySelector('.btn-ej1').addEventListener('click', dimeTipoMotor)
// EJERCICIO 2
function parOimpar () {
  let parent = document.querySelector('.solc-ejerc-2')
  let pEjer2 = document.createElement('p')
  pEjer2.className = ("pEjer2")


  let numeroEj2 = document.querySelector('.entero-ej2').value
  let expRegEj2 = /^\s?\d*\s?$/
  if (!expRegEj2.test(Number(numeroEj2))) {
    parent.removeChild(parent.lastChild);
    parent.append(pEjer2)
    pEjer2.innerHTML = `“El número '${numeroEj2}' No es un número válido”` 
  } else {
    if ( Number(numeroEj2) % 2 == 0 ) {
      parent.removeChild(parent.lastChild);
      parent.append(pEjer2)
      pEjer2.innerHTML = `“El número '${numeroEj2}' es un número PAR”` 
    } else { 
      parent.removeChild(parent.lastChild);
      parent.append(pEjer2)
      pEjer2.innerHTML = `“El número '${numeroEj2}' es un número IMPAR”` 
    }
  }
}
document.querySelector('.btn-ej2').addEventListener('click', parOimpar)
// EJERCICIO 3
function addName () {
  if (!document.querySelector('.pEjer3')){
    let parent = document.querySelector('body')
    let pEjer3 = document.createElement('p')
    pEjer3.className = ("pEjer3")
    parent.prepend(pEjer3)
    pEjer3.innerHTML = `<strong>Pablo Travieso Méndez</strong>` 
  } else {
  }
}
document.querySelector('.btn-ej3').addEventListener('click', addName)
// EJERCICIO 4
function areaTriang () {
  let parent = document.querySelector('.solc-ejerc-4')
  let pEjer4 = document.createElement('p')
  pEjer4.className = ("pEjer4")

  let base = document.querySelector('.base-ej4').value
  let altura = document.querySelector('.altura-ej4').value
  let expRegEj4 = /^\s?\d*.?\d*\s?$/

  if (!expRegEj4.test(Number(base)) || !expRegEj4.test(Number(altura))) {
    parent.removeChild(parent.lastChild);
    parent.append(pEjer4)
    pEjer4.innerHTML = `“La base '${base}' ó la altura '${altura}' No son números válidos”` 
  } else {    
    parent.removeChild(parent.lastChild);
    parent.append(pEjer4)
    let area = Number(base)*Number(altura)/2
    pEjer4.innerHTML = `“El área (a) de un triángulo de base (b) '${base}' y altura (h) '${altura}' es: '${area}'”` 
  }
}
document.querySelector('.btn-ej4').addEventListener('click', areaTriang)
// EJERCICIO 5
var array = []
function addNumber () {
  let numbToAdd = document.querySelector('.nos-ej5').value
  let expRegEj5 = /^\s?\d*.?\d*\s?$/

  let parent = document.querySelector('.solc-ejerc-5')
  let pArray = document.createElement('p')
  pArray.className = ("pArray")

  if (document.querySelector('.pEjer5')) {
    parent.removeChild(parent.lastChild);
    parent.append(pArray)
    if (!expRegEj5.test(Number(numbToAdd))) {
      pArray.innerHTML = `“'${numbToAdd}' No es un número válido”`
    } else {
      array.push(Number(numbToAdd))
      pArray.innerHTML = `“Éste es tu array [${array}]”`
    }
  } else if (document.querySelector('.pArray')) {
    parent.removeChild(parent.lastChild);
    parent.append(pArray)
    if (!expRegEj5.test(Number(numbToAdd))) {
      pArray.innerHTML = `“'${numbToAdd}' No es un número válido”`
    } else {
      array.push(Number(numbToAdd))
      pArray.innerHTML = `“Éste es tu array [${array}]”`
    }
  } else {
      parent.append(pArray)
      if (!expRegEj5.test(Number(numbToAdd))) {
        pArray.innerHTML = `“'${numbToAdd}' No es un número válido”`
      } else {
        array.push(Number(numbToAdd))
        pArray.innerHTML = `“Éste es tu array [${array}]”`
      }
  }
}
function arrayMayElem () {
  let parent = document.querySelector('.solc-ejerc-5')
  let pEjer5 = document.createElement('p')
  pEjer5.className = ("pEjer5")

  let maxValue = Math.max(...array)

  parent.removeChild(parent.lastChild);
  parent.append(pEjer5)
  pEjer5.innerHTML = `“Éste es tu array [${array}]”<br> “Él mayor de los números del array es: '[${maxValue}]' ”`




}
document.querySelector('.new-number').addEventListener('click', addNumber)
document.querySelector('.btn-ej5').addEventListener('click', arrayMayElem)
