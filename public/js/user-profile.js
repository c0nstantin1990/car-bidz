const { response, request } = require("express");
const { Cars } = require("../../models");

async function newData() {
    try {
        const response = await fetch('./models/cars');
        const jsonRes = await response.json(data);
        return (jsonRes);
    } catch (err) {
        alert('No created items available for bid....');
}
};

//make a new item for bid
const newFormHandler = async (event) => {
    event.preventDefault();
    

  const price = document.querySelector('#item-price').value.trim();
  const make = document.querySelector('#car-make').value.trim();
  const model = document.querySelector('#car-model').value.trim();
  const year = document.querySelector('#car-year').value.trim();

  if (price && make && model && year) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      //routes expect to be THE SAME
      body: JSON.stringify({ price, make, model, year }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
        document.location.create('/profile');
    } else {
        alert('Failed to list item!😞 Please, try again later.');
    }
}
};

//populate already created items for bid
request = async (data) => {
//pull from created items to show list
const carData = {
    method: 'GET',
    headers: {
        "Content-Type": 'application/json',
    },
    cache: 'default'
};

//or try catch here?? instead of fetch

fetch('/', carData)
.then(function(res) {
    return res.content();
})
.then(function(content){
    const carObject = Cars.createObject(content);
    listedCar = carObject;
})
}

//delete button ability
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete item! Item is still available for bid.');
    }
  }
};

document
  .querySelector('.new-item-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.item-list')
  .addEventListener('click', delButtonHandler);