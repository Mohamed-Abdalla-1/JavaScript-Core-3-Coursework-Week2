const main = document.querySelector("main");
const image = document.createElement("img");
  main.appendChild(image);


async function proHumour() {
  const request = await fetch("https://xkcd.now.sh/?comic=latest");
  const respond = await request.json();
  console.log(respond);
  console.log(respond.img);
  // return respond.img;

  image.src = await respond.img
}

proHumour();
