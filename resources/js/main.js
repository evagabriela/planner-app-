// User clicked on the add button
// If there is any text inside the item field, add that text to a todo list 

window.onload = function () {
	document.getElementById('add').addEventListener('click', function(){
		var value = document.getElementById('item').value;

		if(value){
			console.log("I have a value" + value);
		}
	});
}







/* Notes to teach 

1. <script tag>:  html loads in order so if script tag is in the header, it will load before recognizing th id's input in th html body
				  Therefore, we have couple options
				  1. Add script tag in the bottom  or 
				  2. Add script to the header but Tell the main.js doc to window.onload which will allow to excute when the window is loaded  

2. Js objects:  Only create an object if you are going to re-use it.  
	For example example I could have created an object 
	function buttonClick() {
		var value = document.getElementById('item').value;

		if(value){
			console.log("I have a value" + value);
		}
	}

	so that I can use this here: 

	window.onload = function () {
	document.getElementById('add').addEventListener('click', buttonClick);
	};

	but I am not doing that because I am not reusing the object buttonClick.

	*/