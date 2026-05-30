const profilePanel = document.querySelector('.profilePanel');
const profileBtn = document.getElementById('profileBtn');

profileBtn.addEventListener('click' , function(){

profilePanel.classList.add('profilePanelVisible');

});

const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click' , function(){

profilePanel.classList.remove('profilePanelVisible');

});