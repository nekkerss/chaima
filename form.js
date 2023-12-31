function valid(e){
    e.preventDefault()
    var cnnn=document.login.cnn.value
    var nom=document.login.name.value
    var  pre=document.login.prenom.value
    var num=document.login.phone.value
    var adr=document.login.adresse.value
    if (cnnn.length<8 && cnnn.isNaN()==false)
        return alert(`cnn error`)
    if (nom.innerHtml=="") return alert (`nom error`)
    if (pre.innerHtml=="") return alert (`pre error`)
    if (num.isNaN()!=1) return alert (`phone error`)
    if (adr.innerHtml=="") return alert (`adr error`)
    
    
}