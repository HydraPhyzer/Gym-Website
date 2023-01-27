import { motion } from "framer-motion";
import HText from "../Benifits/HText";
import { SelectedPageENUM } from "../Navbar/EnumTypes";
type Props = {
  SetSelectedPage: (Value: SelectedPageENUM) => void;
};
const Contact = ({ SetSelectedPage }: Props) => {
  return (
    <motion.section
      id="contactus"
      className="mx-auto min-h-full w-5/6 py-10"
      onViewportEnter={() => {
        SetSelectedPage(SelectedPageENUM.ContactUs);
      }}
    >
      <HText>
        <span className="text-primary-500">JOIN NOW</span>
        {""} TO GET IN SHAPE
      </HText>
      <p className="py-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed
        itaque ipsa officia nostrum, quaerat nam nesciunt fugit maxime qui?
      </p>

      <div className="mt-10 justify-between gap-8 sm:flex">
        <div className="mt-10 basis-3/5 sm:mt-0">

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
