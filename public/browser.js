document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("edit-me")){
        prompt("Enter your desired new text")
    }
})