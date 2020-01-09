const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const xSlider =document.querySelectorAll(".slider");
const value =document.querySelectorAll(".demo");
output.innerHTML = slider.value; 
const test = output.innerHTML;


slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(this.value);
}

value.innerHTML = slider.value; 
const test2 = value.innerHTML;


xSlider.oninput = function() {
  value.innerHTML = this.value;
  console.log(this.value);
}


// function getTotal() {
//     const first = parseInt(slider.value) || 0;
//     const second = parseInt(slider2.value) || 0;
   
//     document.getElementById("total").innerHTML = first + second;
//   }


/////


// function showValue(newValue){
//     document.getElementById("rto").innerHTML = newValue;
//     updateSum();

// }

function showValue(newValue, resultDiv) {
    document.getElementById(resultDiv).innerHTML = newValue;
    updateSum();
  }
  
// function updateSum(){
//     const sliderValue = document.getElementById("myRange").value;
//     const slider2Value = document.getElementById("myRange2").value;
//     document.getElementById("total").innerHTML = slider2Value + sliderValue;
// }
// updateSum();

// SHOW & HIDE Info DIVS
const kledingInfo = document.getElementById("kleding");
const kledingkast = document.getElementById("kledingkast");


function showInfo() {
  if (kledingInfo.style.display === "none") {
    kledingInfo.style.display = "inline-block";
  } else {
    kledingInfo.style.display = "none";
  }
}
kledingkast.addEventListener("click", showInfo);

const vervoer = document.getElementById("fiets");
const vervoerInfo = document.getElementById("vervoer");
function showInfoVervoer() {
  if (vervoerInfo.style.display === "none") {
    vervoerInfo.style.display = "inline-block";
  } else {
    vervoerInfo.style.display = "none";
  }
}
vervoer.addEventListener("click", showInfoVervoer);

const voedingInfo = document.getElementById("voeding");
const voeding = document.getElementById("koelkast");
function showInfoVoeding() {
  if (voedingInfo.style.display === "none") {
    voedingInfo.style.display = "inline-block";
  } else {
    voedingInfo.style.display = "none";
  }
}
voeding.addEventListener("click", showInfoVoeding);