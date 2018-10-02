// Make some general fixes.Hide the empty box when there is nothing in it. Add enter functionality to the text box. 
var testSpot = document.querySelector("#test")
var input = document.querySelector("#list-input");
var line = document.getElementsByTagName("li");
// var entry = document.createElement("li");


var toDo = document.getElementById("list-input").value;
 
	for(var i =0; i < line.length; i++){
		var span = document.createElement("span");
		var txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		line[i].appendChild(span);
		

}


var closeEm = document.getElementsByClassName("close")
	
	for(var z = 0; z < closeEm.length; z++){
	closeEm[z].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// var trial = document.querySelector("ul");

// trial.addEventListener("click",function(ev){
// if(this.tagName === "li"){

// // 	 ev.target.classList.toggle('crossed');
// }
// this.classList.toggle('crossed');
// },false);


function bettaWrite(){
	var entry = document.createElement("li");
	var inputValue = input.value;
	var t = document.createTextNode(inputValue);
	entry.appendChild(t);
	testSpot.appendChild(entry);
	// entry.style.textDecoration = "none";
	// I had to add the event listener to the actual li creation class in order to target it. 
	entry.addEventListener("click",function(){
		this.classList.toggle("crossed");
	});
	 document.getElementById("list-input").value = "";

	var span = document.createElement("span");
		var txt = document.createTextNode("\u00D7");
		span.className = "close";
		span.appendChild(txt);
		entry.appendChild(span);

		for(var z = 0; z < closeEm.length; z++){
	closeEm[z].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}


}
// testSpot.addEventListener("click",function(ev){
// if(ev.target.tagName === "li"){
// 	ev.target.classList.toggle("cross");
// }

// },false);

		


// delete through nth child of div id
// might need a lightswitch
