let inputSong2 = document.getElementById('inputSong2');

let zonk = document.getElementById('zonk');
let nonum = document.getElementById('nonum');
let benar = document.getElementById('benar');
let salah = document.getElementById('salah');
let pageButton = document.getElementById('pageButton');

zonk.style.display = "none";
nonum.style.display = "none";
benar.style.display = "none";
salah.style.display = "none";
pageButton.style.display = "none";

inputSong2.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();

        document.getElementById("subMit").click();
    }
});

function check(){


    if(inputSong2.value == 120){
        benar.style.display = "block";
        pageButton.style.display = "block";

        zonk.style.display = "none";
        nonum.style.display = "none";
        salah.style.display = "none";
    }
    else if(inputSong2.value != 120){
        salah.style.display = "block";

        pageButton.style.display = "none";
        zonk.style.display = "none";
        nonum.style.display = "none";
        benar.style.display = "none";
    }

    // Value is Not Number
    if(isNaN(inputSong2.value)){
        nonum.style.display = "block";
        nonum.style.color = "red";

        pageButton.style.display = "none";
        zonk.style.display = "none";
        benar.style.display = "none";
        salah.style.display = "none";
    }

    // Value is Nulll
    if(inputSong2.value == ""){
        zonk.style.display = "block";
        zonk.style.color = "red";

        pageButton.style.display = "none";
        nonum.style.display = "none";
        benar.style.display = "none";
        salah.style.display = "none";
    }
}