var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames)
var newName = prompt('Podaj imię')

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
	alert('Imię zostało dodane do tablicy: ' + allNames);
} else {
	alert('To imię już się znajduje w tablicy');
}

console.log('Sprawdzane imię: ' + newName + ' znajduje się na ' + allNames.indexOf(newName) + ' pozycji tablicy');
console.log(allNames);