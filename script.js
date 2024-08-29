function proveriStarost() {
    let starost = parseInt(document.getElementById("starost").value);

    if (starost >= 18) {
      document.getElementById("rezultat").textContent = "Dobrodošli u našu prodavnicu proteina!";
    } else {
      document.getElementById("rezultat").textContent = "Nažalost, morate biti punoletni da biste pristupili našoj prodavnici.";
    }
  }

  function prikaziProizvode() {
    let proizvodi = ["Whey protein", "BCAA", "Kreatin"];
    let rezultat = "";
    
    for (let i = 0; i < proizvodi.length; i++) {
      rezultat += `Proizvod ${i + 1}: ${proizvodi[i]}\n`;
    }
    
    alert(rezultat);
  }


  

  
  let dugmeDodajUKorpu = document.querySelector("#dodajUKorpu");
dugmeDodajUKorpu.addEventListener("click", function() {
  console.log("Proizvod je dodat u korpu.");
});

let linkKontakt = document.querySelector("#kontaktLink");
linkKontakt.addEventListener("mouseover", function() {
  console.log("Kontaktirajte nas za više informacija.");
});

function promeniBojuPoruke() {
  var porukaDiv = document.getElementById("poruka");
  porukaDiv.style.color = "blue";
}

function promeniStil() {
    var naslov = document.getElementById('kontaktNaslov');
    naslov.style.color = 'blue';
    naslov.style.fontWeight = 'bold';
    naslov.style.textDecoration = 'underline';
  }


function handleFormSubmit(event) {
    event.preventDefault();
    const imePrezime = document.getElementById('imePrezime').value;
    const porukaElement = document.getElementById('poruka');
    porukaElement.innerHTML = `Hvala vam, ${imePrezime}! Vaša poruka je uspešno poslata.`;
  }





  function izracunajUkupnuCenu(cenaPoKomadu, kolicina) {
    var ukupnaCena = cenaPoKomadu * kolicina;
    return ukupnaCena;
  }
  
  function proveriDostupnostProteina(nazivProteina) {
    var dostupniProteini = ["Whey protein", "BCAA", "Kreatin"];
    var dostupan = false;
    
    for (var i = 0; i < dostupniProteini.length; i++) {
      if (dostupniProteini[i].toLowerCase() === nazivProteina.toLowerCase()) {
        dostupan = true;
        break;
      }
    }
    
    return dostupan;
  }
  
  function prikaziRezultate() {
    var cenaPoKomadu = parseFloat(document.getElementById('cenaPoKomadu').value);
    var kolicina = parseInt(document.getElementById('kolicina').value);
    var nazivProteina = document.getElementById('nazivProteina').value;
    
    var ukupnaCena = izracunajUkupnuCenu(cenaPoKomadu, kolicina);
    var dostupan = proveriDostupnostProteina(nazivProteina);
    
    var rezultatiDiv = document.getElementById('rezultati');
    rezultatiDiv.innerHTML = '';
    
    var cenaParagraf = document.createElement('p');
    cenaParagraf.innerHTML = 'Ukupna cena: ' + ukupnaCena.toFixed(2) + ' dinara';
    rezultatiDiv.appendChild(cenaParagraf);
    
    var dostupnostParagraf = document.createElement('p');
    if (dostupan) {
      dostupnostParagraf.innerHTML = 'Protein "' + nazivProteina + '" je dostupan u prodavnici.';
    } else {
      dostupnostParagraf.innerHTML = 'Protein "' + nazivProteina + '" nije dostupan u prodavnici.';
    }
    rezultatiDiv.appendChild(dostupnostParagraf);
  }