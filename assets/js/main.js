// assegno gli elementi button a 2 variabili
var btnGenera = document.getElementById("btn_genera");
var btnAnnulla = document.getElementById("btn_annulla");

// assegno la sezione your ticket a una variabile
var yourTkt = document.getElementById("your_ticket");


// BUTTON GENERA

btnGenera.addEventListener('click', function() {

  // prendo i valori degli elementi input e li assegno ad una variabile
  var fullName = document.getElementById("username").value;
  var distance = Number(document.getElementById("travel_distance").value); // distanza in km da input utente
  var ageClass = document.getElementById("age_class").value;

  // assegno gli elementi della sezione your ticket a delle variabili
  var yourName = document.getElementById("passenger_name");
  var yourOffer = document.getElementById("offer");
  var yourCarrozza = document.getElementById("carrozza");
  var yourCpCode = document.getElementById("cp_code");
  var yourPrice = document.getElementById("price");

  // stampo le info nella sezione your ticket

  //nome completo passeggero
  yourName.innerHTML = fullName.toUpperCase();

  // offerta riservata e prezzo del biglietto
    // variabili essenziali per calcolo prezzi
    var unitRate = .21; // tariffa per km
    var fullPrice = unitRate * distance; // prezzo maggiorenni o nessuna selezione
    var discountUnder18 = fullPrice * .2; // sconto minorenni
    var discountOver65 = fullPrice * .4; // sconto over65
    // definizione dei casi
    if (ageClass == 'minorenne') {
      yourOffer.innerHTML = "Sconto del 20% per minorenni";
      yourPrice.innerHTML = (fullPrice - discountUnder18).toFixed(2) + " €";
    } else if (ageClass == 'maggiorenne' || ageClass == "") {
      yourOffer.innerHTML = "Prezzo Standard";
      yourPrice.innerHTML = fullPrice.toFixed(2) + " €";
    } else if (ageClass == 'over65') {
      yourOffer.innerHTML = "Sconto del 40% per over65";
      yourPrice.innerHTML = (fullPrice - discountOver65).toFixed(2) + " €";
    }

  //carrozza
  yourCarrozza.innerHTML = Math.floor(Math.random() * 14 + 1); // poniamo che ci siano 15 carrozze

  //codice CP
  yourCpCode.innerHTML = Math.floor(Math.random() * (100000 - 90000)) + 90000;

  //compare la sezione your ticket
  yourTkt.style.opacity = "1";
  yourTkt.style.transition = "opacity .5s";

});


//BUTTON ANNULLA

btnAnnulla.addEventListener('click', function() {

  //scompare la sezione your ticket
  yourTkt.style.opacity = "0";
  yourTkt.style.transition = "opacity .5s";

  //reset campi input
  document.getElementById("input_line").reset();
  
})