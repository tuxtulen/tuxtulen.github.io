/**
 * ========================================================================================
 * This part is a simple implementation of zoom effect for image gallery
 * ========================================================================================
 */
var images = document.querySelectorAll('#row img'),
    modal = document.querySelector('.modal');

images.forEach(function (image) {
    
    image.addEventListener('click', function(event) {
        modal.innerHTML = '<span class="close">&times;</span><div class="modal-content"><img src="' + event.target.src + '" onLoad="small()"></div>';
		modal.style.display = 'block';

    });
});

modal.addEventListener('click', function () {
    this.style.display = 'none';
});

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