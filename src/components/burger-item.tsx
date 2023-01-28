import Image from "next/image";
import { Burger } from "@/types/burger";

import defaultBurgerImg from "../../public/burger.png";

type BurgerItemProps = {
  burger: Burger;
};
const BurgerItem = ({ burger }: BurgerItemProps) => {
  return (
    <li className="border-2 border-gray-400 w-96 h-72">
      <div className="flex justify-center p-2">
        <div className="flex flex-col items-center flex-1">
          <div className="flex w-5/6 p-5 border-b-2 border-separate border-gray-300">
            <span className="text-3xl font-extrabold">{burger.Name}</span>
          </div>
          <div className="w-5/6 p-5">
            <span>{burger.Brand}</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-32 rounded-full">
            <Image src={defaultBurgerImg} alt="기본 버거 이미지" />
          </div>
        </div>
      </div>
      <div className="font-serif italic border-t-2 border-gray-400 border-dashed p-7">
        <p>{burger.Description}</p>
      </div>
    </li>
  );
};

export default BurgerItem;
