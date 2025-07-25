const cart = [];  

function addItem() {
  const itemName = document.getElementById("item").value.trim();
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = parseInt(document.getElementById("price").value);

  if (!itemName || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
    alert("正しい商品名、数量、価格を入力してください。");
    return;
  }

  cart.push({ name: itemName, quantity: quantity, price: price });

  updateCart();

  document.getElementById("item").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
}

function updateCart() {
  const ul = document.getElementById("cartList");
  ul.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name}（${item.quantity}個 × ${item.price}円）＝${item.quantity * item.price}円`;
    li.addEventListener("click", () => {
      cart.splice(index, 1);
      updateCart();
    });
    ul.appendChild(li);
  });

  document.getElementById("summary").textContent =
    `カートに ${cart.length}種類のアイテムがあります。`;
}
