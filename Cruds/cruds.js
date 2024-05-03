let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let btn_create = document.getElementById("btn_create");
let search = document.getElementById("search");

let mood = "create";
let tmp;

//! creating a variable -> array[] to store the itmes
let data_product;

//! storing data from localStorage to array to show it in showData();
if (localStorage.product != null) {
  data_product = JSON.parse(localStorage.product);
} else {
  data_product = [];
}

//! show the data every time the page reloads
showData();
btn_create.onkeyenter = function () {
  createItem();
};
btn_create.onclick = function () {
  createItem();
};

//! add an item (add it in array + show it in outputs + clear inputs data so i can write another item 
//! without clearing inputs data each time i create an item + store itmes in localStorage)
let createItem = function () {
  if (title.value != "" && price.value && count.value < 100) {
    //! storing product in object
    let new_product = {
      title: title.value,
      price: price.value,
      taxes: taxes.value,
      ads: ads.value,
      discount: discount.value,
      total: total.innerHTML,
      count: count.value,
      category: category.value,
    };

    //! if button on "create" mood -> add object in array[]
    if (mood === "create") {
      if (new_product.count > 1) {
        for (let x = 0; x < new_product.count; x++)
          data_product.push(new_product);
      } else data_product.push(new_product);
    } else {
      data_product[tmp] = new_product;
      mood = "create";
      btn_create.innerHTML = "create";
      count.style.display = "block";
    }

    localStorage.setItem("product", JSON.stringify(data_product));
    showData();
    clearData();

    //! getTotal() -> to make the background red not green
    getTotal();
  } else {
    document.write('hell"');
  }

  //! by me to make it easy to the user
  title.focus();
};

//! calculate the total
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = "green";
  } else {
    total.style.backgroundColor = "red";
  }

  total.style.color = "white";
}

//! clear the value of the inputs after clicking on create
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}

//! show data in the outputs after clicking on create  -> call it in createItem();
//! and after delete an item in the outputs -> call it in deleteItem();
//! and when you reload the page -> call it out of functions;
function showData() {
  let table = "";

  for (let x = 0; x < data_product.length; x++) {
    table += `
            <tr>
                <td>${x + 1}</td>
                <td>${data_product[x].title}</td>
                <td>${data_product[x].price}</td>
                <td>${data_product[x].taxes}</td>
                <td>${data_product[x].ads}</td>
                <td>${data_product[x].discount}</td>
                <td>${data_product[x].category}</td>
                <td><button onkeyenter="updateItem(${x})" onclick="updateItem(${x})"  id="update">update</button></td>
                <td><button onkeyenter="deleteItem(${x})" onclick="deleteItem(${x})"  id="delete">delete</button></td>
            </tr>
            `;
  }
  let div_delete_all = document.getElementById("div_delete_all");

  if (data_product.length > 0) {
    div_delete_all.innerHTML = `
            <button onkeyenter="deleteAllItems()" onclick="deleteAllItems()" id="btn_delete_all">
                Delete All Products(${data_product.length})
            </button>`;
  } else div_delete_all.innerHTML = "";

  document.getElementById("tbody").innerHTML = table;
}

//! delete an item in the outputs
function deleteItem(x) {
  //! splice(start, length);
  data_product.splice(x, 1);
  localStorage.product = JSON.stringify(data_product);
  showData();
}

//! delete all items in the outputs
function deleteAllItems() {
  //! when you wanna delete all items write splice(0);
  data_product.splice(0);
  localStorage.clear();
  showData();
}

//! update item
function updateItem(x) {
  title.value = data_product[x].title;
  price.value = data_product[x].price;
  taxes.value = data_product[x].taxes;
  ads.value = data_product[x].ads;
  discount.value = data_product[x].discount;
  btn_create.innerHTML = "Update";
  count.style.display = "none";
  category.value = data_product[x].category;
  scroll({
    top: 0,
    behavior: "smooth",
  });
  getTotal();
  mood = "update";
  tmp = x;
}

//! search by title and category
let search_mood = "title";

let getSearchMood = function (id) {
  if (id === "title") {
    search_mood = "title";
  } else {
    search_mood = "category";
  }
  search.placeholder = "Search by " + search_mood;
  search.focus();
};

let searchFunction = function (value) {
  let table = "";
  if (search_mood === "title") {
    for (let y = 0; y < data_product.length; y++) {
      if (data_product[y].title.includes(value)) {
        table += `
                    <tr>
                        <td>${y + 1}</td>
                        <td>${data_product[y].title}</td>
                        <td>${data_product[y].price}</td>
                        <td>${data_product[y].taxes}</td>
                        <td>${data_product[y].ads}</td>
                        <td>${data_product[y].discount}</td>
                        <td>${data_product[y].category}</td>
                        <td><button onkeyenter="updateItem(${y})" onclick="updateItem(${y})"  id="update">update</button></td>
                        <td><button onkeyenter="deleteItem(${y})" onclick="deleteItem(${y})"  id="delete">delete</button></td>
                    </tr>
                    `;
      } else if (data_product[y].category.includes(value)) {
        table += `
                    <tr>
                        <td>${y + 1}</td>
                        <td>${data_product[y].title}</td>
                        <td>${data_product[y].price}</td>
                        <td>${data_product[y].taxes}</td>
                        <td>${data_product[y].ads}</td>
                        <td>${data_product[y].discount}</td>
                        <td>${data_product[y].category}</td>
                        <td><button onkeyenter="updateItem(${y})" onclick="updateItem(${y})"  id="update">update</button></td>
                        <td><button onkeyenter="deleteItem(${y})" onclick="deleteItem(${y})"  id="delete">delete</button></td>
                    </tr>
                `;
      } else {
        console.log("i didn't find this by search in categories or titles");
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
};
