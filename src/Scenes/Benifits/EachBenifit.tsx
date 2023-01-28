import { motion } from "framer-motion";
type PropType = {
  Icon: JSX.Element;
  Title: string;
  Desc: string;
  Delay: number;
};
const EachBenifit = ({ Icon, Title, Desc, Delay }: PropType) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 p-5 text-sm text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: ((Delay + 1)/2)+0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-2">
          {Icon}
        </div>
      </div>
      <h4 className="font-bold">{Title}</h4>
      <p className="my-3">{Desc}</p>
    </motion.div>
  );
};

export default EachBenifit;
