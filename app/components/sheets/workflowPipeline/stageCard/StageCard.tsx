import Image from "next/image";
import { FC } from "react";

type PipelineStageType = {
  id: number;
  name: string;
  description: string;
  image: string;
  items: string[];
};

interface StageCardProps {
  stage: PipelineStageType;
}

const StageCard: FC<StageCardProps> = ({ stage }) => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="h-96 w-96 relative my-10">
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center z-10">
          <div className="w-60 h-60 rounded-lg shadow-lg relative">
            <Image
              src={`/workflowPipeline/${stage.image}`}
              alt={stage.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full h-1/2 flex flex-col justify-between">
            <h3 className="text-center text-3xl">{stage.name}</h3>
            <p className="text-center text-xl">{stage.description}</p>
            <ul className="flex flex-row justify-evenly">
              {stage.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-80 bg-slate-400 rounded-md shadow-lg"></div>
      </div>
    </div>
  );
};

export default StageCard;
