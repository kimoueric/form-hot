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
