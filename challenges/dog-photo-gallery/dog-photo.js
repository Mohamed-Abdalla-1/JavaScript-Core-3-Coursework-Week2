async function addDog() {
  const request = await fetch("https://dog.ceo/api/breeds/image/random");
  const objectURL = await request.json();
  console.log(objectURL);
  return objectURL.message;
}
//
const button = document.getElementById("add-image");
button.addEventListener("click", async () => {
  try {
    const li = document.createElement("li");
    const uList = document.getElementById("list");
    uList.appendChild(li);
    const image = new Image(300, 300);
    image.src = await addDog();
    li.appendChild(image);
  } catch (error) {
    console.log("There is an error", error);
  }
});
