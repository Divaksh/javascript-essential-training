/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpackObjectArray from "./components/data.js";

const setBackpackContent = (singleBackpack) => {
  //console.log(singleBackpack);
  const content = `
      <figure class="backpack__image">
        <img src=${singleBackpack.image} alt="" />
      </figure>
      <h1 class="backpack__name">${singleBackpack.name}</h1>
      <ul class="backpack__features">
        <li class="packprop backpack__volume">Volume:<span> ${
          singleBackpack.volume
        }l</span></li>
        <li class="packprop backpack__color">Color:<span> ${
          singleBackpack.color
        }</span></li>
        <li class="backpack__age">Age:<span> ${singleBackpack.backpackAge()} days old</span></li>
        <li class="packprop backpack__pockets">Number of pockets:<span> ${
          singleBackpack.pocketNum
        }</span></li>
        <li class="packprop backpack__strap">Left strap length:<span> ${
          singleBackpack.strapLength.left
        } inches</span></li>
        <li class="packprop backpack__strap">Right strap length:<span> ${
          singleBackpack.strapLength.right
        } inches</span></li>
        <li class="feature backpack__lid">Lid status:<span> ${
          singleBackpack.lidOpen ? "open" : "closed"
        }</span></li>
      </ul>

   `;

  return content;
};

const main = document.querySelector(".maincontent");

for (const singleBackpack of backpackObjectArray) {
  //console.log(singleBackpack);
  let newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", singleBackpack.id);
  newArticle.innerHTML = setBackpackContent(singleBackpack);
  main.append(newArticle);
}
