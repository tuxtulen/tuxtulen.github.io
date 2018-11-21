/**
 * ========================================================================================
 * This part is a simple implementation of zoom effect for image gallery
 * ========================================================================================
 */

var modal = document.getElementById('myModal');

var img = document.getElementById('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
	modal.style.display = "block";
	modal.style.width = "100%";
	modal.style.height = "100%";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
}

/**
 * ========================================================================================
 * Next part is a simple implementation of category-based functionality for image gallery
 * ========================================================================================
 */

filterSelection("all")
function filterSelection(c) {
	var column;
	column = document.getElementsByClassName("column");
	if (c == "all") c = "";

	for (var i = 0; i < column.length; i++) {
		removeClass(column[i], "show");
		if (column[i].className.indexOf(c) > -1) addClass(column[i], "show");
	}
}

function addClass(element, name) {
	var buffClassName, buffName;
	buffClassName = element.className.split(" ");
	buffName = name.split(" ");
	for (var i = 0; i < buffName.length; i++) {
		if (buffClassName.indexOf(buffName[i]) == -1) {
			element.className += " " + buffName[i];
		}
	}
}

function removeClass(element, name) {
	var buffClassName, buffName;
	buffClassName = element.className.split(" ");
	buffName = name.split(" ");
	for (var i = 0; i < buffName.length; i++) {
		while (buffClassName.indexOf(buffName[i]) > -1) {
			buffClassName.splice(buffClassName.indexOf(buffName[i]), 1);
		}
	}
	element.className = buffClassName.join(" ");
}

var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}