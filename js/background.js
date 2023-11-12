const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
const bgImage = document.createElement("img");
bgImage.setAttribute("id", "background_image");

const random_images = images[Math.floor(Math.random() * images.length)];
bgImage.src = `img/${random_images}`;
document.body.appendChild(bgImage);
