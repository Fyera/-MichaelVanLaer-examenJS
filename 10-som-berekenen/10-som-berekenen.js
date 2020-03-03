var getallen = [];
var result = "";
var getal = 0;
var allegetallen = "";

function voegToe(getal) {
    if (getal.length == 0) {
        allegetallen = "U heeft niets ingevuld!";
    } else if (isNaN(getal)) {
        allegetallen = "U heeft geen cijfer ingevuld!";
    } else {
        getallen.push(getal);
        console.log(getallen);
        allegetallen = "Alle cijfers: " + getallen;
    }

}

function berekenMij(getallen) {
    var som = 0;
    var totaal = 0;
    for (x = 0; x < getallen.length; x++) {
        som = totaal + parseInt(getallen[x]);
        totaal = som;
        console.log(totaal);
    }
    result = allegetallen + " -som: " + totaal
    return result;
}