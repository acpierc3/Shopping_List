var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteAllButton = document.getElementById("deleteAll");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var newButton = document.createElement("button");
	newButton.classList.add("delete");
	newButton.innerHTML = ("X");

	li.appendChild(document.createTextNode(input.value));
	li.appendChild(newButton);
	ul.appendChild(li);
	input.value = "";
	deleteButtonFunction();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markItemDone(event) {
	var target = event.target;
	target.classList.toggle("done");
}

function deleteItem(){
	this.parentNode.remove();
}

function deleteAll(){
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", markItemDone);
deleteAllButton.addEventListener("click", deleteAll);


function deleteButtonFunction(){
	var deleteButtons = document.querySelectorAll(".delete");

	for (var i=0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener("click", deleteItem);
	}
}

deleteButtonFunction();
