const openModal=document.getElementById('openModal');
const closeModal=document.getElementById('deleteBtn');
const modal=document.getElementById('modalProject');
const outside=document.querySelector('.main')
openModal.addEventListener('click',()=>{
    modal.style.display='block';
});
closeModal.addEventListener('click',()=>{
    modal.style.display='none';
});
