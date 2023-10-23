let user_input = "";
let buttons = document.querySelectorAll('button')

buttons.forEach(element =>{
    element.addEventListener('click', (e)=>{
console.log(e.target.textContent)

    })
})

