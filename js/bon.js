


document.querySelector('#myRange').onchange = calculateAll;
document.querySelector('#myRange2').onchange = calculateAll;
document.querySelector('#myRange3').onchange = calculateAll;
document.querySelector('#myRange4').onchange = calculateAll;
document.querySelector('#myRange5').onchange = calculateAll;
document.querySelector('#myRange6').onchange = calculateAll;
document.querySelector('#myRange7').onchange = calculateAll;
document.querySelector('#myRange8').onchange = calculateAll;
document.querySelector('#myRange9').onchange = calculateAll;
document.querySelector("#maandelijksinkomen").onchange = calculateAll;
document.querySelector("#maandelijksekosten").onchange = calculateAll;


function calculateAll(){
    const inkomen = +document.querySelector("#maandelijksinkomen").value;
    const huur = +document.querySelector("#maandelijksekosten").value;
    const x = +document.querySelector('#myRange').value;
    const x2 = +document.querySelector('#myRange2').value;
    const x3 = +document.querySelector('#myRange3').value;
    const x4 = +document.querySelector('#myRange4').value;
    const x5 = +document.querySelector('#myRange5').value;
    const x6 = +document.querySelector('#myRange6').value;
    const x7 = +document.querySelector('#myRange7').value;
    const x8 = +document.querySelector('#myRange8').value;
    const x9 = +document.querySelector('#myRange9').value;
    
    let totaal = inkomen - huur - x - x2 - x3 - x4 - x5 - x6 -x7 -x8 -x9;
    document.getElementById("totaalBon").innerHTML = totaal;

        if(totaal > 0) {
                    totaalBon.style.color = "green";
                    // totaalTitel.style.color = "green";
                }
                else {
                    totaalBon.style.color = "red";
                    // totaalTitel.style.color = "red";
                }
    
}

