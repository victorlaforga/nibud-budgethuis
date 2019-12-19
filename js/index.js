import results from "../begrotingen.js";
const dataBegrotingen = results;
const dataAlleenstaand = dataBegrotingen.filter(element => {
    if(element.Huishouden === "Alleenstaand") {
        return element;
    }
});
const dataDeel1 = dataAlleenstaand.slice(0,28);
const dataDeel2 = dataAlleenstaand.slice(28,56);
const dataDeel3 = dataAlleenstaand.slice(56,84);
const dataDeel4 = dataAlleenstaand.slice(84,112);
const dataDeel5 = dataAlleenstaand.slice(112,140);
const dataDeel6 = dataAlleenstaand.slice(140,168);
const dataDeel7 = dataAlleenstaand.slice(168,196);
const dataDeel8 = dataAlleenstaand.slice(196,224);
const dataDeel9 = dataAlleenstaand.slice(224,252);
const dataDeel10 = dataAlleenstaand.slice(252,280);
const dataDeel11 = dataAlleenstaand.slice(308,336);

console.log(dataBegrotingen)
const alleenInkomen = dataAlleenstaand.filter(element => {
    if(element.Post === "TOTAAL INKOMEN"){
        return element;
    }
    
    
});
console.log(alleenInkomen)




