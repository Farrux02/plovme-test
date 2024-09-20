import { $order } from "./orderStore";

const mainMealQuantity = 5;

export const $saladsCount = $order.map(
  (state) => state.additional_.salads.size * mainMealQuantity
);
export const $drinksCount = $order.map(
  (state) => state.additional_.drinks.size * mainMealQuantity
);
