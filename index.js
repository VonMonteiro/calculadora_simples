function resultado(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let total = 0

    if (document.getElementById("box1").checked)
        total = num1 + num2
    else if (document.getElementById("box2").checked)
        total = num1 - num2
    else if (document.getElementById("box3").checked)
        total = num1 * num2
    else
        total = num1 / num2
    document.getElementById("areaResultado").innerHTML = 'Resultado: ' + String(total)
}