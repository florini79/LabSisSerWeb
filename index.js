
// METODOS MOVIMENTO

function centrodtaentra() {
    let cde = document.getElementById("centroDta")
    cde.style.width = "20vw";
}
function centrodtasai() {
    let cds = document.getElementById("centroDta")
    cds.style.width = "0vw";
}
function menutopoentra() {
    let mte = document.getElementById("expMeio")
    mte.style.height = "20vh";
    setTimeout(() => {
        document.getElementById("expMeioCima").style.display="flex";
    }, 400);

}
function menutoposai() {

    setTimeout(() => {
        let mts = document.getElementById("expMeio")
        mts.style.height = "5vh";
        document.getElementById("expMeioCima").style.display="none";
    }, 100);
}
function menucentroesqentra() {
    let mcee = document.getElementById("centroEsq")
    mcee.style.width = "15vw";
    setTimeout(() => {
        let elements = document.getElementsByClassName("spanmenu");
        for (let element of elements) {
            element.style.display = "flex";
    }
    }, 150);
}
function menucentroesqsai() {
    let mces = document.getElementById("centroEsq")
    mces.style.width = "5vw";
    setTimeout(() => {
        let elements = document.getElementsByClassName("spanmenu");
        for (let element of elements) {
            element.style.display = "none";
    }
    }, 150);

}
