function calcular(){
    let km_percorrido = document.getElementById("km_percorrido").value;
    let qnt_dia = document.getElementById("qnt_dia").value;
    let res = document.getElementById("res");
    if(carro1.checked){
        valor_dia = qnt_dia * 80.0;
        valor_km = km_percorrido * 0.20;
        valor_total = valor_dia + valor_km;
    }else if(carro2.checked){
        valor_dia = qnt_dia * 70.0;
        valor_km = km_percorrido * 0.15;
        valor_total = valor_dia + valor_km;
    }
    
    res.innerHTML = `${valor_total}`;
}

let carro1 = document.getElementById("carro1");
let carro2 = document.getElementById("carro2");
let imagem1 = document.getElementById("imagem1");
let imagem2 = document.getElementById("imagem2");

if(carro1){
    carro1.addEventListener('click', () => {
        imagem1.style.left = '0'
        imagem2.style.position = 'absolute'
        imagem2.style.left = '-100%'
    })
}

if(carro2){
    carro2.addEventListener('click', () =>{
        imagem2.style.left = '0'
        imagem1.style.left = '-100%'
        imagem1.style.position = 'relative'
    })
}