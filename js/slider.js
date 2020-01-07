const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value; 
const test = output.innerHTML;
console.log("test" + test);

slider.oninput = function() {
  output.innerHTML = this.value;
  console.log(this.value);
}


const slider2 = document.getElementById("myRange2");
const output2 = document.getElementById("demo2");
output2.innerHTML = slider.value;

slider2.oninput = function() {
    output2.innerHTML = this.value;
  };
  

function getTotal() {
    const first = parseInt(slider.value) || 0;
    const second = parseInt(slider2.value) || 0;
   
    document.getElementById("total").innerHTML = first + second;
  }


/////


// function showValue(newValue){
//     document.getElementById("rto").innerHTML = newValue;
//     updateSum();

// }

function showValue(newValue, resultDiv) {
    document.getElementById(resultDiv).innerHTML = newValue;
    updateSum();
  }
  
function updateSum(){
    const sliderValue = document.getElementById("myRange").value;
    const slider2Value = document.getElementById("myRange2").value;
    document.getElementById("total").innerHTML = slider2Value + sliderValue;
}
updateSum();