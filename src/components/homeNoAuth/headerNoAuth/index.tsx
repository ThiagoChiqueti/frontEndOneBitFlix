import Link from "next/link";

const HeaderNoAuth = () => {
  return (
    <>
      <div className="bg-lightRed flex items-center justify-center text-center gap-8">
        <img src="/homeNoAuth/logoCta.png" alt="logoCta" className="w-8" />
        <p className="text-xs sm:text-sm">Cadastre-se para ter acesso aos cursos</p>
        <img src="/homeNoAuth/logoCta.png" alt="logoCta" className="w-8" />
      </div>
      <section className="flex justify-center">
        <div className="container flex justify-center flex-wrap mt-5 sm:justify-between">
          <img src="/logoOneBitFlix.svg" alt="logoOneBitFlix" className="w-44" />

          <div className="flex gap-3">
            <Link href="/login">
              <button className="border border-transparent p-2 text-lightGray rounded hover:text-white hover:border-lightRed transition duration-150 ease-linear ">
                Entrar
              </button>
            </Link>

            <Link href="/register">
              <button className="border border-transparent p-2 text-lightGray rounded  hover:text-white hover:border-lightRed transition duration-150 ease-linear">
                Quero fazer parte
              </button>
            </Link>

        
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderNoAuth;
