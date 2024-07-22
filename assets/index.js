let trId = 1;

let addObject = document.getElementById("addObject");

addObject.addEventListener("click", () => {
  trId++;
  document.querySelector("#tableForm>tbody").innerHTML += `
  <tr data-tr-elem="${trId}">
    <td ><input type="text" class=" w-25 p-2 border rounded-2 " id="pays" /></td>
    <td>
      <select name="" id="" class="p-2 border rounded-2">
        <option value=""></option>
    </td>
    <td><input type="text" placeholder="Aucun" class="p-2 w-50 border rounded-2"></td>
    <td><input type="text" placeholder="Aucune" class=" p-2 w-50 border rounded-2" ></td>
    <td><button type="button" class="btn btn-danger p-2 w-75" data-rmbtn-elem="${trId} " onclick="removeObject(${trId})">Enlever</button></td>
  </tr>
  `;

});

function removeObject(id) {
  let tr = document.querySelector(`[data-tr-elem="${id}"]`);
  tr.remove();
}

const itemsTable = [...document.querySelectorAll(".nav-item ")];
const contentItemsTable = [...document.querySelectorAll(".item-content")];

itemsTable.forEach((item) => {
  item.addEventListener("click", () => {
    let buttonItem = item.getElementsByTagName("button");
    removeClassActiveOnItem();
    displayItemContent(item.getAttribute("id"));
    buttonItem[0].classList.add("active");
  });
});

function removeClassActiveOnItem() {
  itemsTable.forEach((it) => {
    it.getElementsByTagName("button")[0].classList.remove("active");
  });
}

function removeItemContent() {
  contentItemsTable.forEach((content) => content.classList.add("invisible"));
}

function displayItemContent(idItem) {
  let item = document.querySelector(`#${idItem}-content`);
  removeItemContent();
  item.classList.remove("invisible");
  item.classList.add("visible");
}

{
  /* <tr data-tr-elem="1">
<td ><input type="text" class=" w-25 p-2 border rounded-2 " id="pays" /></td>
<td>
  <select name="" id="" class="p-2 border rounded-2">
    <option value=""></option>
</td>
<td><input type="text" placeholder="Aucun" class="p-2 w-50 border rounded-2"></td>
<td><input type="text" placeholder="Aucune" class=" p-2 w-50 border rounded-2" ></td>
<td><button class="btn btn-danger p-2 w-75">Enlever</button></td>
</tr> */
}
