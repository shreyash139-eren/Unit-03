document.getElementById("parent").addEventListener("click",()=>{
    alert("Parent Div Clicked!")
})
document.getElementById("parBtn").addEventListener("click",()=>{
    alert("Parent Button clicked!")
})


document.getElementById("child").addEventListener("click",()=>{
    alert("Child Div Clicked!")
})
document.getElementById("chilBtn").addEventListener("click",()=>{
    alert("Child Button clicked!")
})


document.getElementById("gchild").addEventListener("click",()=>{
    alert("GrandChild Div Clicked!")
})
document.getElementById("gcBtn").addEventListener("click",()=>{
    event.stopPropagation()
    alert("GrandChild Button clicked!")
})