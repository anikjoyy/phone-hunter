const allMobiles = () => {
  const searchValue = document.getElementById('search-box').value;

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
  console.log(url);
};
