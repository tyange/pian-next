import Image from "next/image";

import { IconUser } from "@tabler/icons-react";
import { IconQuestionMark } from "@tabler/icons-react";
import logoImg from "../../public/red-x-on-pickle.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-center py-10">
      <nav className="grid items-center w-5/12 grid-cols-5">
        <div className="w-20">
          <Image src={logoImg} alt="로고 이미지" />
        </div>
        <div>
          <ul className="flex gap-5"></ul>
        </div>
        <div className="col-span-3 mr-10 justify-self-end">
          <ul className="flex gap-4">
            <li>
              <a href="https://github.com/tyange">
                <IconUser stroke={2} size={30} />
              </a>
            </li>
            <li>
              <Link href="">
                <IconQuestionMark stroke={2} size={30} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
