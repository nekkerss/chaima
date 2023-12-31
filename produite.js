
let trash=Array.from(document.getElementsByClassName("fa-trash"))
for (let i=0 ; i<trash.length;i++){
    trash[i].addEventListener("click",function(){
        trash[i].closest(".first").remove()
    })
}