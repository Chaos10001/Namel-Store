// var username=window.prompt('Hi may we know your name so as to add u on our customers list').toLocaleUpperCase()
// var customer='Hi ' + '@' + username + ' Welcome to Namel store'
// alert(customer)

// var name_of_customers=document.getElementById('greetings')

// document.getElementById('greetings').innerHTML= 'Hi ' + '@' + username + ' Welcome to Namel store'
// name_of_customers.style.color='blue'
const search=() =>{
    const SearchBox=document.getElementById('search-items').value.toUpperCase()
    const StoreItems=document.getElementById('product-list')
    const product=document.querySelectorAll('.product')
    const pname=document.getElementsByTagName('h2')

    for (var i = 0; i < pname.length; i++) {
        let match=product[i].getElementsByTagName('h2')[0]
        
        if (match) {
            let textvalue= match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(SearchBox) > -1) {
                product[i].style.display=''
            }
            else{
                product[i].style.display='none'
            }
        }
    }
}
var slide_index= 1

displaySlides(slide_index)

function nextSlide(n){
    displaySlides(slide_index += n)
}

function currentSlide(n){
    displaySlides(slide_index = n)
}

function displaySlides(n) {
    var i
    var slide=document.getElementsByClassName("showslide")
    if (n > slide.length) {
        slide_index = 1        
    }
    if (n < 1) {
        slide_index= slide.length
    }
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display='none'
        
    }
    slide[slide_index - 1].style.display= "block";
}
const form = document.getElementById("form")

form.addEventListener("submit" ,function(e){
    e.preventDefault()

    var message= document.getElementById('message')
    var messageContent= document.getElementById('message-content')

    if (message.value === " ") {
        // messageContent.innerHTML=" "
        messageContent.style.display="none"
    }
    else{
        messageContent.innerHTML = "We will get back to you!!!"
    }
})

const menuToggler= document.querySelector('.menuToggler')
const menu = document.querySelector('.menu.mobile')
function myFunc() {
    menu.classList.toggle('active')
}