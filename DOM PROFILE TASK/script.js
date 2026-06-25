let name = document.querySelector("#name");
let age = document.querySelector("#age");
let profession = document.querySelector("#profession");
let city = document.querySelector("#city");
let imgURL = document.querySelector("#image");
let bio = document.querySelector("#bio");

document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();

  let container = document.querySelector("#container");
  let card = document.createElement("div");
  card.classList.add("card");

  let image = document.createElement("img");
  image.src = imgURL.value;
  image.alt = "profile image";
  card.append(image);

  let h2 = document.createElement("h2");
  h2.innerText = name.value;
  card.append(h2);

  let professionSpan = document.createElement("span");
  professionSpan.classList.add("card-profession");
  professionSpan.innerText = profession.value;
  card.append(professionSpan);

  let cardInfoDiv = document.createElement("div");
  cardInfoDiv.classList.add("card-info-div");
  let paragraphAge = document.createElement("p");
  paragraphAge.classList.add("info");

  let paraParagraphAge = document.createElement("p");
  paraParagraphAge.classList.add("icon");
  paraParagraphAge.innerText = "📅";
  paragraphAge.append(paraParagraphAge);

  let spanParagraphAge = document.createElement("span");
  spanParagraphAge.innerText = "Age: ";
  paragraphAge.append(spanParagraphAge);

  let spanValueParaAge = document.createElement("span");
  spanValueParaAge.innerText = age.value;
  paragraphAge.append(spanValueParaAge);

  cardInfoDiv.append(paragraphAge);

  //   profession
  let paragraphProfession = document.createElement("p");
  paragraphProfession.classList.add("info");

  let paraParagraphProfession = document.createElement("p");
  paraParagraphProfession.classList.add("icon");
  paraParagraphProfession.innerText = "👜";
  paragraphProfession.append(paraParagraphProfession);

  let spanParagraphProfession = document.createElement("span");
  spanParagraphProfession.innerText = "Profession: ";
  paragraphProfession.append(spanParagraphProfession);

  let spanValueParaProfession = document.createElement("span");
  spanValueParaProfession.innerText = profession.value;
  paragraphProfession.append(spanValueParaProfession);

  cardInfoDiv.append(paragraphProfession);

  //   city
  let paragraphCity = document.createElement("p");
  paragraphCity.classList.add("info");

  let paraParagraphCity = document.createElement("p");
  paraParagraphCity.classList.add("icon");
  paraParagraphCity.innerText = "📍";
  paragraphCity.append(paraParagraphCity);

  let spanParagraphCity = document.createElement("span");
  spanParagraphCity.innerText = "City: ";
  paragraphCity.append(spanParagraphCity);

  let spanValueParaCity = document.createElement("span");
  spanValueParaCity.innerText = city.value;
  paragraphCity.append(spanValueParaCity);

  cardInfoDiv.append(paragraphCity);

  //   bio
  let paragraphBio = document.createElement("p");
  paragraphBio.classList.add("info");

  let paraParagraphBio = document.createElement("p");
  paraParagraphBio.classList.add("icon");
  paraParagraphBio.innerText = "ℹ";
  paragraphBio.append(paraParagraphBio);

  let spanParagraphBio = document.createElement("span");
  spanParagraphBio.innerText = "Bio: ";
  paragraphBio.append(spanParagraphBio);

  let spanValueParaBio = document.createElement("span");
  spanValueParaBio.innerText = bio.value;
  paragraphBio.append(spanValueParaBio);

  cardInfoDiv.append(paragraphBio);

  card.append(cardInfoDiv);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click",()=>{
    card.remove()
  })

  card.append(deleteBtn);
  container.append(card);
});
