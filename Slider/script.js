var models = [
  {
    name: "BMW 818d",
    image: "img/bmw.jpg",
    link: "http://www.google.com",
  },
  {
    name: "Mazda CX-3",
    image: "img/mazda.jpg",
    link: "http://www.google.com",
  },
  {
    name: "Volvo S60",
    image: "img/volvo.jpg",
    link: "http://www.google.com",
  },
  {
    name: "Scoda Superb",
    image: "img/skoda.jpg",
    link: "http://www.google.com",
  },
  {
    name: "Honda Civic",
    image: "img/honda.jpg",
    link: "http://www.google.com",
  },
];

var index = 2;
slaytCount = models.length;
var intervel;

var settings = {
  duration: "500",
  random: false, //buradaki ayarlara gore init fonksiyonu tepki gosterir
};

init(settings);
document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlyte(index);
    console.log(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlyte(index);
    console.log(index);
  });

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(intervel);
  });
});

document.querySelectorAll(".arrow").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  var prev;
  intervel = setInterval(function () {
    if (settings.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev); //index ile prev esit oldumu tru doner o yuzden de dongunun basina donup yeni bir sayi olusturur bu durumdada sayilar bir birinden farkli olmadikca gonguden cikilmaz
      prev = index;
    } else {
      //artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
    }
    showSlyte(index);
    console.log(index);
    index++;
  }, settings.duration);
}

function showSlyte(i) {
  index = i;

  if (i < 0) index = slaytCount - 1;
  if (i >= slaytCount) index = 0;

  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
