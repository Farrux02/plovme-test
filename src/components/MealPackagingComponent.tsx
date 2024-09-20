import { $order, setPackageOption } from "@/store/orderStore";

interface IWrapper {
  label: string;
  value: 1 | 2;
}

const wrapperOptions: IWrapper[] = [
  {
    label: "В офис",
    value: 1,
  },
  {
    label: "Домой",
    value: 2,
  },
];

const MealPackagingComponent = () => {
  const order = useUnit($order);

  return (
    <div className="max-w-[450px] w-full">
      <p className="text-[#8D8D8D] text-base font-normal">Выберите сет:</p>
      <div className="mt-[10px] h-[55px] bg-purple-main bg-opacity-15 border border-purple-main rounded-full p-[5px] grid grid-cols-2 items-center text-center">
        {wrapperOptions.map((option) => (
          <div
            className={clsx(
              "cursor-pointer  text-purple-main transition-all h-full flex items-center justify-center rounded-full text-[18px] font-normal",
              {
                "!text-white bg-opacity-100 bg-purple-main":
                  order.package === option.value,
              }
            )}
            onClick={() => setPackageOption(option.value)}
            key={option.value}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealPackagingComponent;
