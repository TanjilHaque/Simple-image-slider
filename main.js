const imageGallery = [
  {
    id: 1,
    source: "./images/sky1.jpg",
  },
  {
    id: 2,
    source: "./images/sky2.jpg",
  },
  {
    id: 3,
    source: "./images/sky3.jpg",
  },
  {
    id: 4,
    source: "./images/sky4.jpg",
  },
  {
    id: 5,
    source: "./images/sky5.jpg",
  },
  {
    id: 6,
    source: "./images/sky6.jpg",
  },
  {
    id: 7,
    source: "./images/sky7.jpg",
  },
];
let image = document.querySelector('.image');
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
leftBtn.addEventListener("click", leftBtnFunc);
rightBtn.addEventListener("click", rightBtnFunc);
let idxNum = 0;
let imageContainer = document.querySelector(".imageContainer");

function leftBtnFunc() {
  if (idxNum <= 0) {
    idxNum = imageGallery.length - 1;
  } else {
    idxNum--;
  }
  imageContainer.innerHTML = `<img class="image" src=${imageGallery[idxNum].source} alt="skyImage">`;
}

function rightBtnFunc() {
  if (idxNum < imageGallery.length - 1) {
    idxNum++;
  } else {
    idxNum = 0;
  }
  imageContainer.innerHTML = `<img class="image" src=${imageGallery[idxNum].source} alt="skyImage">`;
}

