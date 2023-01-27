import { FlayersType } from "./Classes";

const EachClass = ({ Title, Desc, Image }: FlayersType) => {
  return (
    <li className="relative mr-5 inline-block sm:w-[300px] w-[250px]">
      <div className="absolute p-5 flex flex-col items-center justify-center text-white transition duration-500 hover:opacity-80 bg-primary-500 whitespace-normal opacity-0 text-center h-full">
        <p className="font-bold">{Title}</p>
        <p>{Desc}</p>
      </div>
      <img src={Image} alt={Image} className="rounded-md" />
    </li>
  );
};

export default EachClass;
