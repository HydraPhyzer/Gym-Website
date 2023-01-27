import Logo from "../../assets/Logo.png";
import Link from "./Link";
import { SelectedPageENUM } from "./EnumTypes";
import useMediaQueries from "../../Hooks/useMediaQueries";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import ActionButton from "./ActionButton";

export type PropType = {
  IsTopOfPage?:boolean;
  SelectedPage: SelectedPageENUM;
  SetSelectedPage: (Value: SelectedPageENUM) => void;
};

const Navbar = ({ SelectedPage, SetSelectedPage,IsTopOfPage }: PropType) => {
  const [ToggleMenu, SetToggleMenu] = useState<boolean>(false);
  const IsAboveMedium = useMediaQueries("(min-width:1060px)");
  const FlexBetween = "flex items-center justify-between";
  const NavbarBackground=IsTopOfPage ? "" : "bg-primary-100 drop-shadow-md"
  return (
    <nav>
      <div className={`${NavbarBackground} ${FlexBetween} w-full fixed top-0 z-30`}>
        <div className={`${FlexBetween} mx-auto w-5/6 py-1`}>
          <div className={`${FlexBetween} gap-16 w-full py-1`}>
            {/* Left Side */}
            <img src={Logo} alt="Logo" />

            {/* Right Side */}
            {IsAboveMedium ? (
              <div className={`${FlexBetween} w-full`}>
                <div className={`${FlexBetween} gap-8 text-sm`}>
                  <Link
                    Page="Home"
                    SelectedPage={SelectedPage}
                    SetSelectedPage={SetSelectedPage}
                  />
                  <Link
                    Page="Benifits"
                    SelectedPage={SelectedPage}
                    SetSelectedPage={SetSelectedPage}
                  />
                  <Link
                    Page="Our Classes"
                    SelectedPage={SelectedPage}
                    SetSelectedPage={SetSelectedPage}
                  />
                  <Link
                    Page="Contact Us"
                    SelectedPage={SelectedPage}
                    SetSelectedPage={SetSelectedPage}
                  />
                </div>

                <div className={`${FlexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton SetSelectedPage={SetSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="rounded-full p-2 bg-secondary-500"
                  onClick={() => {
                    SetToggleMenu(!ToggleMenu);
                  }}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {ToggleMenu && !IsAboveMedium && (
        <div className="fixed right-0 h-full bottom-0 w-[200px] bg-primary-100 drop-shadow-xl z-40">
          <div className="flex justify-end p-12">
            <button
            className="rounded-full p-2 bg-secondary-500"
              onClick={() => {
                SetToggleMenu(!ToggleMenu);
              }}
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className={`ml-[33%] gap-10 flex flex-col text-md`}>
                  <Link
                    Page="Home"
                    SelectedPage={SelectedPage}
                    SetSelectedPage={SetSelectedPage}
                  />
                  <Link
                    Page="Benifits"
                    SelectedPage={SelectedPage}
                    SetSelectedPage={SetSelectedPage}
                  />
                  <Link
                    Page="Our Classes"
                    SelectedPage={SelectedPage}
                    SetSelectedPage={SetSelectedPage}
                  />
                  <Link
                    Page="Contact Us"
                    SelectedPage={SelectedPage}
                    SetSelectedPage={SetSelectedPage}
                  />
                </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
