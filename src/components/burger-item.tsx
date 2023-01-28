import { Burger } from "@/types/burger";

type BurgerItemProps = {
  burger: Burger;
};
const BurgerItem = ({ burger }: BurgerItemProps) => {
  return (
    <li className="border-2 border-gray-400 h-72">
      <div className="flex flex-col items-center">
        <div className="flex justify-center w-5/6 p-5 border-b-2 border-gray-400 border-dashed">
          <span className="text-3xl font-extrabold">{burger.Name}</span>
        </div>
        <div className="p-5">
          <span>{burger.Brand}</span>
        </div>
      </div>
      <div className="p-5 font-serif italic">
        <p>{burger.Description}</p>
      </div>
    </li>
  );
};

export default BurgerItem;
