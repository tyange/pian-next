import { BurgersPageData } from "@/pages";
import BurgerItem from "@/components/burger-item";

type BurgerListProps = {
  data: BurgersPageData;
};

const BurgerList = ({ data }: BurgerListProps) => {
  return (
    <div className="flex justify-center w-full">
      <ul className="flex flex-col items-center w-5/12 h-full gap-10">
        {data.Burgers.map((burger, index) => (
          <BurgerItem key={index} burger={burger} />
        ))}
      </ul>
    </div>
  );
};

export default BurgerList;
