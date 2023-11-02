
interface Props {
  title: string;
  description: string;
  background: string;
}

const Card: React.FC<Props> = ({title, description, background}) => {
  return (
    <>
      <div className={`w-80 h-72 bg-card-bg-${background} bg-cover rounded-lg p-4 flex flex-col justify-end transition duration-300 hover:scale-105 group`}>
        <p className="uppercase font-bold mb-2 transition duration-300 group-hover:scale-1 group-hover:translate-x-5 ">
          {title}
        </p>
        <p className="text-base text-lightGray">
          {description}
        </p>
      </div>
    </>
  );
};

export default Card;
