import Link from "next/link";

import { PageData } from "@/types/burger";

import {
  IconSquareRoundedChevronLeft,
  IconSquareRoundedChevronRight,
} from "@tabler/icons-react";

type PaginatorProps = {
  pageData: PageData;
};

const Paginator = ({ pageData }: PaginatorProps) => {
  return (
    <div className="flex items-center justify-center w-full gap-5 p-10">
      <button>
        <Link href={`/${pageData.PreviousPage}`}>
          <IconSquareRoundedChevronLeft />
        </Link>
      </button>
      {Array.from(Array(pageData.TotalPages + 1).keys()).map((page) => (
        <button key={page}>
          <Link href={`/${page + 1}`}>{page + 1}</Link>
        </button>
      ))}
      <button>
        <Link href={`/${pageData.NextPage}`}>
          <IconSquareRoundedChevronRight />
        </Link>
      </button>
    </div>
  );
};

export default Paginator;
