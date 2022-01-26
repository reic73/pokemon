import Button from "Components/atoms/pagination-button";
import { useState, useEffect } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

interface IPagination {
  maxPage: number;
  page: number;
  setPage(page: number): void;
}

const Pagination = (props: IPagination) => {
  const maxPage = props.maxPage;
  const [selected, setSelected] = useState(props.page);
  const [range, setRange] = useState([1, 2, 3]);
  const [buttonRange, setButtonRange] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setSelected(props.page);
  }, [props.page]);

  useEffect(() => {
    const temp: JSX.Element[] = [];
    range.map((value: number) => {
      temp.push(
        <Button
          key={value}
          onClick={() => setSelected(value)}
          selected={value === selected}
          disabled={value > maxPage}
        >
          {value.toString()}
        </Button>
      );
    });
    setButtonRange(temp);
  }, [range, maxPage]);

  useEffect(() => {
    const limiter = [-3, -2, -1, 1, 2, 3];
    const tempRange = [];
    let lowest = selected - 3 < 1 ? 1 : selected - 3;
    let highest = selected + 3 > maxPage ? maxPage : selected + 3;

    limiter.map((value: number) => {
      const checkedNumber = selected + value;
      if (checkedNumber < 1) {
        highest++;
      }

      if (checkedNumber > maxPage && lowest > 1) {
        lowest--;
      }
    });

    for (let i = lowest; i <= highest; i++) {
      tempRange.push(i);
    }
    setRange(tempRange);
    props.setPage(selected);
  }, [selected]);

  return (
    <div className="flex justify-center mt-8 mb-16">
      <Button disabled={selected === 1} onClick={() => setSelected(1)}>
        <FaAngleDoubleLeft className="w-full" />
      </Button>
      <Button
        disabled={selected === 1}
        onClick={() => setSelected(selected - 1)}
      >
        <FaAngleLeft className="w-full" />
      </Button>
      {range.includes(1) ? <div /> : <Button>{"..."}</Button>}
      {buttonRange}
      {range.includes(maxPage) || maxPage === 0 ? (
        <div />
      ) : (
        <Button>{"..."}</Button>
      )}
      <Button
        disabled={selected === maxPage || maxPage === 0}
        onClick={() => setSelected(selected + 1)}
      >
        <FaAngleRight className="w-full" />
      </Button>
      <Button
        disabled={selected === maxPage || maxPage === 0}
        onClick={() => setSelected(maxPage)}
      >
        <FaAngleDoubleRight className="w-full" />
      </Button>
    </div>
  );
};
export default Pagination;
