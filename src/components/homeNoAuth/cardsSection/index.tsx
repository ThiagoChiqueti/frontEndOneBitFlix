const CardsSection: React.FC = () => {
  return (
    <>
      <p className="uppercase text-lg font-bold text-center mt-12 mb-8">O que você vai acessar</p>
      <section className="flex justify-center">
        
        <div className="container flex flex-wrap gap-9 justify-center">

          <div className="w-80 h-72 bg-card-bg-front bg-cover rounded-lg p-4 flex flex-col justify-end transition duration-300 hover:scale-105 group">
            <p className="uppercase font-bold mb-2 transition duration-300 group-hover:scale-1 group-hover:translate-x-5 ">Front-End</p>
            <p className="text-base text-lightGray">
              O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação.
            </p>
          </div>
      


       
          <div className="w-80 h-72 bg-card-bg-back bg-cover rounded-lg p-4 flex flex-col justify-end transition duration-300 hover:scale-105 group">
            <p className="uppercase font-bold mb-2 transition duration-300 group-hover:scale-1 group-hover:translate-x-5 ">Back-End</p>
            <p className="text-base text-lightGray">
              O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação.
            </p>
          </div>
    

      
          <div className="w-80 h-72 bg-card-bg-mobile bg-cover rounded-lg p-4 flex flex-col justify-end transition duration-300 hover:scale-105 group">
            <p className="uppercase font-bold mb-2 transition duration-300 group-hover:scale-1 group-hover:translate-x-5 ">MOBILE</p>
            <p className="text-base text-lightGray">
              O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação.
            </p>
          </div>
      


     
          <div className="w-80 h-72 bg-card-bg-git bg-cover rounded-lg p-4 flex flex-col justify-end transition duration-300 hover:scale-105 group">
            <p className="uppercase font-bold mb-2 transition duration-300 group-hover:scale-1 group-hover:translate-x-5 ">GIT & GITHUB</p>
            <p className="text-base text-lightGray">
              O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação.
            </p>
          </div>
    


        
          <div className="w-80 h-72 bg-card-bg-project bg-cover rounded-lg p-4 flex flex-col justify-end transition duration-300 hover:scale-105 group">
            <p className="uppercase font-bold mb-2 transition duration-300 group-hover:scale-1 group-hover:translate-x-5 ">Projetos</p>
            <p className="text-base text-lightGray">
              O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação.
            </p>
          </div>
       

        
          <div className="w-80 h-72 bg-card-bg-career bg-cover rounded-lg p-4 flex flex-col justify-end transition duration-300 hover:scale-105 group">
            <p className="uppercase font-bold mb-2 transition duration-300 group-hover:scale-1 group-hover:translate-x-5 ">Carreira</p>
            <p className="text-base text-lightGray">
              O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação.
            </p>
          </div>

        </div>

      </section>
    </>
  );
};

export default CardsSection;
