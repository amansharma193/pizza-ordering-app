export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "./img/cheese_pizza.jpg",
    section: "Pizza",
    price: 1,
  },
  {
    name: "Roll Sandwich",
    img: "./img/roll_sandwich.jpg",
    section: "Others",
    price: 1,
  },
  {
    name: "Burger",
    img: "./img/burger.jpg",
    section: "Others",
    price: 1,
  },
  {
    name: "Pizza Combo Meal",
    img: "./img/banner.jpg",
    section: "Pizza",
    price: 1,
  },
  {
    name: "BreakFast Crasher",
    img: "./img/chinese_seasoning.jpg",
    section: "Others",
    price: 1,
  },
  {
    name: "2 in 1 combo",
    img: "./img/combo_pizza.jpg",
    section: "Pizza",
    price: 1,
  },
  {
    name: "Grilled Sandwich",
    img: "./img/grilled_sandwich.jpg",
    section: "Others",
    price: 1,
  },
  {
    name: "Hot Dog",
    img: "./img/hot_dog.jpg",
    section: "Others",
    price: 1,
  },
  {
    name: "Noodles",
    img: "./img/Noodles.jpg",
    section: "Others",
    price: 1,
  },
  {
    name: "Pan Pizza",
    img: "./img/pan_pizza.jpg",
    section: "Pizza",
    price: 1,
  },
];
export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
