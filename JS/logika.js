//Pocetni broj neobojenih polja
function brojPolja(n){
    var broj = n;
    for (let i = n-2; i>=1;i=i-2){
        broj = broj + i*2;
    }
    broj=broj-4;
    return broj;
}

//Funkcija koja iscrtava tablu
function iscrtajTablu(n, prviIgrac, drugiIgrac){
    document.getElementById("igrac1").innerHTML = "Igrač 1: " + prviIgrac;
    document.getElementById("igrac2").innerHTML = "Igrač 2: " + drugiIgrac;

    canvas.width = (n+1)*50;
    canvas.height = (n+1)*50;

    for (let i = 0; i<=n; i++)
        for (let j = 0; j <= n; j++) {

            if ((i <= n / 2) && (j >= n / 2 - i) && (j <= n / 2 + i)) {
                ctx.strokeStyle = "rgb(200,200,200)";
                ctx.strokeRect(i * 50, j * 50, 50, 50);
            } else if ((i > n / 2) && (j <= n / 2 + (n - i)) && (j >= n / 2 - (n - i))) {
                ctx.strokeStyle = "rgb(200,200,200)";
                ctx.strokeRect(i * 50, j * 50, 50, 50);
            }
        }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if ((i < n / 2) && ((j === n / 2 - i) || (j === n / 2 + i))) {
                ctx.beginPath();
                ctx.moveTo(i * 50, j * 50);
                ctx.lineTo(i * 50, j * 50 + 50);
                if (j < n / 2) {
                    ctx.moveTo(i * 50, j * 50);
                    ctx.lineTo(i * 50 + 50, j * 50);
                    ctx.strokeStyle = "rgb(0,0,0)";
                } else if (j > n / 2) {
                    ctx.moveTo(i * 50, j * 50 + 50);
                    ctx.lineTo(i * 50 + 50, j * 50 + 50);
                    ctx.strokeStyle = "rgb(0,0,0)";

                } else {
                    ctx.fillStyle = "#608c50";
                    ctx.fillRect(i * 50, j * 50, 50, 50);
                    ctx.moveTo(i * 50, j * 50);
                    ctx.lineTo(i * 50+50, j * 50);
                    ctx.lineTo(i * 50+50, j * 50 + 50);
                    ctx.lineTo(i * 50, j * 50 + 50);
                    ctx.lineTo(i * 50, j * 50);
                    ctx.strokeStyle = "rgb(0,0,0)";
                }
            } else if ((i > n / 2) && ((j === n / 2 + (n - i)) || (j === n / 2 - (n - i)))) {
                ctx.beginPath();
                ctx.moveTo(i * 50 + 50, j * 50);
                ctx.lineTo(i * 50 + 50, j * 50 + 50);
                if (j < n / 2) {
                    ctx.moveTo(i * 50, j * 50);
                    ctx.lineTo(i * 50 + 50, j * 50);
                    ctx.strokeStyle = "rgb(0,0,0)";
                } else if (j > n / 2) {
                    ctx.moveTo(i * 50, j * 50 + 50);
                    ctx.lineTo(i * 50 + 50, j * 50 + 50);
                    ctx.strokeStyle = "rgb(0,0,0)";
                } else {
                    ctx.fillStyle = "#608c50";
                    ctx.fillRect(i * 50, j * 50, 50, 50);
                    ctx.moveTo(i * 50, j * 50);
                    ctx.lineTo(i * 50 + 50, j * 50);
                    ctx.lineTo(i * 50 + 50, j * 50 + 50);
                    ctx.lineTo(i * 50, j * 50 + 50);
                    ctx.lineTo(i * 50, j * 50);
                    ctx.strokeStyle = "rgb(0,0,0)";
                }
            } else if ((i === n / 2)) {
                if (j === n / 2 - i) {
                    ctx.fillStyle = "#dd5b42";
                    ctx.fillRect(i * 50, j * 50, 50, 50);
                    ctx.beginPath();
                    ctx.moveTo(i * 50, j * 50 + 50);
                    ctx.lineTo(i * 50, j * 50);
                    ctx.lineTo(i * 50 + 50, j * 50);
                    ctx.lineTo(i * 50 + 50, j * 50 + 50);
                    ctx.lineTo(i * 50, j * 50 + 50);
                    ctx.strokeStyle = "rgb(0,0,0)";
                } else if (j === n / 2 + i) {
                    ctx.fillStyle = "#dd5b42";
                    ctx.fillRect(i * 50, j * 50, 50, 50);
                    ctx.beginPath();
                    ctx.moveTo(i * 50, j * 50);
                    ctx.lineTo(i * 50, j * 50 + 50);
                    ctx.lineTo(i * 50 + 50, j * 50 + 50);
                    ctx.lineTo(i * 50 + 50, j * 50);
                    ctx.lineTo(i * 50, j * 50);
                    ctx.strokeStyle = "rgb(0,0,0)";
                }
            }
            ctx.stroke();
        }
    }
    obojiPozadinu();
}

//Funkcija koja boji pozadinu canvasa u svijetlosivu
function obojiPozadinu(){
    for(let i = 0;i<=n;i++){
        for(let j =0;j<=n;j++){
            if((i+j<=n/2-1)||(i-j>=n/2+1)||(i-j<=-n/2-1)||(i+j>=n+n/2+1)) {
                ctx.fillStyle="#f8ebeb";
                ctx.fillRect(i*50,j*50,50,50);
            }
        }
    }
}

//Funkcija koja daje boju piksela (x,y)
/*From StackOverflow*/
function dajBoju(canvas, x, y) {
    var context = canvas.getContext("2d");
    var pixel = context.getImageData(x, y, 1, 1);
    // Red = rgb[0], green = rgb[1], blue = rgb[2]
    // All colors are within range [0, 255]
    return pixel.data;
}

//Funkcija koja isctrava ivicu zatvorenog kvadratića
function nacrtajIvicu(x,y){
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y);
    ctx.lineTo(x+50,y+50);
    ctx.lineTo(x,y+50);
    ctx.lineTo(x,y);
    ctx.strokeStyle = "rgb(0,0,0)";
    ctx.stroke();
}

//Funkcija koja ispitiuje da li se tačka nalazi na tabli za igranje
function daLiPripadaCilimu(x,y,xk,yk){
    var pripada=true;
    let i = (x-xk)/50;
    let j = (y-yk)/50;
    console.log(i);
    console.log(j);
    if((i+j<=n/2-1)||(i-j>=n/2+1)||(i-j<=-n/2-1)||(i+j>=n+n/2+1)||
        ((i===0)&&(j===n/2))||((i===n/2)&&(j===0))||((i===n/2)&&(j===n))||((i===n)&&(j===n/2))) {
        pripada=false;
        console.info(pripada);
    }
    console.info(pripada);
    return pripada;
}

//Funkcija koja ispituje da li je već obojen kvadratić na koji je kliknuo igrač
function daLiJePoljeObojeno(x,y){
    var rgb=dajBoju(canvas,x,y);
    if(((rgb[0]===221)&&(rgb[1] ===91)&&(rgb[2]===66))||
        ((rgb[0]===96)&&(rgb[1]===140)&&(rgb[2]===80))||
        ((rgb[0]===248)&&(rgb[1]===235)&&(rgb[2]===235))){
        return true;
    }
}

//Funkcija koja nam daje da li je ivica neiscrtana
function praznaIvica(x,y){
    var rgb = dajBoju(canvas, x, y);
    return (rgb[0] === 200) && (rgb[1] === 200) && (rgb[2] === 200);
}

//Da li je ucrtana ivica posljednja ivica kvadratića kojima pripada
function daLiIvicaZatvaraPolje(xp,yp,xk,yk){
    if(xp===xk){   //vertikalna ivica
        if((!praznaIvica(xp+25,yp))&&(!praznaIvica(xp,yp+25))&&
            (!praznaIvica(xp+50,yp+25))&&(!praznaIvica(xp+25,yp+50))&&
            (!praznaIvica(xp-50+25,yp))&&(!praznaIvica(xp-50,yp+25))&&
            (!praznaIvica(xp+50-50,yp+25))&&(!praznaIvica(xp+25-50,yp+50))&&
            (!daLiJePoljeObojeno(xp+25,yp+25))&&
            (!daLiJePoljeObojeno(xp-50+25,yp+25))){
            if(naPotezu===1){
                ctx.fillStyle = "#dd5b42";
                ctx.fillRect(xp, yp, 50, 50);
                nacrtajIvicu(xp,yp);
                ctx.fillStyle = "#dd5b42";
                ctx.fillRect(xp-50, yp, 50, 50);
                nacrtajIvicu(xp-50,yp);

                brojNeobojenihPolja = brojNeobojenihPolja - 2;
                rezultatPrvog = rezultatPrvog + 2;
            }
            else if(naPotezu===2){
                ctx.fillStyle = "#608c50";
                ctx.fillRect(xp, yp, 50, 50);
                nacrtajIvicu(xp,yp);
                ctx.fillStyle = "#608c50";
                ctx.fillRect(xp-50, yp, 50, 50);
                nacrtajIvicu(xp-50,yp);
                brojNeobojenihPolja = brojNeobojenihPolja - 2;
                rezultatDrugog = rezultatDrugog + 2;
            }
            return true;
        }
        else if((!praznaIvica(xp+25,yp))&&(!praznaIvica(xp,yp+25))&&
            (!praznaIvica(xp+50,yp+25))&&(!praznaIvica(xp+25,yp+50))&&
            (!daLiJePoljeObojeno(xp+25,yp+25))){
            if(naPotezu===1){
                ctx.fillStyle = "#dd5b42";
                ctx.fillRect(xp, yp, 50, 50);
                nacrtajIvicu(xp,yp);
                brojNeobojenihPolja--;
                rezultatPrvog++;
            }
            else if(naPotezu===2){
                ctx.fillStyle = "#608c50";
                ctx.fillRect(xp, yp, 50, 50);
                nacrtajIvicu(xp,yp);
                brojNeobojenihPolja--;
                rezultatDrugog++;
            }
            return true;
        }
        else if((!praznaIvica(xp-50+25,yp))&&(!praznaIvica(xp-50,yp+25))&&
            (!praznaIvica(xp+50-50,yp+25))&&(!praznaIvica(xp+25-50,yp+50))&&
            (!daLiJePoljeObojeno(xp-50+25,yp+25))){
            if(naPotezu===1){
                ctx.fillStyle = "#dd5b42";
                ctx.fillRect(xp-50, yp, 50, 50);
                nacrtajIvicu(xp-50,yp);
                brojNeobojenihPolja--;
                rezultatPrvog++;
            }
            else if(naPotezu===2){
                ctx.fillStyle = "#608c50";
                ctx.fillRect(xp-50, yp, 50, 50);
                nacrtajIvicu(xp-50,yp);
                brojNeobojenihPolja--;
                rezultatDrugog++;
            }
            return true;
        }
        return false;
    }
    else if(yp === yk){
        if((!praznaIvica(xp+25,yp))&&(!praznaIvica(xp,yp+25))&&
            (!praznaIvica(xp+50,yp+25))&&(!praznaIvica(xp+25,yp+50))&&
            (!praznaIvica(xp+25,yp-50))&&(!praznaIvica(xp,yp+25-50))&&
            (!praznaIvica(xp+50,yp+25-50))&&(!praznaIvica(xp+25,yp+50-50))&&
            (!daLiJePoljeObojeno(xp+25,yp+25))&&
            (!daLiJePoljeObojeno(xp+25,yp-50+25))){
            if(naPotezu===1){
                ctx.fillStyle = "#dd5b42";
                ctx.fillRect(xp, yp, 50, 50);
                nacrtajIvicu(xp,yp);
                ctx.fillStyle = "#dd5b42";
                ctx.fillRect(xp, yp-50, 50, 50);
                nacrtajIvicu(xp,yp-50);
                brojNeobojenihPolja = brojNeobojenihPolja - 2;
                rezultatPrvog = rezultatPrvog + 2;
            }
            else if(naPotezu===2){
                ctx.fillStyle = "#608c50";
                ctx.fillRect(xp, yp, 50, 50);
                nacrtajIvicu(xp,yp);
                ctx.fillStyle = "#608c50";
                ctx.fillRect(xp, yp-50, 50, 50);
                nacrtajIvicu(xp,yp-50);
                brojNeobojenihPolja = brojNeobojenihPolja - 2;
                rezultatDrugog = rezultatDrugog + 2;
            }
            return true;
        }
        else if((!praznaIvica(xp+25,yp))&&(!praznaIvica(xp,yp+25))&&
            (!praznaIvica(xp+50,yp+25))&&(!praznaIvica(xp+25,yp+50))&&
            (!daLiJePoljeObojeno(xp+25,yp+25))){
            if(naPotezu===1){
                ctx.fillStyle = "#dd5b42";
                ctx.fillRect(xp, yp, 50, 50);
                nacrtajIvicu(xp,yp);
                brojNeobojenihPolja--;
                rezultatPrvog++;
            }
            else if(naPotezu===2){
                ctx.fillStyle = "#608c50";
                ctx.fillRect(xp, yp, 50, 50);
                nacrtajIvicu(xp,yp);
                brojNeobojenihPolja--;
                rezultatDrugog++;
            }
            return true;
        }
        else if((!praznaIvica(xp+25,yp-50))&&(!praznaIvica(xp,yp+25-50))&&
            (!praznaIvica(xp+50,yp+25-50))&&(!praznaIvica(xp+25,yp+50-50))&&
            (!daLiJePoljeObojeno(xp+25,yp+25-50))){
            if(naPotezu===1){
                ctx.fillStyle = "#dd5b42";
                ctx.fillRect(xp, yp-50, 50, 50);
                nacrtajIvicu(xp,yp-50);
                brojNeobojenihPolja--;
                rezultatPrvog++;
            }
            else if(naPotezu===2){
                ctx.fillStyle = "#608c50";
                ctx.fillRect(xp, yp-50, 50, 50);
                nacrtajIvicu(xp,yp-50);
                brojNeobojenihPolja--;
                rezultatDrugog++;
            }
            return true;
        }
        return false;
    }
}

//Funkcija koja se izvrsava kada nema vise neobojenih polja, proglasava se pobjednik i daje opcija za povratak na početnu stanicu ili revanš
function kraj(){
    if(rezultatPrvog>rezultatDrugog){
        document.getElementById("pobjednik").innerHTML = "Pobjednik je " + prviIgrac + "!";
    }
    else if(rezultatPrvog<rezultatDrugog){
        document.getElementById("pobjednik").innerHTML = "Pobjednik je " + drugiIgrac + "!";
    }
    else{
        document.getElementById("pobjednik").innerHTML = "Rezultat je nerijesen!";
    }
    document.getElementById("kraj").style.backgroundColor = "#2e2524";
    document.getElementById("kraj").style.display = "inline";

}

//Funkcija koja se dodjeljuje onclick dugmiću Povratak na početnu
function povratakNaPocetak(){
    location.href = "index.html";
}

//Funkcija koja se dodjeljuje onclick dugmiću Revanš
function revans(){
    location.reload();
}