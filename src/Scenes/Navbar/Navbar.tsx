import Logo from "../../assets/Logo.png";
import Link from "./Link";
import { SelectedPageENUM } from "./EnumTypes";

export type PropType={
  SelectedPage:SelectedPageENUM,
  SetSelectedPage:(Value:SelectedPageENUM)=> void;
}

const Navbar = ({SelectedPage,SetSelectedPage}:PropType) => {
  
  const FlexBetween = "flex items-center justify-between";
  return <nav>
      <div className={`${FlexBetween} w-full top-0 z-30`}>
        <div className={`${FlexBetween} mx-auto w-5/6 py-6`}>
          <div className={`${FlexBetween} gap-16 w-full py-6`}>
            {/* Left Side */}
            <img src={Logo} alt="Logo" />

            {/* Right Side */}
            <div className={`${FlexBetween} w-full`}>
              <div className={`${FlexBetween} gap-8 text-sm`}>
                <Link Page="Home" SelectedPage={SelectedPage} SetSelectedPage={SetSelectedPage} />
                <Link Page="Benifits" SelectedPage={SelectedPage} SetSelectedPage={SetSelectedPage} />
                <Link Page="Our Classes" SelectedPage={SelectedPage} SetSelectedPage={SetSelectedPage} />
                <Link Page="Contact Us" SelectedPage={SelectedPage} SetSelectedPage={SetSelectedPage} />
              </div>

              <div className={`${FlexBetween} gap-8`}>
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};

export default Navbar;
