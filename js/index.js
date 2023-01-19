//Declarar variables: let, var const
//const: genera una constante
//var y let: generan una variable
//$scope = fragmento de codigo {}

/*function suma(){$scope primero
    const num = 2;
    let num2 = 4;
    var num3 = 4;este si marca error ya que var no tine $scope
    function sumaSegunda(){$scope segundo
        const num = 3;
        let num2 = 4;
        var num3 = 4;
    }
}*/

/*arrow function
function suma(num1, num2){
    return num1 + num2;
}

const suma = function(num1, num2){
    return num1 + num2;
}

const suma = (num1, num2) => num1 + num2; Este
*/

/*template string
const name = "alex";
const surname = "morellano";
const lastname = "alvarez";
const fullname = name + ' ' + surname + ' ' + lastname;

const fullname2 = `${name} ${surname} ${lastname}`;//mas aca

const person = {
    name: '',
    surname: '',
    lastname: null
}
(() => {//funcion flecha auto ejecutable
    const name = person.name.toString();
    const name2 = `${person.name} ${person.lastname ? person.lastname : ''}`; //mas aca
})*/

/*Arreglos
const roles = [1, 2, 3, {name:'',surname:''}];//ta feo
//array list
const roles2 = [
    {
        key: 'admin',
        name: 'superAdmin'
    },
    {
        key: 'user',
        name: 'usuario'
    }
];
//list
const roles3 = {
    key: 'admin',
    name: 'superAdmin',
    key2: 'user',
    name2: 'usuario'
}
//arrayList array list*/

/*prototypes
//push, splice, indexOf, find, filter, map, foreach, length
roles.forEach((element, index) => {
    console.log(element.name);
});

for(let i = 0; i <= roles.length; i++){
    console.log(roles[i].name);
}

while(){}

do{
}while();*/

/*desestructuracion de objetos
const person2 = {
    name: 'ale',
    age: 19,
    adderess: {
        street: 'barona',
        number: 29
    }
}
console.log(person2.name);
console.log(person2.address.street);
const {name, address:{street}} = person2; esto es desestructurar*/
