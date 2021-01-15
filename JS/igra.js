var parametri = new URLSearchParams(window.location.search);
var prviIgrac = parametri.get('igrac1');
var drugiIgrac = parametri.get('igrac2');
var n = parametri.get('velicina')-1;
var naPotezu = 1; //na početku uvijek igra prvi igrač
var rezultatPrvog = 0;
var rezultatDrugog = 0;

var canvas = document.getElementById("cilim");
var ctx = canvas.getContext("2d");

var brojNeobojenihPolja = brojPolja(n+1);

//Učitavanje i početak igre
window.onload = function() {
    iscrtajTablu(n, prviIgrac, drugiIgrac);
    document.getElementById("i1").style.backgroundColor = "white";
    document.getElementById("i2").style.backgroundColor = "#2e2524";
    document.getElementById("kraj").style.display = "none";
};


/*Event listener na klik na canvas. Prvo nalazi koordinate piksela na koji je kliknuto, te koje su to koordinate posmatrano unutar canvasa
i koje na koje polje ploce je kliknuto. Nakon toga se ispituje da li je najbliza ivica kliknutom pikselu obojena, te ako nije, iscrtava se.*/
canvas.addEventListener('click',function(event){
    var elemLeft = canvas.offsetLeft + canvas.clientLeft; //offset canvasa left
    var elemTop = canvas.offsetTop + canvas.clientTop;  //offset canvasa top

    var x = event.pageX - elemLeft;  //koordinata x unutar canvasa = opća koordinata x piksela - offset
    var y = event.pageY - elemTop; //koordinata y unutar canvasa =  opća koordinata y piksela - offset

    var xk = x % 50; //koordinata x unutar polja
    var yk = y % 50; //koordinata y unutar polja

    var xpocetna,ypocetna; //pocetak strokea
    var xkrajnja,ykrajnja; //kraj strokea

    if(!daLiPripadaCilimu(x,y,xk,yk)) return;

    if (!daLiJePoljeObojeno(x,y)){
        if (xk > yk && xk + yk <50) {
            let pxedgex = x - xk + 25;  //x koordinata sredine ivice
            let pxedgey = y - yk;       //y koordinata sredine ivice

            if(praznaIvica(pxedgex,pxedgey)){
                xpocetna = x-xk;
                ypocetna = y-yk;
                xkrajnja = x-xk+50;
                ykrajnja = y-yk;
                ctx.beginPath();
                ctx.strokeStyle= "rgba(0,0,0,1)";
                ctx.moveTo(xpocetna, ypocetna);
                ctx.lineTo(xkrajnja, ykrajnja);
                ctx.stroke();
            } else return;

        } else if (xk > yk && xk + yk > 50) {
            let pxedgex = x - xk + 50;
            let pxedgey = y - yk + 25;

            if(praznaIvica(pxedgex,pxedgey)){
                xpocetna = x-xk+50;
                ypocetna = y-yk;
                xkrajnja = x-xk+50;
                ykrajnja = y-yk+50;
                ctx.beginPath();
                ctx.strokeStyle= "rgba(0,0,0,1)";
                ctx.moveTo(xpocetna, ypocetna);
                ctx.lineTo(xkrajnja, ykrajnja);
                ctx.stroke();
            } else return;

        } else if(xk < yk && xk + yk < 50){
            let pxedgex = x - xk;
            let pxedgey = y - yk + 25;

            console.info("lijeva ivica");
            xpocetna = x-xk;
            ypocetna = y-yk;
            xkrajnja = x-xk;
            ykrajnja = y-yk+50;
            if(praznaIvica(pxedgex,pxedgey)){
                console.info("ghjk");
                ctx.beginPath();
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.moveTo(xpocetna, ypocetna);
                ctx.lineTo(xkrajnja, ykrajnja);
                ctx.stroke();
            } else return;

        } else if (xk < yk && xk + yk > 50) {
            let pxedgex = x - xk + 25;
            let pxedgey = y - yk + 50;

            if(praznaIvica(pxedgex,pxedgey)){
                xpocetna = x-xk;
                ypocetna = y-yk+50;
                xkrajnja = x-xk+50;
                ykrajnja = y-yk+50;
                ctx.beginPath();
                ctx.strokeStyle= "rgba(0,0,0,1)";
                ctx.moveTo(xpocetna, ypocetna);
                ctx.lineTo(xkrajnja, ykrajnja);
                ctx.stroke();
            } else return;
        }
        //ispitivanje da li ivica zatvara polje
        if (daLiIvicaZatvaraPolje(xpocetna,ypocetna,xkrajnja,ykrajnja)){
            document.getElementById("rezultat").innerHTML = rezultatPrvog + " - " + rezultatDrugog;
            console.info(brojNeobojenihPolja);
            if (brojNeobojenihPolja===0){
                kraj();
            }
        }
        else{
            if (naPotezu===1){
                naPotezu=2;
                document.getElementById("i1").style.backgroundColor = "#2e2524";
                document.getElementById("i2").style.backgroundColor = "white";
            }
            else if(naPotezu===2){
                naPotezu=1;
                document.getElementById("i1").style.backgroundColor = "white";
                document.getElementById("i2").style.backgroundColor = "#2e2524";
            }
        }
    }
});







