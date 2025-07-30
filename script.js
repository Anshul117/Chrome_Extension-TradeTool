let myLead = []
let input = document.getElementById("input-el")
let note = document.getElementById("note-el")
let save = document.getElementById("input-btn")
let list = document.getElementById("ul-el")
let del = document.getElementById("delete-btn")
let saveTab = document.getElementById("tab-btn")

const myLeadFromStorage = JSON.parse(localStorage.getItem("myLead"))
console.log(myLead)
if(myLeadFromStorage){
    myLead = myLeadFromStorage
    render(myLead)
}//// In Manifest V3, Chrome separates permissions (what APIs your extension can access) and host_permissions

saveTab.addEventListener("click" ,()=>{  //
    chrome.tabs.query({active:true , currentWindow:true}, function(tab){
        let url = tab[0].url
        let noteText = note.value
        myLead.push({url,noteText})
        localStorage.setItem("myLead" , JSON.stringify(myLead))
        render(myLead) 
    })
})

function render(leads){
    let li = ""
   for(let i = 0 ; i<leads.length ; i++){
        li+= ` <li>  
                    <a target = '_blank' href = "${leads[i].url}"> ${leads[i].url}</a>
                    <p>"${leads[i].noteText}"</p> 
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
        let url = input.value
        let noteText = note.value
    myLead.push({url,noteText})
    localStorage.setItem("myLead" , JSON.stringify(myLead))
    render(myLead)
    input.value = ""
    note.value = ""
   
})

