import { PageData } from "@/types/burger";
import Link from "next/link";

type PaginatorProps = {
  pageData: PageData;
};

const Paginator = ({ pageData }: PaginatorProps) => {
  return (
    <div>
      <Link href={`/${pageData.PreviousPage}`}>Prev</Link>
      {Array.from(Array(pageData.TotalPages).keys()).map((page) => (
        <Link key={page} href={`/${page}`}>
          {page + 1}
        </Link>
      ))}
      <Link href={`/${pageData.NextPage}`}>Next</Link>
    </div>
  );
};

export default Paginator;
