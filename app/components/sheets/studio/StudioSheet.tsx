import StudioCard from "./studio/StudioCard";

const projects = [
  {
    id: "1",
    title: "Project Header",
    description: "Project Description",
    link: "Project Link",
  },
  {
    id: "2",
    title: "Project Header",
    description: "Project Description",
    link: "Project Link",
  },
  {
    id: "3",
    title: "Project Header",
    description: "Project Description",
    link: "Project Link",
  },
  {
    id: "4",
    title: "Project Header",
    description: "Project Description",
    link: "Project Link",
  },
  {
    id: "5",
    title: "Project Header",
    description: "Project Description",
    link: "Project Link",
  },
  {
    id: "6",
    title: "Project Header",
    description: "Project Description",
    link: "Project Link",
  },
  {
    id: "7",
    title: "Project Header",
    description: "Project Description",
    link: "Project Link",
  },
  {
    id: "8",
    title: "Project Header",
    description: "Project Description",
    link: "Project Link",
  },
  {
    id: "9",
    title: "Project Header",
    description: "Project Description",
    link: "Project Link",
  },
  {
    id: "10",
    title: "Project Header",
    description: "Project Description",
    link: "Project Link",
  },
];

const publish = false;

const StudioSheet = () => {
  return publish ? (
    <>
      <div className="flex flex-col gap-80 py-60">
        {projects.map((project) => (
          <StudioCard key={project.id} project={project} />
        ))}
      </div>
    </>
  ) : (
    <>
      <div className="w-full h-96 flex items-center justify-center ">
        <h1 className="text-2xl">Under Construction</h1>
      </div>
    </>
  );
};

export default StudioSheet;
