import { Burger } from "@/types/burger";

type BurgerItemProps = {
  burger: Burger;
};
const BurgerItem = ({ burger }: BurgerItemProps) => {
  return (
    <li className="h-72 border rounded-lg shadow-md">
      <div className="">
        <div>
          <span>버거 이름:</span>
          <span>{burger.Name}</span>
        </div>
        <div>
          <span>버거 브랜드:</span>
          <span>{burger.Brand}</span>
        </div>
      </div>
      <div className="">
        <span>이 버거의 함의:</span>
        <p>{burger.Description}</p>
      </div>
    </li>
  );
};

export default BurgerItem;
