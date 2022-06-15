fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .then((completeData) => {
    // console.log(completeData[7].image);
    let data1 = "";
    completeData.map((values) => {
      data1 += `
      <div class="card">
        <h1 class="title">${values.title}</h1>
        <img
          src=${values.image}
          alt=${values.image}
        />
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">$${values.price}</p>
      </div>
    `;
    });

    document.getElementById("cards").innerHTML = data1;
  })
  .catch((error) => {
    console.log(error);
  });
