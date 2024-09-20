import { $order, setSetType } from "@/store/orderStore";

interface IOption {
  value: 1 | 2 | 3;
  label: string;
}

const setOptions: IOption[] = [
  { value: 1, label: "Обычный" },
  { value: 2, label: "Special" },
  { value: 3, label: "Super special" },
];

const SetComponent = () => {
  const order = useUnit($order);

  return (
    <div className="max-w-[450px] w-full">
      <p className="text-[#8D8D8D] text-base font-normal">Выберите сет:</p>
      <div className="mt-[10px] h-[55px] bg-[#F3F3F7] rounded-full p-[5px] grid grid-cols-3 items-center text-center">
        {setOptions.map((option) => (
          <div
            className={clsx(
              "cursor-pointer transition-all h-full flex items-center justify-center rounded-full text-[18px] font-normal text-[#757575A6] text-opacity-65",
              {
                "bg-white text-orange-main text-opacity-100":
                  order.set === option.value,
              }
            )}
            onClick={() => setSetType(option.value)}
            key={option.value}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetComponent;
