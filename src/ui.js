const ui = {
  clearTable: function() {
    let tableBody = document.querySelector('#products-wrapper');
    tableBody.innerHTML = '';
  },

  productToRow: function(product, category) {
    let matchCategory;
    if (product.category === category) {
      let card = document.createElement('div');
      card.setAttribute('class', 'card');
      let product_img_wrapper = document.createElement('div');
      product_img_wrapper.setAttribute('class', 'product-img-wrapper');
      let product_img = document.createElement('img');
      product_img.setAttribute('src', `${product.imageUrl}`);
      product_img.setAttribute('class', 'product-img');
      product_img_wrapper.appendChild(product_img);
      let product_title = document.createElement('div');
      product_title.setAttribute('class', 'product-title');
      let h2 = document.createElement('h2');
      h2.innerHTML = product.name;
      product_title.appendChild(h2);
      let product_description = document.createElement('div');
      product_description.setAttribute('class', 'product-description');
      let p = document.createElement('p');
      p.innerHTML = product.description;
      product_description.appendChild(p);
      let product_price = document.createElement('div');
      product_price.setAttribute('class', 'product-price');
      let h3 = document.createElement('h3');
      h3.innerHTML = 'Price: ' + product.price + ' $';
      product_price.appendChild(h3);

      card.appendChild(product_img_wrapper);
      card.appendChild(product_title);
      card.appendChild(product_description);
      card.appendChild(product_price);
      matchCategory = card;
    } else {
      matchCategory = false;
    }
    return matchCategory;
  },

  productsToTable: function(products, category) {
    ui.clearTable();
    let row = [];
    let table = document.querySelector('#products-wrapper');
    for (let i = 0; i < products.length; i++) {
      row[i] = ui.productToRow(products[i], category);
      if (row[i] !== false) {
        table.appendChild(row[i]);
      }
    }
  }
};
