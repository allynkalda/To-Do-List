let arrayList = [];

// Append new list
function appendToList() {
	let list = document.createElement('LI')
	let textInput = document.getElementById('input-text').value;
	let textNode = document.createTextNode(textInput);
		arrayList.push(textInput);


	list.appendChild(textNode);
	document.getElementById('ul-list').appendChild(list);
// Append buttons for deleting
	let deleteButtons = document.createElement('button');
	list.appendChild(deleteButtons);
	deleteButtons.setAttribute('id', arrayList.length - 1);
	deleteButtons.setAttribute('class', 'delete-button');
// Set ID attribute
	list.setAttribute('id', arrayList.length - 1);

	console.log(arrayList);
}

let buttonList = document.getElementById('add-button');
buttonList.addEventListener('click', function(e){ 
    appendToList();
    e.preventDefault();
});


let deleteList = document.getElementsByClassName('delete-button');
deleteList.addEventListener('click', function() {
	let listDelete = document.get
	list.remove();
});






