
function selectProject (id) {
    const content = document.querySelectorAll(".project-content")
    content.forEach((item) => {
        item.classList.remove("active")
        console.log(id)
        if(item.id === id) {
            item.classList.add("active")
        } 
    })
}   