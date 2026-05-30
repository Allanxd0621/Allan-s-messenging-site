const loading = document.querySelector('.loadingPage');

window.addEventListener('load' , function(){

setTimeout(function(){

    loading.classList.add('loadingPageHidden');

},3000);

});