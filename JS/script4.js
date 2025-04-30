const image=document.querySelector('img')
image.addEventListener('mouseover',(e)=>{
    image.style.borderRadius='0px';
    
})

const accueil=document.querySelector('.accueil')
accueil.addEventListener('click',(e)=>{
    window.location.href='../HTML/page1.html'
})

const about=document.querySelector('.about')
about.addEventListener('click',(e)=>{
    window.location.href='../HTML/page2.html'
})

const acheter=document.querySelector('.acheter')
acheter.addEventListener('click',(e)=>{
    window.location.href='../HTML/page3.html'
})

const input=document.querySelectorAll('main input')
input.forEach((el)=>{el.addEventListener('click',(e)=>{
    window.location.href='../HTML/page3.html'
})
})


// ################# la partie RED ##################

const red=document.querySelector('.RED')
const service=document.querySelector('.service')
service.addEventListener('mouseover',(e)=>{
red.classList.add('new')
})

red.addEventListener('mouseover',(e)=>{
red.classList.add('new')
})
red.addEventListener('mouseout',(e)=>{
red.classList.remove('new')

 })

 
// ------la partie respnsive---------
const montrer=document.querySelector('.montrer')
const menu=document.querySelector('#menu')
const ul=document.querySelector('.div1header ul')
menu.addEventListener('click',(e)=>{
     ul.style.display='block'
    ul.style.marginRight='0%'
}) 

menu.addEventListener('dblclick',(e)=>{
    ul.style.display='none'
})