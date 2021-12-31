const { default: axios } = require("axios")
//


document.addEventListener("click",(e)=>{
    //delete me
    if(e.target.classList.contains("edit-me")){
        if (confirm("Do you really want to delete this item permanently?")){
            axios.post('/delete-item',{id:e.target.getAttribute("data-id")}).then(()=>{
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
            }).catch(()=>{
                console.log("Please try again later");
            })
        }
       }
    //update feature
    if(e.target.classList.contains("edit-me")){
        let userInput = prompt("Enter your desired new text", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
       if(userInput){
        axios.post('/update-item',{text:userInput, id:e.target.getAttribute("data-id")}).then(()=>{
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
        }).catch(()=>{
            console.log("Please try again later");
        })
       }
    }
})