import React from "react";
import { SelectedPageENUM } from "../Navbar/EnumTypes";

type PropType = {
  Icon: JSX.Element;
  Title: string;
  Desc: string;
};
const EachBenifit = ({ Icon, Title, Desc }: PropType) => {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 p-5 text-sm text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-2">
          {Icon}
        </div>
      </div>
      <h4 className="font-bold">{Title}</h4>
      <p className="my-3">{Desc}</p>
    </div>
  );
};

export default EachBenifit;
