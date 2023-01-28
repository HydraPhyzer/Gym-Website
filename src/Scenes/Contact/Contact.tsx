import { motion } from "framer-motion";
import HText from "../Benifits/HText";
import { SelectedPageENUM } from "../Navbar/EnumTypes";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";

type Props = {
  SetSelectedPage: (Value: SelectedPageENUM) => void;
};

const Contact = ({ SetSelectedPage }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const OnSubmit = async (Event: any) => {
    const IsValid = await trigger();
    if (!IsValid) {
      Event.preventDefault();
    }
  };
  let InpStyle = "w-full placeholder-white px-5 py-3 bg-primary-300 mb-5";

  return (
    <motion.section
      id="contactus"
      className="mx-auto min-h-full w-5/6 pt-10"
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
        <motion.div
          className="mt-10 basis-4/5 sm:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <form
            action="https://formsubmit.co/repeg63059@chotunai.com"
            target="_blank"
            onSubmit={OnSubmit}
            method="POST"
          >
            <input
              type="text"
              placeholder="Name"
              className={InpStyle}
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-primary-500 text-sm">
                {errors.name.type === "required" && "This Field Is Required"}
                {errors.name.type === "maxLength" && "Size Must Be <=100"}
              </p>
            )}
            <input
              type="email"
              placeholder="Email"
              className={InpStyle}
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-primary-500 text-sm">
                {errors.email.type === "required" && "This Field Is Required"}
                {errors.email.type === "pattern" && "Invalid Email Address"}
              </p>
            )}
            <textarea
              name="Message"
              placeholder="Message"
              className={InpStyle}
            ></textarea>
            <input
              type="submit"
              value="Submit"
              className="hover:bg-primary-300 mt-5 px-5 py-2 bg-secondary-500 hover:text-white rounded-md"
            />
          </form>
        </motion.div>
        <motion.div
          className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext mt-5 sm:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src={ContactUsPageGraphic}
            alt="Contact Us Page"
            className="h-2/3 w-full object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
