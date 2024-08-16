import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { visibleTechnologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {visibleTechnologies.map((visibleTechnologies) => (
        <div className="w-28 h-28" key={visibleTechnologies.name}>
          <BallCanvas icon={visibleTechnologies.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
