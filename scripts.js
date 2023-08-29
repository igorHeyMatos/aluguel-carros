function calcular(){
    let km_percorrido = document.getElementById("km_percorrido").value;
    let qnt_dia = document.getElementById("qnt_dia").value;
    let res = document.getElementById("res");

    valor_dia = qnt_dia * 70.0;
    valor_km = km_percorrido * 0.15;
    valor_total = valor_dia + valor_km;

    res.innerHTML = `${valor_total}`;
}