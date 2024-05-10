import api from "../api.json?raw";

async function getProducts() {
  if (process.env.NODE_ENV === "development") {
    return JSON.parse(api);
  } else {
    const response = await fetch(
      "https://learnwitheunjae.dev/api/sinabro-js/ecommerce"
    );
    return await response.json();
  }
}

async function main() {
  const products = await getProducts();
  console.log("테스트 products", products);
  document.querySelector("#products").innerHTML = products
    .map(
      (product) =>
        `<div class= "product">
      <img src="${product.images[0]}" alt="Image of ${product.name}"/>
    <p>${product.name}</p>
    <div class="flex items-center justify-between">
    <span> Price: ${product.regularPrice}</span>
    <div>
    <button Type="button" class= "bg-green-200 hover:bg-green-300 text-green-800 py-1 px-3 rounded-full" >-</button>
    <span class="hidden text-green-800">3</span>
    <button Type="button" class= "bg-green-200 hover:bg-green-300 text-green-800 py-1 px-3 rounded-full"  >+</button>
    </div>
   </div>
   </div>`
    )
    .join("");
}

main();
