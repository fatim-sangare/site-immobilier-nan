const but=document.querySelector('.but1')
const but2=document.querySelector('.but2')
// ############la partie du bouton 'but1##############""

    but.addEventListener('mouseover',(e)=>{
    but.style.backgroundColor='rgba(68, 223, 223, 0.514)'
})
but.addEventListener('mouseout',(e)=>{
    but.style.backgroundColor='white'
})

but.addEventListener('click',(e)=>{
    window.location.href='../HTML/page4.html'

})



// ############la partie du bouton 'but2##############""

 but2.addEventListener('mouseover',(e)=>{
    but2.style.backgroundColor='rgba(68, 223, 223, 0.514)'

})

    but2.addEventListener('mouseout',(e)=>{
        but2.style.backgroundColor='white'
    })

    
but2.addEventListener('click',(e)=>{
    window.location.href='../HTML/page3.html'
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



const accueil=document.querySelector('.accueil')
accueil.addEventListener('click',(e)=>{
    window.location.href='../HTML/page1.html'
})




const acheter=document.querySelector('.acheter')
acheter.addEventListener('click',(e)=>{
    window.location.href='../HTML/page3.html'
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



 


