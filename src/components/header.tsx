import Image from "next/image";

import logoImg from "../../public/red-x-on-pickle.png";

const Header = () => {
  return (
    <header className="flex justify-center py-10">
      <nav className="w-9/12 grid grid-cols-5 items-center">
        <div className="w-20">
          <Image src={logoImg} alt="로고 이미지" />
        </div>
        <div>
          <ul className="flex gap-5">
            <li>공지</li>
            <li>버거들</li>
          </ul>
        </div>
        <div className="col-span-3 justify-self-end mr-10">
          <ul className="flex gap-3">
            <li>github</li>
            <li>QM</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
