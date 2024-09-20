import { drinksList, saladsList } from "@/constants";
import { $order } from "./orderStore";

const setPrices: Record<number, number> = {
  1: 100000,
  2: 150000,
  3: 200000,
};

const mainMealPricePerUnit = 30000;
const mainMealQuantity = 5;

export const $totalCost = $order.map((state) => {
  let total = 0;

  total += mainMealQuantity * mainMealPricePerUnit;

  const setPrice = setPrices[state.set] || 0;
  total += setPrice;

  const saladsCost = Array.from(state.additional_.salads).reduce((sum, id) => {
    const salad = saladsList.find((item) => item.id === id);
    return sum + (salad ? salad.price : 0);
  }, 0);
  total += saladsCost;

  const drinksCost = Array.from(state.additional_.drinks).reduce((sum, id) => {
    const drink = drinksList.find((item) => item.id === id);
    return sum + (drink ? drink.price : 0);
  }, 0);
  total += drinksCost;

  return total;
});
