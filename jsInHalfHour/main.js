var tits = document.querySelector("#inTitle");
var listItems = document.querySelectorAll("#ourlist li");
var ourButton = document.querySelector('#our-button');
var newCounter = 1;

ourlist.addEventListener('click',activateItem);

function activateItem(e){
	if(e.target.nodeName == "LI"){
		tits.innerHTML = e.target.innerHTML;
	for (var i =0; i< e.target.parentNode.children.length; i++){
	e.target.parentNode.children[i].classList.remove("active");
	}
	e.target.classList.add('active');
	
	}
}

ourButton.addEventListener("click", newItem);

function newItem(){
	ourlist.innerHTML+="<li>new stuff "+newCounter+"</li>"; 
	newCounter+=1;
}


