burger=document.querySelector('.burger');
rightNav=document.querySelector('.rightNav');
navList=document.querySelector('.nav-list');
navbar=document.querySelector('.navbar');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-reps');
    navList.classList.toggle('v-class-reps');
    navbar.classList.toggle('h-nav-reps');
})