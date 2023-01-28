import BurgerItem from "@/components/burger-item";
import { Burger } from "@/types/burger";

type BurgerListProps = {
  data: Burger[];
};

const BurgerList = ({ data }: BurgerListProps) => {
  return (
    <div className="flex justify-center w-full">
      <ul className="flex flex-col items-center w-5/12 h-full gap-10">
        {data.map((burger, index) => (
          <BurgerItem key={index} burger={burger} />
        ))}
      </ul>
    </div>
  );
};

export default BurgerList;
