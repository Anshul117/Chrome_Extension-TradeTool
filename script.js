let myLead = []
let input = document.getElementById("input-el")
let save = document.getElementById("input-btn")
let list = document.getElementById("ul-el")


save.addEventListener("click" , ()=>{
    myLead.push(input.value)
    renderList()
    input.value = ""
})

function renderList(){
    let li = ""
   for(let i = 0 ; i<myLead.length ; i++){
        li+= ` <li>  
                    <a target = '_blank' href = "${myLead[i]}"> ${myLead[i]}</a> 
                </li>`
   }
   list.innerHTML=li

}