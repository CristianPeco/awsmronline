function comprobar(){
    let e = parseInt(document.getElementById("edad").value);

    if(e >=18){
        document.getElementById("msg").innerText = "Mayor de edad";
    }else{
        document.getElementById("msg").innerText = "Menor de edad"
    }
}