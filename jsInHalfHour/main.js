var tits = document.getElementById("inTitle");
var listItems = document.getElementById("ourlist").getElementsByTagName('li');
var ourButton = document.getElementById('our-button');
var newCounter = 1;
for (var i =0; i< listItems.length; i++){
	listItems[i].addEventListener("click", activateItem);
}

function activateItem(){
	tits.innerHTML = this.innerHTML;
}
ourButton.addEventListener("click", newItem);
function newItem(){
	ourlist.innerHTML+="<li>new stuff"+newCounter+"</li>"; 
	newCounter+=1;

}