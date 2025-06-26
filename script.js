// Sample data for 100 products (you can replace this with your actual product data)
const products = [
    { name: 'Engine Oil', size: '5L 15-40W', cost: '₹1350', company: 'Veedol', suitableFor: 'Trucks , Max ', images: ['Sprint 15-40W 5L.jpg'] },
    { name: 'Spares 2', size: 'Large', cost: '₹700', company: 'Company B', suitableFor: 'Vehicle B', images: ['Pump Set Oil-40.jpg'] },
    { name: 'Spares 2', size: 'Large', cost: '₹700', company: 'Company B', suitableFor: 'Vehicle B', images: ['Heavy Duty gear Oil-90.jpg'] },
    { name: 'Spares 2', size: 'Large', cost: '₹700', company: 'Company B', suitableFor: 'Vehicle B', images: ['Hydralic Oil 20-30 80W.jpg'] },
    { name: 'Spares 2', size: 'Large', cost: '₹700', company: 'Company B', suitableFor: 'Vehicle B', images: ['Pump Set Oil-40.jpg'] },

];

// Function to populate the homepage with product images Sand names
function loadProducts() {
    const productContainer = document.querySelector('.product-container');
    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}" onclick="showProductDetails(${index})">
            <p>${product.name}</p>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Function to display product details in a modal
function showProductDetails(index) {
    const product = products[index];
    const modal = document.getElementById('productModal');
    const productDetails = document.getElementById('productDetails');

    productDetails.innerHTML = `
    <div class="product-images">
            ${product.images.map(image => `<img src="${image}" alt="${product.name}" class="product-detail-img">`).join('')}
        </div>
        <div class="inner">
        <h2>${product.name}</h2>
        <p><strong>Size:</strong> ${product.size}</p>
        <p><strong>Cost:</strong> ${product.cost}</p>
        <p><strong>Company:</strong> ${product.company}</p>
        <p><strong>Suitable for:</strong> ${product.suitableFor}</p>
        </div>
    `;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

// Load products when the page is ready
window.onload = loadProducts;

let drop= document.querySelector('.dropdown-content');


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }