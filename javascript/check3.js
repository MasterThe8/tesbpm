let inputSong3 = document.getElementById('inputSong3');

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

inputSong3.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();

        document.getElementById("subMit").click();
    }
});

function check(){


    if(inputSong3.value == 135){
        benar.style.display = "block";
        pageButton.style.display = "block";

        zonk.style.display = "none";
        nonum.style.display = "none";
        salah.style.display = "none";
    }
    else if(inputSong3.value != 135){
        salah.style.display = "block";

        pageButton.style.display = "none";
        zonk.style.display = "none";
        nonum.style.display = "none";
        benar.style.display = "none";
    }

    // Value is Not Number
    if(isNaN(inputSong3.value)){
        nonum.style.display = "block";
        nonum.style.color = "red";

        pageButton.style.display = "none";
        zonk.style.display = "none";
        benar.style.display = "none";
        salah.style.display = "none";
    }

    // Value is Nulll
    if(inputSong3.value == ""){
        zonk.style.display = "block";
        zonk.style.color = "red";

        pageButton.style.display = "none";
        nonum.style.display = "none";
        benar.style.display = "none";
        salah.style.display = "none";
    }
}