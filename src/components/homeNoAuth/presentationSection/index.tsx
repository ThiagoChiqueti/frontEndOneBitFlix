import Link from "next/link";

const PresentationSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-4">
      <section className="grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 container">
        <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left">
          <p className="text-xl text-lightRed uppercase">Acesso ilimitado</p>
          <p className="text-4xl font-bold">
            Tenha acesso aos melhores <br /> tutoriais de programação
          </p>
          <p className="text-lg text-lightGray mt-5 mb-10">
            Estude de onde estiver, a qualquer momento, e continue <br />{" "}
            evoluindo como programador
          </p>
          <Link href="/register">
            <button className="font-bold text-white flex items-center gap-6 border-2 border-lightRed p-2 rounded transition duration-300 hover:scale-110 hover:shadow-darkRed hover:shadow-md">
              Acesse agora
              <img src="/buttonPlay.svg" alt="button image" className="w-3" />
            </button>
          </Link>
        </div>
        <div className="flex  flex-col justify-center">
          <img
            src="/homeNoAuth/imgPresentation.png"
            alt="img index"
            className="w-[550px]"
          />
        </div>
      </section>

      <div className="animate-bounce pt-5">
        <img
          src="/homeNoAuth/iconArrowDown.svg"
          alt="img index"
          className="w-8"
        />
      </div>
    </div>
  );
};

export default PresentationSection;
