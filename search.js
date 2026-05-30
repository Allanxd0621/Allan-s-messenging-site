const search = document.getElementById('search');
const contact = document.querySelectorAll('.contact');

search.addEventListener('input' , function(){

const searchInput = search.value.toLowerCase();

contact.forEach(function(contact){

if(contact.textContent.toLowerCase().includes(searchInput)){

    contact.style.display = "flex";

}else{

    contact.style.display = "none";

}

});

});

