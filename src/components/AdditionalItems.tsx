import { CircleIcon, SelectedIcon } from "@/assets/svg";
import { drinksList, saladsList } from "@/constants";
import { $drinksCount, $saladsCount } from "@/store/orderGetters";
import {
  $order,
  toggleDrinkSelection,
  toggleSaladSelection,
} from "@/store/orderStore";

const AdditionalItems = () => {
  const [order, saladsCount, drinksCount] = useUnit([
    $order,
    $saladsCount,
    $drinksCount,
  ]);

  return (
    <div>
      <h3 className="text-orange-main text-[25px] font-medium mt-5">
        Дополнительно:
      </h3>
      <div>
        <p className="text-xl text-black font-normal mt-[2px] leading-[27px]">
          Салаты - x{saladsCount}
        </p>
        <div className="grid grid-cols-3 gap-x-[15px] mt-[15px]">
          {saladsList.map((salad) => (
            <div
              key={salad.id}
              className={clsx([
                "bg-[#F3F3F7] shadow-md flex flex-col justify-between items-center p-3 text-center rounded-[15px] border border-[#f3f3f7] max-w-[170px] w-full",
                {
                  "!border-purple-main": order.additional_.salads.has(salad.id),
                },
              ])}
              onClick={() => toggleSaladSelection(salad.id)}
            >
              <span className="justify-self-end self-end">
                {order.additional_.salads.has(salad.id) ? (
                  <SelectedIcon />
                ) : (
                  <CircleIcon />
                )}
              </span>
              <div>
                <img src={salad.img} alt="" />
              </div>
              <p className=" text-black text-[20px] font-normal leading-5 mt-[13px]">
                {salad.name}
              </p>
              <p className="mt-[10px] font-light text-lg text-[#616161] leading-5">
                {salad.weigh} гр
              </p>
              <p className="mt-[10px] font-normal text-lg text-[#111111] leading-5">
                {salad.quantity} шт
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xl text-black font-normal mt-[10px]">
          Напитки - x{drinksCount}
        </p>
        <div className="grid grid-cols-3 gap-x-[15px] mt-[15px]">
          {drinksList.map((drink) => (
            <div
              key={drink.id}
              className={clsx([
                "bg-[#F3F3F7] shadow-md flex flex-col justify-between items-center p-3 text-center rounded-[15px] border border-[#f3f3f7] max-w-[170px] w-full",
                {
                  "!border-purple-main": order.additional_.drinks.has(drink.id),
                },
              ])}
              onClick={() => toggleDrinkSelection(drink.id)}
            >
              <span className="justify-self-end self-end">
                {order.additional_.drinks.has(drink.id) ? (
                  <SelectedIcon />
                ) : (
                  <CircleIcon />
                )}
              </span>
              <div>
                <img src={drink.img} alt="" />
              </div>
              <p className="mt-[15px] text-black text-[20px] font-normal leading-5">
                {drink.name}
              </p>
              <p className="mt-[16px] font-light text-lg text-[#616161] leading-5">
                {drink.weigh} гр
              </p>
              <p className="mt-[10px] font-normal text-lg text-[#111111] leading-5">
                {drink.quantity} шт
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalItems;
