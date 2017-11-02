var tits = document.getElementById("inTitle");
var listItems = document.getElementById("ourlist").getElementsByTagName('li');
var ourButton = document.getElementById('our-button');
var newCounter = 1;

ourlist.addEventListener('click',activateItem);

function activateItem(e){
	if(e.target.nodeName == "LI"){
		tits.innerHTML = e.target.innerHTML;
	for (var i =0; i< listItems.length; i++){
	listItems[i].classList.remove("active");
	}
	e.target.classList.add('active');
	
	}
}

ourButton.addEventListener("click", newItem);

function newItem(){
	ourlist.innerHTML+="<li>new stuff "+newCounter+"</li>"; 
	newCounter+=1;
}


