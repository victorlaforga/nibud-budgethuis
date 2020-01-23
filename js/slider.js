function showValue(newValue, resultDiv) {
  document.getElementById(resultDiv).innerHTML = newValue;
  sumUp();
}
const alleBonnen = document.querySelectorAll(".categorie");
const totaalBon = document.getElementById("totaalBon");
alleBonnen.oninput = function() {
  totaalBon.innerHTML = this.value;

}


//------------------------- SLIDERS -----------------------------


const slider2 = document.getElementById("myRange2");
const output2 = document.getElementById("demo2");
const voedingValueBon = document.getElementById("bon5");

output2.innerHTML = slider2.value;
const test2 = output2.innerHTML;

slider2.oninput = function() {
  output2.innerHTML = this.value;
  voedingValueBon.innerHTML = this.value;
  if(this.value < 160) {
    document.getElementById("voedingTips").style.display = "none";
    document.getElementById("koelkast").src="./images/meubeuls/meubels-28.png";
  }
  if(this.value > 161 && this.value < 321) {
    document.getElementById("voedingTips").style.display = "none";
    document.getElementById("koelkast").src="./images/meubeuls/meubels-27.png";
  }
  if(this.value > 322 && this.value < 481) {
    document.getElementById("voedingTips").style.display = "block";
    document.getElementById("koelkast").src="./images/meubeuls/meubels-26.png";
  }
  if(this.value > 482) {
    document.getElementById("voedingTips").style.display = "block";
    document.getElementById("koelkast").src="./images/meubeuls/meubels-25.png";
  }
  
 
};


const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const kledingValueBon = document.getElementById("bon4");


output.innerHTML = slider.value; 
const test = output.innerHTML;


slider.oninput = function() {
  output.innerHTML = this.value;
  kledingValueBon.innerHTML = this.value;
  if(this.value < 41) {
    document.getElementById("kledingTips").style.display = "none";
    document.getElementById("kledingkast").src="./images/meubeuls/meubels-20.png";
  }
  if(this.value > 42 && this.value < 83) {
    document.getElementById("kledingTips").style.display = "none";
    document.getElementById("kledingkast").src="./images/meubeuls/meubels-19.png";
  }
  if(this.value > 84 && this.value < 124) {
    document.getElementById("kledingTips").style.display = "block";
    document.getElementById("kledingkast").src="./images/meubeuls/meubels-18.png";
  }
  if(this.value > 125) {
    document.getElementById("kledingTips").style.display = "block";
    document.getElementById("kledingkast").src="./images/meubeuls/meubels-17.png";
  }
}

const slider3 = document.getElementById("myRange3");
const output3 = document.getElementById("demo3");
const vervoerValueBon = document.getElementById("bon7");

output3.innerHTML = slider3.value; 
const test3 = output3.innerHTML;


slider3.oninput = function() {
  output3.innerHTML = this.value;
  vervoerValueBon.innerHTML = this.value;
  if(this.value < 32) {
    document.getElementById("vervoerTips").style.display = "none";
    document.getElementById("fiets").src="./images/meubeuls/meubels-01.png";
  }
  if(this.value > 33 && this.value < 64) {
    document.getElementById("vervoerTips").style.display = "none";
    document.getElementById("fiets").src="./images/meubeuls/meubels-02.png";
  }
  if(this.value > 65 && this.value < 95) {
    document.getElementById("vervoerTips").style.display = "block";
    document.getElementById("fiets").src="./images/meubeuls/meubels-03.png";
  }
  if(this.value > 96) {
    document.getElementById("vervoerTips").style.display = "block";
    document.getElementById("fiets").src="./images/meubeuls/meubels-04.png";
  }
}

const slider4 = document.getElementById("myRange4");
const output4 = document.getElementById("demo4");
const ewlValueBon = document.getElementById("bon3");

output4.innerHTML = slider4.value; 
const test4 = output4.innerHTML;


slider4.oninput = function() {
  output4.innerHTML = this.value;
  ewlValueBon.innerHTML = this.value;

  if(this.value < 123) {
    document.getElementById("ewlTips").style.display = "none";
    document.getElementById("aanrecht").src="./images/meubeuls/meubels-09.png";
  }
  if(this.value > 124 && this.value < 247) {
    document.getElementById("ewlTips").style.display = "none";
    document.getElementById("aanrecht").src="./images/meubeuls/meubels-08.png";
  }
  if(this.value > 248 && this.value < 370) {
    document.getElementById("ewlTips").style.display = "block";
    document.getElementById("aanrecht").src="./images/meubeuls/meubels-07.png";
  }
  if(this.value > 371) {
    document.getElementById("ewlTips").style.display = "block";
    document.getElementById("aanrecht").src="./images/meubeuls/meubels-05.png";
  }
}

const slider5 = document.getElementById("myRange5");
const output5 = document.getElementById("demo5");
const onderwijsValueBon = document.getElementById("bon6");

output5.innerHTML = slider5.value; 
const test5 = output5.innerHTML;


slider5.oninput = function() {
  output5.innerHTML = this.value;
  onderwijsValueBon.innerHTML = this.value;
};

const slider6 = document.getElementById("myRange6");
const output6 = document.getElementById("demo6");
const verzekeringValueBon = document.getElementById("bon10");

output6.innerHTML = slider6.value; 
const test6 = output6.innerHTML;


slider6.oninput = function() {
  output6.innerHTML = this.value;
  verzekeringValueBon.innerHTML = this.value;
  if(this.value < 129) {
    document.getElementById("verzekeringTips").style.display = "none";
    document.getElementById("papieren").src="./images/meubeuls/meubels export deel 2-27.png";
  }
  if(this.value > 130 && this.value < 258) {
    document.getElementById("verzekeringTips").style.display = "none";
    document.getElementById("papieren").src="./images/meubeuls/papieren.png";
  }
  if(this.value > 259 && this.value < 387) {
    document.getElementById("verzekeringTips").style.display = "block";
    document.getElementById("papieren").src="./images/meubeuls/meubels export deel 2-29.png";
  }
  if(this.value > 388) {
    document.getElementById("verzekeringTips").style.display = "block";
    document.getElementById("papieren").src="./images/meubeuls/meubels export deel 2-30.png";
  }
  
};

const slider7 = document.getElementById("myRange7");
const output7 = document.getElementById("demo7");
const abbonementenValueBon = document.getElementById("bon8");

output7.innerHTML = slider7.value; 
const test7 = output7.innerHTML;


slider7.oninput = function() {
  output7.innerHTML = this.value;
  abbonementenValueBon.innerHTML = this.value;
  if(this.value < 60) {
    document.getElementById("laptop").src="./images/meubeuls/meubels-11.png";
  }
  if(this.value > 61 && this.value < 120) {
    document.getElementById("laptop").src="./images/meubeuls/meubels-13.png";
  }
  if(this.value > 121 && this.value < 181) {
    document.getElementById("laptop").src="./images/meubeuls/meubels-14.png";
  }
  if(this.value > 182) {
    document.getElementById("laptop").src="./images/meubeuls/meubels-16.png";
  }
};

const slider8 = document.getElementById("myRange8");
const output8 = document.getElementById("demo8");

output8.innerHTML = slider8.value; 
const test8 = output8.innerHTML;


slider8.oninput = function() {
  output8.innerHTML = this.value;
  if(this.value < 45) {
    document.getElementById("bier").src="./images/meubeuls/meubels export deel 2-34.png";
    document.getElementById("vrijeTijdTips").style.display = "none";
  }
  if(this.value > 46 && this.value < 90) {
    document.getElementById("bier").src="./images/meubeuls/meubels export deel 2-33.png";
    document.getElementById("vrijeTijdTips").style.display = "none";
  }
  if(this.value > 91 && this.value < 136) {
    document.getElementById("bier").src="./images/meubeuls/meubels export deel 2-32.png";
    document.getElementById("vrijeTijdTips").style.display = "block";
  }
  if(this.value > 137) {
    document.getElementById("bier").src="./images/meubeuls/meubels export deel 2-31.png";
    document.getElementById("vrijeTijdTips").style.display = "block";
  }
};

const slider9 = document.getElementById("myRange9");
const output9 = document.getElementById("demo9");
const overigeValueBon = document.getElementById("bon11");

output9.innerHTML = slider9.value; 
const test9 = output9.innerHTML;


slider9.oninput = function() {
  output9.innerHTML = this.value;
  overigeValueBon.innerHTML = this.value;
  if(this.value < 45) {
    document.getElementById("kleed").src="./images/meubeuls/meubels-21.png";
    document.getElementById("overigeTips").style.display = "none";
  }
  if(this.value > 46 && this.value < 90) {
    document.getElementById("kleed").src="./images/meubeuls/meubels-22.png";
    document.getElementById("overigeTips").style.display = "none";
  }
  if(this.value > 91 && this.value < 136) {
    document.getElementById("kleed").src="./images/meubeuls/meubels-23.png";
    document.getElementById("overigeTips").style.display = "block";
  }
  if(this.value > 137) {
    document.getElementById("kleed").src="./images/meubeuls/meubels-24.png";
    document.getElementById("overigeTips").style.display = "block";
  }
};

// INKOMEN & HUUR
const inkomenBon = document.getElementById("bon1");
const inputInkomen = document.getElementById("maandelijksinkomen");
inputInkomen.oninput = function() {
  inkomenBon.innerHTML = this.value;
}

const huurBon = document.getElementById("bon2");
const inputHuur = document.getElementById("maandelijksekosten");
inputHuur.oninput = function() {
  huurBon.innerHTML = this.value;
}


  


// ----------------------------- SHOW & HIDE Info DIVS --------------------------------------- |
const kledingInfo = document.getElementById("kleding");
const kledingkast = document.getElementById("kledingkast");
const kledingBon = document.getElementById("kledingBon");


function showInfo() {
  if (kledingInfo.style.display === "none") {
    kledingInfo.style.display = "inline-block";
  } else {
    kledingInfo.style.display = "none";
  }
  kledingBon.style.fontWeight = "bold";
}
kledingkast.addEventListener("click", showInfo);
kledingBon.addEventListener("click", showInfo);


const voedingInfo = document.getElementById("voeding");
const voeding = document.getElementById("koelkast");
const voedingBon = document.getElementById("voedingBon");
function showInfoVoeding() {
  if (voedingInfo.style.display === "none") {
    voedingInfo.style.display = "inline-block";
  } else {
    voedingInfo.style.display = "none";
  }
  voedingBon.style.fontWeight = "bold";
}
voeding.addEventListener("click", showInfoVoeding);

const ewlInfo = document.getElementById("ewl");
const ewl = document.getElementById("aanrecht");
const ewlBon = document.getElementById("ewlBon");

function showInfoEwl() {
  if (ewlInfo.style.display === "none") {
    ewlInfo.style.display = "inline-block";
  } else {
    ewlInfo.style.display = "none";
  }
  ewlBon.style.fontWeight = "bold";
}
ewl.addEventListener("click", showInfoEwl);
ewlBon.addEventListener("click", showInfoEwl);

const onderwijsInfo = document.getElementById("onderwijs");
const onderwijs = document.getElementById("certificaat");
const onderwijsBon = document.getElementById("onderwijsBon");
function showInfoOnderwijs() {
  if (onderwijsInfo.style.display === "none") {
    onderwijsInfo.style.display = "inline-block";
  } else {
    onderwijsInfo.style.display = "none";
  }
  onderwijsBon.style.fontWeight = "bold";
}
onderwijs.addEventListener("click", showInfoOnderwijs);
onderwijsBon.addEventListener("click", showInfoOnderwijs);

const verzekeringenInfo = document.getElementById("verzekeringen");
const verzekeringen = document.getElementById("papieren");
const verzekeringBon = document.getElementById("verzekeringBon");
function showInfoVerzekeringen() {
  if (verzekeringenInfo.style.display === "none") {
    verzekeringenInfo.style.display = "inline-block";
  } else {
    verzekeringenInfo.style.display = "none";
  }
  verzekeringBon.style.fontWeight = "bold";
}
verzekeringen.addEventListener("click", showInfoVerzekeringen);
verzekeringBon.addEventListener("click", showInfoVerzekeringen);

const abbonementenInfo = document.getElementById("abbonementen");
const abbonementen = document.getElementById("laptop");
const abbonementBon = document.getElementById("abbonementBon");
function showInfoAbbonementen() {
  if (abbonementenInfo.style.display === "none") {
    abbonementenInfo.style.display = "inline-block";
  } else {
    abbonementenInfo.style.display = "none";
  }
  abbonementBon.style.fontWeight = "bold";
}
abbonementen.addEventListener("click", showInfoAbbonementen);
abbonementBon.addEventListener("click", showInfoAbbonementen )

const overigeInfo = document.getElementById("overige");
const overige = document.getElementById("kleed");
const overigeBon = document.getElementById("overigeBon");
function showInfoOverige() {
  if (overigeInfo.style.display === "none") {
    overigeInfo.style.display = "inline-block";
  } else {
    overigeInfo.style.display = "none";
  }
  overigeBon.style.fontWeight = "bold";
}

overige.addEventListener("click", showInfoOverige);
overigeBon.addEventListener("click", showInfoOverige)

const vrijeTijdInfo = document.getElementById("vrijetijd");
const vrijeTijd = document.getElementById("bier");
const vrijetijdBon = document.getElementById("vrijetijdBon");
function showInfoVrijeTijd() {
  if (vrijeTijdInfo.style.display === "none") {
    vrijeTijdInfo.style.display = "inline-block";
  } else {
    vrijeTijdInfo.style.display = "none";
  }
  vrijetijdBon.style.fontWeight = "bold";
}

vrijeTijd.addEventListener("click", showInfoVrijeTijd);
vrijetijdBon.addEventListener("click", showInfoVrijeTijd);

const vervoerInfo = document.getElementById("vervoer");
const vervoer = document.getElementById("fiets");
const bonVervoer = document.getElementById("vervoerBon");

function showInfoVervoer() {
  if (vervoerInfo.style.display === "none") {
    vervoerInfo.style.display = "inline-block";
  } else {
    vervoerInfo.style.display = "none";
  }

  
bonVervoer.style.fontWeight = "bold";
}

vervoer.addEventListener("click", showInfoVervoer);
bonVervoer.addEventListener("click", showInfoVervoer)


function closeVervoer() {
  kledingInfo.style.display = "none";
  ewlInfo.style.display = "none";
  onderwijsInfo.style.display = "none";
  vrijeTijdInfo.style.display = "none";
  overigeInfo.style.display = "none";
  abbonementenInfo.style.display = "none";
  verzekeringenInfo.style.display = "none";
  voedingInfo.style.display = "none";
}
vervoer.addEventListener("click", closeVervoer);

function closeKleding() {
  vervoerInfo.style.display = "none";
  ewlInfo.style.display = "none";
  onderwijsInfo.style.display = "none";
  vrijeTijdInfo.style.display = "none";
  overigeInfo.style.display = "none";
  abbonementenInfo.style.display = "none";
  verzekeringenInfo.style.display = "none";
  voedingInfo.style.display = "none";
}

kledingkast.addEventListener("click", closeKleding);

function closeEwl() {
  vervoerInfo.style.display = "none";
  kledingInfo.style.display = "none";
  onderwijsInfo.style.display = "none";
  vrijeTijdInfo.style.display = "none";
  overigeInfo.style.display = "none";
  abbonementenInfo.style.display = "none";
  verzekeringenInfo.style.display = "none";
  voedingInfo.style.display = "none";
}

ewl.addEventListener("click", closeEwl);

function closeOnderwijs() {
  vervoerInfo.style.display = "none";
  kledingInfo.style.display = "none";
  ewlInfo.style.display = "none";
  vrijeTijdInfo.style.display = "none";
  overigeInfo.style.display = "none";
  abbonementenInfo.style.display = "none";
  verzekeringenInfo.style.display = "none";
  voedingInfo.style.display = "none";
}

onderwijs.addEventListener("click", closeOnderwijs);

function closeVrijeTijd() {
  vervoerInfo.style.display = "none";
  kledingInfo.style.display = "none";
  ewlInfo.style.display = "none";
  onderwijsInfo.style.display = "none";
  overigeInfo.style.display = "none";
  abbonementenInfo.style.display = "none";
  verzekeringenInfo.style.display = "none";
  voedingInfo.style.display = "none";
}

vrijeTijd.addEventListener("click", closeVrijeTijd);

function closeOverige() {
  vervoerInfo.style.display = "none";
  kledingInfo.style.display = "none";
  ewlInfo.style.display = "none";
  onderwijsInfo.style.display = "none";
  vrijeTijdInfo.style.display = "none";
  abbonementenInfo.style.display = "none";
  verzekeringenInfo.style.display = "none";
  voedingInfo.style.display = "none";
}

overige.addEventListener("click", closeOverige);

function closeAbbo() {
  vervoerInfo.style.display = "none";
  kledingInfo.style.display = "none";
  ewlInfo.style.display = "none";
  onderwijsInfo.style.display = "none";
  vrijeTijdInfo.style.display = "none";
  overigeInfo.style.display = "none";
  verzekeringenInfo.style.display = "none";
  voedingInfo.style.display = "none";
}

abbonementen.addEventListener("click", closeAbbo);

function closeVerzekering() {
  vervoerInfo.style.display = "none";
  kledingInfo.style.display = "none";
  ewlInfo.style.display = "none";
  onderwijsInfo.style.display = "none";
  vrijeTijdInfo.style.display = "none";
  overigeInfo.style.display = "none";
  abbonementenInfo.style.display = "none";
  voedingInfo.style.display = "none";
}

verzekeringen.addEventListener("click", closeVerzekering);

function closeVoeding() {
  vervoerInfo.style.display = "none";
  kledingInfo.style.display = "none";
  ewlInfo.style.display = "none";
  onderwijsInfo.style.display = "none";
  vrijeTijdInfo.style.display = "none";
  overigeInfo.style.display = "none";
  abbonementenInfo.style.display = "none";
  verzekeringenInfo.style.display = "none";
}

voeding.addEventListener("click", closeVoeding);

