document.querySelector("button").addEventListener("click",()=>{
    let input=document.getElementById("text").value
    let list=document.getElementById("list")
    let li=document.createElement("li")
    li.innerText=input

    let mark=document.createElement("input")
    mark.type="checkbox"
    mark.class="mark"

    let del=document.createElement("button")
    del.innerText="Delete"

    li.append(mark,del)
    if(input.length>0){
    list.appendChild(li)
    }
    else{
        alert("Invalid Task!")
    }

    del.onclick=function(){
        li.remove()
    }
})

