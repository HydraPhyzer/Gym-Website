import { SelectedPageENUM } from "../Navbar/EnumTypes";
import { motion } from "framer-motion";
import HText from "./HText";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import EachBenifit from "./EachBenifit";
import ActionButton from "../Navbar/ActionButton";

type Props = {
  SetSelectedPage: (Value: SelectedPageENUM) => void;
};
type BenifitsType = {
  Icon: JSX.Element;
  Title: string;
  Desc: string;
};

let BenifitsArray: Array<BenifitsType> = [
  {
    Icon: <HomeModernIcon className="h-6 w-6" />,
    Title: "State of the Art Facilities",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, quidem ipsum vero deleniti asperiores eius natus quis repudiandae aperiam, dolorum.",
  },
  {
    Icon: <UserGroupIcon className="h-6 w-6" />,
    Title: "100s of Diverse Classes",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, quidem ipsum vero deleniti asperiores eius natus quis repudiandae aperiam, dolorum.",
  },
  {
    Icon: <AcademicCapIcon className="h-6 w-6" />,
    Title: "Expert and Pro Trainsers",
    Desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, quidem ipsum vero deleniti asperiores eius natus quis repudiandae aperiam, dolorum.",
  },
];

const Benifits = ({ SetSelectedPage }: Props) => {
  return (
    <section id="benifits" className="mx-auto min-h-full w-5/6 py-10">
      <motion.div
        onViewportEnter={() => {
          SetSelectedPage(SelectedPageENUM.Benifits);
        }}
      >
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="test-sm my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni id
            incidunt modi assumenda ab laudantium laborum similique voluptate
            nostrum quisquam.
          </p>
        </div>

        <div className="sm:flex gap-2">
          {BenifitsArray.map((Each: BenifitsType, Ind: number) => {
            return (
              <EachBenifit
                key={Ind}
                Icon={Each.Icon}
                Title={Each.Title}
                Desc={Each.Desc}
                Delay={Ind}
              />
            );
          })}
        </div>
      </motion.div>

      <div className="mt-16 items-center justify-between gap-0 sm:flex">
        <img src={BenefitsPageGraphic} alt="Benifits Page Graphics" />
        <div>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves">
              <div>
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING {""}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </div>
            </div>
          </div>
          <div>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              earum corporis ipsam magnam hic, facere inventore et ipsa ratione
              officiis repellat nesciunt rerum corrupti. Sapiente, est libero
              impedit facilis iure perferendis ullam inventore repellat quam
              labore iste magni dicta, ducimus nemo cupiditate ut optio officia
              cumque ad. Et, fuga dolorum!
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              earum corporis ipsam magnam hic, facere inventore et ipsa ratione
              officiis repellat nesciunt rerum corrupti. Sapiente, est libero
              impedit facilis iure perferendis ullam inventore repellat quam
              labore iste magni dicta, ducimus nemo cupiditate ut optio officia
              cumque ad. Et, fuga dolorum!
            </p>
          </div>

          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-0 before:content-sparkles">
              <ActionButton SetSelectedPage={SetSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benifits;
