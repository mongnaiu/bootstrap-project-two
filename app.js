const formSwitch = document.querySelector('.form-switch');
const checkBox = document.querySelector('#dailyMonth');
const cowork  =document.querySelector('.cowork');
const virtual = document.querySelector('.virtual');
const private = document.querySelector('.private');
// console.log(cowork.innerHTML)



checkBox.addEventListener('change', (e)=>{
    console.log('ok')
    if(checkBox.checked){
       cowork.innerHTML = `<span class="fs-6">$</span>40<span class="fs-6">p/day</span>`
       virtual.innerHTML = `<span class="fs-6">$</span>200<span class="fs-6">p/day</span>`
       private.innerHTML = `<span class="fs-6">$</span>300<span class="fs-6">p/day</span>`
    }else{
        cowork.innerHTML = `<span class="fs-6">$</span>19<span class="fs-6">p/day</span>`
        virtual.innerHTML = `<span class="fs-6">$</span>150<span class="fs-6">p/day</span>`
        private.innerHTML = `<span class="fs-6">$</span>200<span class="fs-6">p/day</span>`
    }

})

//scroll nav

const nav = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link')
const navBrand = document.querySelector('.navbar-brand')
window.addEventListener('scroll',(e)=>{

    navLink.forEach((nav)=>{
        if(scrollY >54){
            nav.classList.add('change-color');
            navBrand.classList.add('black');
        }else{
            nav.classList.remove('change-color')
            navBrand.classList.remove('black');
        }
    })
 
    if(scrollY > 54){
        nav.classList.add('bg-change')
    }else{
        nav.classList.remove('bg-change')
    }
})

// const card = document.querySelector('.overlay-card img')
 
// console.log(card)

