// Append new list

function sample() {
	var textInput = document.getElementById("input-text").value;
	var list = document.createElement("li");
	var node = document.createTextNode(textInput);
	var listNode = document.getElementById("ul-list");
	var before = document.getElementById("li1");

	list.appendChild(node);
	listNode.insertBefore(list, before);


	var button = document.createElement("button");
//	button.innerText = 'Delete';
	list.appendChild(button);

}


button.click(function () {
 var remove = document.getElementById("ul-list");
	list.removeChild(remove.childNodes[0]);

}

function erase() {
	var remove = document.getElementById("ul-list");
	list.removeChild(remove.childNodes[0]);
}


*/


