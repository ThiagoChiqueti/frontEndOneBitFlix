import Card from "@/components/card";
import Container from "@/components/container";

const CardsSection: React.FC = () => {
  return (
    <>
      <p className="uppercase text-lg font-bold text-center mt-12 mb-8">
        O que você vai acessar
      </p>
      <Container>
        <div className="flex flex-wrap gap-9 justify-center">
          <Card
            background="front"
            title="front-end"
            description="O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação."
          />

          <Card
            background="back"
            title="Back-end"
            description="O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação."
          />

          <Card
            background="mobile"
            title="Mobile"
            description="O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação."
          />

          <Card
            background="git"
            title="GIT & GITHUB"
            description="O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação."
          />

          <Card
            background="project"
            title="Projetos"
            description="O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação."
          />

          <Card
            background="career"
            title="Carreira"
            description="O Onebitcode Black é o lugar para você evoluir. Para isso, você
              vai ter acesso às práticas avançadas de programação, atualizações
              de tecnologias e todo suporte técnico necessário para ser um
              sênior na programação."
          />
        </div>
      </Container>
    </>
  );
};

export default CardsSection;
