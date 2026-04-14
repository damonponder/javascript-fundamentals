const products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Mouse", price: 25, inStock: true },
  { id: 3, name: "Keyboard", price: 75, inStock: false },
  { id: 4, name: "Monitor", price: 200, inStock: true },
  { id: 5, name: "USB Cable", price: 10, inStock: true }
];

function getAffordableInStock(products) {
    return products
    .filter((product) => product.price < 100 && product.inStock === true)
    .map((product) => product.name);
}