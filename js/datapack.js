function Map(mapImg, mapText, mapLink, tittle) {
  this.mapImg = mapImg;
  this.mapText = mapText;
  this.mapLink = mapLink;
  this.tittle = tittle;
}

const mapListesi = [
  new Map(
    "./img/image.png",
    "Bu mapdeki amaç sürekli devam etmekdir oyun eğer yaşarsanız sonsuza kadar devam eder. Eğer aynı odada hayaletle 15 saniye kalırsanız kaybedersiniz",
    "https://dl.fingermaps.net/map-jam/plant-grandma",
    "DATAPACK"
  ),
];

function mapGetir() {
  for (let i = 0; i < mapListesi.length; i++) {
    const box = document.createElement("div");
    mapContainer.appendChild(box);
    box.classList.add("row", "align-items-center", "map");
    const boxImg = document.createElement("div");
    boxImg.classList.add("col-lg-4", "col-md-12");
    box.appendChild(boxImg);
    const boxText = document.createElement("div");
    boxText.classList.add("col-lg-6", "col-md-12");
    box.appendChild(boxText);
    const boxLink = document.createElement("a");
    boxLink.classList.add("col-lg-2", "col-md-12");
    box.appendChild(boxLink);

    boxImg.innerHTML = `<h3> ${mapListesi[i].tittle} </h3> <img src="${mapListesi[i].mapImg}" alt="" class = "map-show-img"> `;
    boxText.innerHTML = `<p>${mapListesi[i].mapText}</p>`;
    boxLink.innerHTML = ` <a href="${mapListesi[i].mapLink}">Tıklayınız</a>`;
  }
}

mapGetir();
