/* eslint-disable no-undef */
window.onload = function() {
  let home = document.querySelector('.home');
  let main_box = document.querySelector('#main-box');
  let products_box = document.querySelector('#products-box');

  home.onclick = function() {
    document.querySelector('.site-footer').style.backgroundColor = 'black';
    products_box.style.display = 'none';
    main_box.style.display = 'block';
  };
  let sports = document.querySelector('.sports');
  sports.onclick = function() {
    document.querySelector('.site-footer').style.backgroundColor = '#f2aa4cff';
    products_box.style.display = 'block';
    main_box.style.display = 'none';
    ui.productsToTable(productsData, 'sports');
  };
  let luxury = document.querySelector('.luxury');
  luxury.onclick = function() {
    document.querySelector('.site-footer').style.backgroundColor = '#f2aa4cff';
    products_box.style.display = 'block';
    main_box.style.display = 'none';
    ui.productsToTable(productsData, 'luxury');
  };
};
