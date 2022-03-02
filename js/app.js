/* ---------------------------------------
arrow function for all phones from API
------------------------------------------- */
const allPhones = () => {
  const searchText = document.getElementById('search-box').value;

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  //console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => showPhoneDetails(data.data));
};

/* ----------------------------------------------------
arrow function for phone details
--------------------------------------------------------- */
const showPhoneDetails = (phones) => {
  //console.log(phones);
  for (const data of phones) {
    const searchPhone = document.getElementById('search-phones');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `<div class="card h-100">
                        <img class="w-50" src="${data.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.phone_name}</h5>
                            <p class="card-text">${data.brand}</p>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-success">Details</button>
                        </div>
                    </div>`;
    searchPhone.appendChild(div);
  }
};
