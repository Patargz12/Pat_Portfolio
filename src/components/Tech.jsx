import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { visibleTechnologies } from "../constants";

const Tech = () => {
  return (
    <div className="relative flex flex-wrap justify-center gap-10">
      {visibleTechnologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
