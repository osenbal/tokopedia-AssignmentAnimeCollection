/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC } from "react";
import { mq } from "@/Presentations/constant/breakpoint";
import { usePagination } from "@/Domain/hooks/usePanigation";

const paginationCss = {
  self: css({
    listStyleType: "none",
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    justifyContent: "center",
    [mq[0]]: {
      justifyContent: "flex-start",
    },
  }),
  btnPagination: css({
    border: "none",
    outline: "none",
    backgroundColor: "var(--color-orange)",
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    transition: "all 0.3s ease-in-out",
  }),
  btnActive: css({
    border: "1px solid #DFE3E8",
  }),
  btnPaginationNumber: css({
    border: "none",
    outline: "none",
    backgroundColor: "var(--color-white)",
    width: "32px",
    height: "32px",
    borderRadius: "4px",
    color: "var(--color-black)",
    transition: "all 0.3s ease-in-out",
  }),
  paginationActive: css({
    color: "var(--color-teal)",
    border: "1px solid var(--color-teal)",
  }),
};

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
};

const Pagination: FC<PaginationProps> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul css={paginationCss.self} className={className}>
      <li>
        <button
          css={paginationCss.btnPagination}
          disabled={currentPage === 1}
          onClick={onPrevious}
        >
          Previous
        </button>
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === "...")
          return (
            <li key={index}>
              <button css={paginationCss.btnPaginationNumber}>...</button>
            </li>
          );
        return (
          <li key={index}>
            <button
              css={[
                paginationCss.btnPaginationNumber,
                currentPage === pageNumber
                  ? paginationCss.paginationActive
                  : null,
              ]}
              onClick={() => onPageChange(Number(pageNumber))}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}
      <li>
        <button
          className="btn_active"
          css={[
            paginationCss.btnPagination,
            lastPage !== currentPage ? paginationCss.btnActive : null,
          ]}
          disabled={lastPage === currentPage}
          onClick={onNext}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
