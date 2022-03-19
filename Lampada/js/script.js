let int = document.createElement("img");
int.src="img/int_off.png";
document.body.appendChild(int);
let lampada = document.createElement("img");
lampada.src="img/Off.png";
document.body.appendChild(lampada).style.margin = "0% 0% 0% 25%"
document.body.style.backgroundColor = "#000";
let estado = "off";
int.onclick = function() {
    if (estado === "on"){
    int.src = "img/int_on.png";
    lampada.src = "img/On.png";
    document.body.style.backgroundColor = "#fff";   
    }
    else{
    int.src = "img/int_off.png";
    lampada.src = "img/Off.png";
    document.body.style.backgroundColor = "#000";   
    }
    retornar();
    } 
    function retornar() {
        estado === "off" ? estado = "on" : estado = "off";
        return estado;
    }