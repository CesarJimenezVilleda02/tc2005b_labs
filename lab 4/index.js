// SELECCIONAR TODOS LOS TAGS DE PARRAFO QUE CONTENDRÁN LAS RESPUESTAS
const answers = document.querySelectorAll("#problemAnswer");

// PROBLEMA 1
const ultimoNumero = prompt("Ingrese un número para obtener una tabla de cuadrados y cubos hasta dicho número");
let table = '<table><tr><th>Numero</th><th>Numero al cuadrado</th><th>Numero al cubo</th></tr>';
for(let i = 1; i <= ultimoNumero; i++) {
    table += `<tr><td>${i}</td><td>${i*i}</td><td>${i*i*i}</td></tr>`;
}
table += '</table>';
answers[0].innerHTML = table;

// PROBLEMA 2
const numero1 = Math.floor(Math.random() * (100 - 1)) + 1;
const numero2 = Math.floor(Math.random() * (100 - 1)) + 1;

const inicio = Date.now();
const respuesta = prompt(`Ingrese el resultado de la operacion: ${numero1} + ${numero2}`);
const final = Date.now();

const duracion = (final - inicio) / 1000;

let contenido = `El resultado fue ${respuesta == numero1+numero2 ? 'correcto' : 'incorrecto'} y te tardaste ${Math.round(duracion)} segundos en responder`;
answers[1].innerHTML = contenido;

// PROBLEMA 3
const array = [-1,5,0,0,4,-6,1,8,5,9,-10,0,0,28,-19,5,67];

const contador = (array) => `${array.reduce((acum, curr) => curr > 0 ? acum+=1 : acum,0)} numeros positivos<br>${array.reduce((acum, curr) => curr < 0 ? acum+=1 : acum,0)} numeros negativos<br>${array.reduce((acum, curr) => curr == 0 ? acum+=1 : acum,0)} numeros iguales a 0`

const respuesta3 = `Arreglo del problema: [-1,5,0,0,4,-6,1,8,5,9,-10,0,0,28,-19,5,67]<br>${contador(array)}`;
answers[2].innerHTML = respuesta3;

// PROBLEMA 4
const matrix = [[1,2,3,7,19,26],[33,25,14,65,8,7],[4,7,8,6,9,7],[1,35,4,6,18]];

const promedios = (matriz) => matriz.map((arr) => arr.reduce((curr, num) => curr + num,0) / arr.length);

const respuesta4 = `Matrix: [[1,2,3,7,19,26],[33,25,14,65,8,7],[4,7,8,6,9,7],[1,35,4,6,18]]<br>Promedios: ` + promedios(matrix).join(', ') + ', respectivamente.';
answers[3].innerHTML = respuesta4;

// PROBLEMA 5
const numeroAInvertir = prompt('Ingresa un numero para invertir sus digitos');

// Funcion
const inverso = (num) => num.toString().split('').reverse().join('');

answers[4].innerHTML = `El número que ingresaste fue ${numeroAInvertir} y sus digitos invertidos son: ${inverso(numeroAInvertir)}`

// PROBLEMA 6
/*Write code to remove duplicate elements from an unsorted linked list*/

// Definicion de la clase node 
// Node
class ListNode {
    constructor(val = null) {
        this.data = val;
        this.next = null;
    }
}

// Definicion de la clase lista 
// List
class List {
    constructor(elements = []) {
        this.head = new ListNode(elements[0]);
        this.size = 1;

        let currNode = this.head;
        for(let i = 1; i < elements.length; i++) {
            currNode.next = new ListNode(elements[i]);
            currNode = currNode.next;
            this.size++;
        }
    }
    pushBack(val) {
        if(this.head == null) {
            this.head = new ListNode(val);
            return;
        }

        let currNode = this.head;
        while(currNode.next != null) {
            currNode = currNode.next;
        }
        currNode.next = new ListNode(val);
        this.size++;
    }
    pushFront(val) {
        let newNode = new ListNode(val);
        let pastHead = this.head;
        this.head = newNode;
        this.head.next = pastHead;
        this.size++;
    }
    getString() {
        let nodeStr = '';
        let currNode = this.head;
        while(currNode != null) {
            nodeStr += currNode.data + ' -> ';
            currNode = currNode.next;
        }
        return nodeStr;
    }
    getNode(pos) {
        let nodeAtPos = this.head;
        for(let i = 1; i < pos; i++) {
            nodeAtPos = nodeAtPos.next;
        }
        return nodeAtPos;
    }
}

// SOLUCION 
// con buffer es O(N) y espacio O(N)
const removeDuplicates = (linkedList) => {
    let appeared = new Set();
    let currNode = linkedList.head;
    appeared.add(currNode.data);
    while(currNode?.next != null) {
        // console.log(currNode.data, currNode.next.data);
        if(appeared.has(currNode.next.data)) {
            currNode.next = currNode.next.next;
        } else {
            appeared.add(currNode.next.data);
            currNode = currNode.next;  
        }
    }
    return linkedList;
}

// TESTING 
const testLL = new List([1,4,5,6,2,2,2,2,2,3,6,7,9,1,0,1,2,4]);

let respuesta6 = `El problema seleccionado es el de remover todos los elementos duplicados de una lista ligada no ordenada. Lista de prueba: ${testLL.getString()}<br>Resultado: `
respuesta6 += removeDuplicates(testLL).getString();

answers[5].innerHTML = respuesta6;
