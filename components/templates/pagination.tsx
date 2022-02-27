// import Button from "Components/atoms/pagination-button";
import { useState, useEffect } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
interface IPagination {
  maxPage: number;
  page: number;
  setPage(page: number): void;
  perPage:number
  setPerPage(perPage:number):void
}

const Pagination = (props: IPagination) => {
  const perPageConstant = [20,40,80]
  const onChangePage = (type:'next'|'prev')=>{
    switch (type){
      case 'next':
        if(props.page+1 <= props.maxPage) props.setPage(props.page+1)
        break;
      case 'prev':
        if(props.page-1>0)props.setPage(props.page-1)
        break
    }
  }

  return (
    <div className="flex justify-between mt-8 mb-16">
      <div className="space-x-4 flex items-center">
        <div className="text-xs md:text-base">
          Product Per-page :
        </div>
        <div className="space-x-2 flex cursor-pointer">
          {perPageConstant.map((numOfItem, i)=>{
            return(
              <div 
              key={i} 
              onClick={()=>props.setPerPage(numOfItem)}
              className={`rounded  p-1 md:p-2 text-xs md:text-base ${props.perPage==numOfItem?"bg-gray-300":"bg-gray-200"}`}>
                {numOfItem}
              </div>
            )
          })}
        </div>
      </div>

     <div className="flex space-x-2">
       <div 
          className={`rounded-full bg-gray-200 w-7 
          md:w-10 h-7 md:h-10 flex items-center
          ${props.page==1?'text-gray-500 cursor-not-allowed':''}
          `}
          onClick={()=>onChangePage('prev')}>
            <FaAngleLeft className="w-full" />
        </div>

        <div 
          className={`rounded-full bg-gray-200 w-7 
          md:w-10 h-7 md:h-10 flex items-center
          ${props.page==props.maxPage?'text-gray-500 cursor-not-allowed':''}
          `}
          onClick={()=>onChangePage('next')}>
            <FaAngleRight className="w-full" />
        </div>
     </div>
    </div>
  );
};
export default Pagination;
