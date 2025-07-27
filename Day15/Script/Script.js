const recipes = [
  {
    name: "Best Pizza Dough Ever",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    source: "101 Cookbooks"
  },
  {
    name: "Deep Dish Fruit Pizza",
    img: "https://www.girlversusdough.com/wp-content/uploads/2021/04/fruit-pizza-1.jpg",
    source: "The Pioneer Woman"
  },
  {
    name: "Cauliflower Pizza Crust (with BBQ Chicken Pizza)",
    img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=400&q=80",
    source: "Closet Cooking"
  },
  {
    name: "Pizza Dip",
    img: "https://theblondcook.com/wp-content/uploads/2021/08/easy-pizza-dip-2-1-1024x1536.jpg",
    source: "Closet Cooking"
  },
  {
    name: "Pizza Quesadillas (aka Pizzadillas)",
    img: "https://theblondcook.com/wp-content/uploads/2021/08/easy-pizza-dip-2-1-1024x1536.jpg",
    source: "Closet Cooking"
  },
  {
    name: "Sweet Potato Kale Pizza with Rosemary & Red Onion",
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&q=80",
    source: "Two Peas and Their Pod"
  },
  {
    name: "Pizza Dip",
    img: "https://www.mybakingaddiction.com/wp-content/uploads/2011/02/baked-pizza-dip-700x1050.jpg",
    source: "My Baking Addiction"
  },
  {
    name: "Pizza Potato Skins",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    source: "The Pioneer Woman"
  },
  {
    name: "No-Knead Pizza Dough",
    img: "https://www.mangiabedda.com/wp-content/uploads/2021/01/IMG_1344-2-scaled.jpg",
    source: "Bon Appétit"
  },
  {
    name: "Homemade Pizza",
    img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=400&q=80",
    source: "Simply Recipes"
  },
  {
    name: "Taco Quesadilla Pizzas",
    img: "https://www.closetcooking.com/wp-content/uploads/2012/08/TacoQuesadillaPizza5004417.jpg",
    source: "Closet Cooking"
  },
  {
    name: "Jay's Signature Pizza Crust",
    img: "https://i.pinimg.com/736x/6d/12/22/6d1222f034d45c2ebfed5809628ea986.jpg",
    source: "All Recipes"
  }
];
const grid = document.getElementById("recipesGrid");
const searchInput = document.getElementById("searchInput");

function renderGrid(items) {
  grid.innerHTML = "";
  items.forEach(recipe => {
    grid.innerHTML += `
      <div class="card">
        <img src="${recipe.img}" alt="${recipe.name}">
        <div class="card-title">${recipe.name}</div>
        <div class="card-source">${recipe.source}</div>
      </div>
    `;
  });
}

searchInput.addEventListener("input", () => {
  const val = searchInput.value.toLowerCase();
  const filtered = recipes.filter(
    rec =>
      rec.name.toLowerCase().includes(val) ||
      rec.source.toLowerCase().includes(val)
  );
  renderGrid(filtered);
});

// Initial load
renderGrid(recipes);
