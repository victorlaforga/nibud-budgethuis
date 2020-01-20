const bon1 = +document.getElementById("myRange").value;
const bon2 = +document.getElementById("myRange2").value;
const bon3 = +document.getElementById("myRange3").value;
const bon4 = +document.getElementById("myRange4").value;
const bon5 = +document.getElementById("myRange5").value;
const bon6 = +document.getElementById("myRange6").value;
const bon7 = +document.getElementById("myRange7").value;
const bon8 = +document.getElementById("myRange8").value;
const bon9 = +document.getElementById("myRange9").value;



function sumUp(){
    let totaal = bon1 + bon2 + bon3 + bon4 + bon5 + bon6 + bon7 + bon8 + bon9;
    console.log(totaal);
    
    document.getElementById("totaalBon").innerHTML = totaal;
    function colorTotal(){
        const totaalBon = document.getElementById("totaalBon");
        // const totaalTitel = document.getElementsById("totalTitel");
        if(totaal > 0) {
            totaalBon.style.color = "green";
            // totaalTitel.style.color = "green";
        }
        else {
            totaalBon.style.color = "red";
            // totaalTitel.style.color = "red";
        }
    }
    colorTotal();
}
sumUp();
const inkomenBon = document.getElementById("inkomenBon");
function turnFontBold() {
    
    }