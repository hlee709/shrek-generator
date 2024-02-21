document.addEventListener('DOMContentLoaded', function() {
  const shrekImages = [
    "shrek.png",
    "shrek2.jpg",
    "shrek3.jpg",
    "shrek4.jpg",
    "shrek5.jpg",
    "shrek6.jpg",
    "shrek7.png",
    "shrek8.jpg",
    "shrek9.jpg",
    "shrek10.jpg",
    "shrek11.png",
    "shrek12.jpg",
    "shrek13.jpg",
    "shrek14.jpg",
    "shrekcat.jpg",
    "shrekcat2.jpg",
    "notshrek.png",
    "gigadonkey.jpg"
  ];

  const shrekImg = document.getElementById('shrek-img');

  function generateRandomShrekPicture() {
    const randomIndex = Math.floor(Math.random() * shrekImages.length);
    const randomShrekImage = shrekImages[randomIndex];
    shrekImg.src = "images/" + randomShrekImage;
  }

  const generateBtn = document.getElementById('generate-btn');
  generateBtn.addEventListener('click', generateRandomShrekPicture);
});
