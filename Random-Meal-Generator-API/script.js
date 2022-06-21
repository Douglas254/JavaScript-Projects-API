// API
const baseUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
const getMealBtn = document.getElementById("get__meal");
const mealContainer = document.getElementById("meal");

getMealBtn.addEventListener("click", () => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((jsonData) => {
      console.log(jsonData);
      createMeal(jsonData.meals[0]);
    })
    .catch((error) => {
      throw error;
    });
});

const createMeal = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  mealContainer.innerHTML = `
  <div class="container">
    <div class="row">
    <div class="col-5">
    <img src="${meal.strMealThumb}" alt="meal image" id="img"/>
    <p><strong>Category:  </strong>${meal.strCategory}</P>
    <p><strong>Area:  </strong>${meal.strArea}</P>
    <p><strong>Tags:  </strong>${meal.strTags.split(",").join(", ")}</P>

   
    </div>
    <div class="col-7">
    <h4>${meal.strMeal}</h4>
    <p>${meal.strInstructions}</p>

     <h5>Ingredients</h5>
    <ul>
    ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
    </ul>
    </div>
    </div>

    <div class="row">
    <h5>Video Recipe</h5>
    <div class="videoWrapper">
    <iframe src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}"/>
    </div>
    </div>

    `;
};
