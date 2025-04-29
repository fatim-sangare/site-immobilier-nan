
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
})})



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

// ----------la partie du bouton sumbit------
const sumbit=document.querySelector('.div1 button')
sumbit.addEventListener('mouseover',(e)=>{
    sumbit.style.backgroundColor='green'
})
sumbit.addEventListener('mouseout',(e)=>{
    sumbit.style.backgroundColor='red'
})
sumbit.addEventListener('click',(e)=>{
    alert('message envoyer')
    window.location.href="../HTML/page1.html"
})