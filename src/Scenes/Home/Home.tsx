import useMediaQueries from "../../Hooks/useMediaQueries";
import ActionButton from "../Navbar/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPageENUM } from "../Navbar/EnumTypes";
import { motion } from "framer-motion";

type Props = {
  SetSelectedPage: (Value: SelectedPageENUM) => void;
};
const Home = ({ SetSelectedPage }: Props) => {
  const IsAboveMediumScreens = useMediaQueries("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 pt-10 md:h-full md:pb-0">
      <div className="flex flex-col sm:flex-row justify-between items-center w-5/6 mx-auto md:h-5/6">
        <div className="mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src="" alt="Home Page Text" srcSet={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start w-[60%]">
              Unrivalled Gym. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Doloribus incidunt perspiciatis, quas
              repudiandae blanditiis xcepturi harum aut! Omnis dicta.
            </p>
          </motion.div>

          <motion.div
            className="my-8 flex gap-8 items-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton SetSelectedPage={SetSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underlines"
              onClick={() => {
                SetSelectedPage(SelectedPageENUM.ContactUs);
              }}
              href={`#${SelectedPageENUM.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 ">
          <img src="" alt="Home Page Graphics" srcSet={HomePageGraphic} />
        </div>
      </div>

      {IsAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 pt-10 ">
          <div className="mx-auto w-5/6">
            <div className="w-3/5 flex gap-8 items-center justify-between">
              <img alt="RedBull Sponser" srcSet={SponsorRedBull} />
              <img alt="Forbes Sponser" srcSet={SponsorForbes} />
              <img alt="Fortune Sponser" srcSet={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
