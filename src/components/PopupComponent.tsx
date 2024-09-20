import { InfoIcon, XIcon } from "../assets/svg";
import { SimplePlov, SpecailPlove, SuperSpecailPlove } from "../assets/image";
import MealSetComponent from "./MealSetComponent";
import MealPackagingComponent from "./MealPackagingComponent";
import { $order, addToCart } from "@/store/orderStore";
import MealDescriptionComponent from "./MealDescriptionComponent";
import AdditionalItems from "./AdditionalItems";
import { $totalCost } from "@/store/totalPriceStore";
import useNumberFormatter from "@/hooks/useNumberFormatter";

const plovImg: Record<number, string> = {
  1: SimplePlov,
  2: SpecailPlove,
  3: SuperSpecailPlove,
};

const PopupComponent = () => {
  const [order, totalCost] = useUnit([$order, $totalCost]);

  return (
    <div className="max-w-[1315px] w-full flex gap-x-5 max-h-[900px]">
      <div className="bg-white w-full h-full rounded-[20px] pl-[100px] pt-[60px] pr-[60px] pb-[31px] grid grid-cols-2 relative max-xl:pl-[60px] max-lg:px-[30px] max-xl:gap-x-4">
        <div>
          <h3 className="flex items-center gap-x-[12.5px] font-medium text-[25px] text-[#373737]">
            <span>
              <InfoIcon className="w-[30px] h-[30px]" />
            </span>
            Заказ включает в себя 5 порций
          </h3>
          <div className="mt-10">
            <img
              src={plovImg[order.set]}
              className="w-[478px] h-[480px] object-contain"
              alt=""
            />
          </div>
          <div className="mt-[44px]">
            <MealSetComponent />
          </div>
          <div className="mt-5">
            <MealPackagingComponent />
          </div>
        </div>
        <div className="relative">
          <MealDescriptionComponent />
          <AdditionalItems />
          <button
            type="button"
            onClick={() => addToCart()}
            className="absolute right-0 bottom-2 w-full cursor-pointer bg-purple-main text-[25px] text-white font-medium rounded-[20px] h-[60px] shadow-lg"
          >
            В корзину {useNumberFormatter(totalCost)} Сум
          </button>
        </div>
      </div>
      <div className="bg-transparent">
        <button className="w-[50px] h-[50px]">
          <XIcon className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default PopupComponent;
