import { createEvent, createStore } from "effector";

export const setSetType = createEvent<number>();
export const setPackageOption = createEvent<number>();
export const toggleSaladSelection = createEvent<number>();
export const toggleDrinkSelection = createEvent<number>();

const initialOrderState = {
  id: 100,
  set: 1,
  package: 1,
  additional_: {
    salads: new Set<number>(),
    drinks: new Set<number>(),
  },
};

export const $order = createStore(initialOrderState)
  .on(setSetType, (state, setType) => ({
    ...state,
    set: setType,
  }))
  .on(setPackageOption, (state, packageOption) => ({
    ...state,
    package: packageOption,
  }))
  .on(toggleSaladSelection, (state, saladId) => {
    const newSalads = new Set(state.additional_.salads);
    if (newSalads.has(saladId)) {
      newSalads.delete(saladId);
    } else {
      newSalads.add(saladId);
    }
    return {
      ...state,
      additional_: {
        ...state.additional_,
        salads: newSalads,
      },
    };
  })
  .on(toggleDrinkSelection, (state, drinkId) => {
    const newDrinks = new Set(state.additional_.drinks);
    if (newDrinks.has(drinkId)) {
      newDrinks.delete(drinkId);
    } else {
      newDrinks.add(drinkId);
    }
    return {
      ...state,
      additional_: {
        ...state.additional_,
        drinks: newDrinks,
      },
    };
  });

export const addToCart = createEvent();

addToCart.watch(() => {
  const orderState = $order.getState();
  const outputJSON = {
    order: {
      id: orderState.id,
      set: orderState.set,
      package: orderState.package,
      additional_: {
        salads: Array.from(orderState.additional_.salads),
        drinks: Array.from(orderState.additional_.drinks),
      },
    },
  };

  console.log(JSON.stringify(outputJSON, null, 2));
});
