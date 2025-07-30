let myLead = []
let input = document.getElementById("input-el")
let save = document.getElementById("input-btn")
let list = document.getElementById("ul-el")
let del = document.getElementById("delete-btn")
const myLeadFromStorage = JSON.parse(localStorage.getItem("myLead"))
if(myLeadFromStorage){
    myLead = myLeadFromStorage
    render(myLead)
}
function render(leads){
    let li = ""
   for(let i = 0 ; i<leads.length ; i++){
        li+= ` <li>  
                    <a target = '_blank' href = "${leads[i]}"> ${leads[i]}</a> 
                </li>`
   }
   list.innerHTML=li

}
del.addEventListener("dblclick" , ()=>{
    myLead = []
    localStorage.clear()
    render(myLead)
})


save.addEventListener("click" , ()=>{
    myLead.push(input.value)
    localStorage.setItem("myLead" , JSON.stringify(myLead))
    render(myLead)
    input.value = ""
})

