function renderFood() {
    document.getElementById("image").innerHTML = "";
    document.getElementById("food-list").innerHTML = "";
    async function getFood() {
      try {
        let res = await fetch("https://foodish-api.herokuapp.com/api/");
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    }
  
  async function renderFoodImages() {
      let food = await getFood();
      console.log(food);
      document.getElementById("image").innerHTML = `
      <img class="foodImage" alt="foodImage" src="${food.image}"/>
      `
      document.getElementById("food-list").innerHTML = `
      
      <ul class="ul-list">
      <li><a href="https://foodish-api.herokuapp.com/images/biryani/" target="_blank">Biriyani </a> : 81</li>
      <li><a href="https://foodish-api.herokuapp.com/images/burger/" target="_blank">Burger </a> : 87</li>
      <li><a href="https://foodish-api.herokuapp.com/images/butter-chicken/" target="_blank">Butter-chicken </a> : 22</li>
     <li><a href="https://foodish-api.herokuapp.com/images/dessert/" target="_blank">Dessert </a> : 36</li>
     <li><a href="https://foodish-api.herokuapp.com/images/dosa/" target="_blank">Dosa </a> : 83</li>
     <li><a href="https://foodish-api.herokuapp.com/images/idly/" target="_blank">Idly </a> : 77</li>
     <li><a href="https://foodish-api.herokuapp.com/images/pasta/" target="_blank">Pasta </a> : 34</li>
     <li><a href="https://foodish-api.herokuapp.com/images/pizza/" target="_blank">Pizza </a> : 95</li>
     <li><a href="https://foodish-api.herokuapp.com/images/rice/" target="_blank">Rice </a> : 35</li>
     <li><a href="https://foodish-api.herokuapp.com/images/samosa/" target="_blank">Samosa </a> : 22</li>
     <li>Total Foodishes : 572</li>
     </ul>
     <label class="foodLabel ">Share this Foodish :</label>
     <input type="text" class="text" value="${food.image}"/>
      `

    }

    renderFoodImages()
}