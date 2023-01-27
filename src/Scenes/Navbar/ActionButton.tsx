import React, { Children } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPageENUM } from "./EnumTypes";

type Props = {
  children: React.ReactNode;
  SetSelectedPage: (Values: SelectedPageENUM) => void;
};
const ActionButton = ({ children, SetSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-5 py-1 hover:bg-primary-500 hover:text-white"
      onClick={() => {
        SetSelectedPage(SelectedPageENUM.ContactUs);
      }}
      href={`#${SelectedPageENUM.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
