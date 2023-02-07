async function addDog() {
  const request = await fetch("https://dog.ceo/api/breeds/image/random");
  const objectURL = await request.json();
  // const objectURL = URL.createObjectURL(blob);
    console.log(objectURL);
    // console.log("Blob:", blob);
  return objectURL.message;
}
//
const button = document.getElementById("add-image");
button.addEventListener("click", async () => {
  const li = document.createElement("li");
  const uList = document.getElementById("list");
  uList.appendChild(li);
  const image = new Image(300, 300);
  image.src = await addDog();
  li.appendChild(image);
});
