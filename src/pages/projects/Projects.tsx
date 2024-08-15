import CardProject from "../../components/CardProject/CardProject";

const Projects = () => {
  return (
    <section className="h-full w-full flex items-center justify-center flex-col px-8">
      <h1 className="self-center mb-20 font-bold text-3xl">Projetos</h1>
      <CardProject />
    </section>
  );
};

export default Projects;
