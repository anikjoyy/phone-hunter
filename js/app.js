/* ---------------------------------------
arrow function for all phones from API
------------------------------------------- */
const allPhones = () => {
  // clearing value after showing the result
  document.getElementById('search-phones').innerHTML = '';
  document.getElementById('singlePhoneDetails').innerHTML = '';

  // search button works
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
  //error checking for no result found
  if (phones.length == 0) {
    window.alert('No Mobile Founds!');
    return;
  }

  for (const data of phones) {
    const searchPhone = document.getElementById('search-phones');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `<div class="card h-100">
                        <img class="w-50" src="${data.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${data.phone_name}</h5>
                            <p class="card-text">Brand: ${data.brand}</p>
                        </div>
                        <div class="card-footer">
                            <button onclick="phoneDetails('${data.slug}')" class="btn btn-success">Details</button>
                        </div>
                    </div>`;
    searchPhone.appendChild(div);
  }
};

/* -------------------------------------------------------
arrow function for showing phone details using slug
----------------------------------------------------------- */
const phoneDetails = (slug) => {
  // console.log(slug);
  const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayPhoneFeatures(data.data));
};

/* -----------------------------------------------
arrow function to show full features of a phone
----------------------------------------------------- */
const displayPhoneFeatures = (data) => {
  document.getElementById('singlePhoneDetails').innerHTML = '';
  const singlePhoneDetails = document.getElementById('singlePhoneDetails');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `<img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fw-bold">Name: ${data.name}</h5>
                    <p class="card-text">Release Date: ${data.releaseDate}</p>

                    <p class="card-text">Sensors: ${data.mainFeatures.sensors}</p>

                    <p class="card-text">WLAN: ${data.others.WLAN}</p>
                    <p class="card-text">Bluetooth: ${data.others.Bluetooth}</p>
                    <p class="card-text">GPS: ${data.others.GPS}</p>
                    <p class="card-text">NFC: ${data.others.NFC}</p>
                    <p class="card-text">Radio: ${data.others.Radio}</p>
                    <p class="card-text">USB: ${data.others.USB}</p>
                </div>`;
  singlePhoneDetails.appendChild(div);
};
