import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import HText from "../Benifits/HText";
import EachClass from "./EachClass";
import { SelectedPageENUM } from "../Navbar/EnumTypes";
import { motion } from "framer-motion";

export type FlayersType = {
  Title: string;
  Desc: string;
  Image: string;
};

let FlayersArray: Array<FlayersType> = [
  {
    Title: "Weight Training Classes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quibusdam!",
    Image: image1,
  },
  {
    Title: "Weight Training Classes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quibusdam!",
    Image: image2,
  },
  {
    Title: "Weight Training Classes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quibusdam!",
    Image: image3,
  },
  {
    Title: "Weight Training Classes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quibusdam!",
    Image: image4,
  },
  {
    Title: "Weight Training Classes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quibusdam!",
    Image: image5,
  },
  {
    Title: "Weight Training Classes",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quibusdam!",
    Image: image6,
  },
];

type Props = {
  SetSelectedPage: (Value: SelectedPageENUM) => void;
};

const Classes = ({ SetSelectedPage }: Props) => {
  return (
    <motion.section
      id="classes"
      className="bg-primary-100"
      onViewportEnter={() => {
        SetSelectedPage(SelectedPageENUM.OurClasses);
      }}
    >
      <div className="md:w-3/5 mx-auto min-h-full w-5/6 py-10">
        <HText>OUR CLASSES</HText>
        <p className="py-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
          praesentium nisi. Consequatur recusandae maxime veritatis minima odio
          molestiae corrupti vero.
        </p>
      </div>

      <div className="overflow-x-auto overflow-hidden mx-auto w-5/6 Wrap">
        <ul className="whitespace-nowrap my-5">
          {FlayersArray.map((Each: FlayersType, Ind) => {
            return (
              <EachClass
                key={Ind}
                Title={Each.Title}
                Desc={Each.Desc}
                Image={Each.Image}
              />
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
};

export default Classes;
