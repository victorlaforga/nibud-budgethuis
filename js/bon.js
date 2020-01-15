const bon1 = parseInt(document.getElementById("bon1").innerHTML ,10);
const bon2 = parseInt(document.getElementById("bon2").innerHTML ,10);
const bon3 = parseInt(document.getElementById("bon3").innerHTML ,10);
const bon4 = parseInt(document.getElementById("bon4").innerHTML ,10);
const bon5 = parseInt(document.getElementById("bon5").innerHTML ,10);
const bon6 = parseInt(document.getElementById("bon6").innerHTML ,10);
const bon7 = parseInt(document.getElementById("bon7").innerHTML ,10);
const bon8 = parseInt(document.getElementById("bon8").innerHTML ,10);
const bon9 = parseInt(document.getElementById("bon9").innerHTML ,10);
const bon10 = parseInt(document.getElementById("bon10").innerHTML ,10);


function sumUp(){
    let totaal = bon1 + bon2 + bon3 + bon4 + bon5 + bon6 + bon7 + bon8 + bon9;
    console.log(totaal);
    totaal = bon10 - totaal;
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