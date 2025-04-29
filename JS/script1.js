const apropos=document.querySelector('.about')
apropos.addEventListener('click', (e)=>{
    window.location.href = "../HTML/page2.html";
})





const acheter=document.querySelector('.acheter')
acheter.addEventListener('click',(e)=>{
    window.location.href='../HTML/page3.html'
})



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

// const div=document.querySelectorAll('.divprincipal div')
// div.addEventListener('mouseover',(e)=>{
// div.classList.add('new2')

// })


const button1=document.querySelector('.button1')
button1.addEventListener('click',(e)=>{
 window.location.href='../HTML/page4.html'
})

button1.addEventListener('mouseover',(e)=>{
button1.style.backgroundColor='rgba(68, 223, 223, 0.514)'
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


