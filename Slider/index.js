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
let rand = false;
const img = document.querySelector(".card-img-top");
const btnLeft = document.getElementById("left");
btnLeft.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = models.length - 1;
  }

  if (!rand) {
    img.src = models[index].image;
  } else {
    index = Math.round(Math.random() * (models.length - 1));
    img.src = models[index].image;
  }
  console.log(index);
});
const btnRight = document.getElementById("right");
btnRight.addEventListener("click", () => {
  index++;
  if (index >= models.length) {
    index = 0;
  }

  if (!rand) {
    img.src = models[index].image;
  } else {
    index = Math.round(Math.random() * (models.length - 1));
    img.src = models[index].image;
  }
  console.log(index);
});
console.log(models.length);
