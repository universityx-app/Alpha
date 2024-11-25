import React from "react";
import Pattern1 from "./Pattern1";
import Pattern2 from "./Pattern2";
import Pattern3 from "./Pattern3";
import Pattern4 from "./Pattern4";
import Pattern5 from "./Pattern5";

interface ProgressMapProps {
  elements: {
    id: string;
    title: string;
    completed: boolean;
  }[];
  activeElement: string;
  hex: string;
  incompleteHex: string;
}

const ProgressMap: React.FC<ProgressMapProps> = ({
  elements,
  activeElement,
  hex,
  incompleteHex,
}) => {
  const patterns = [Pattern1, Pattern2, Pattern3, Pattern4, Pattern5];

  return (
    <div className="flex flex-col w-full lg:w-3/5 md:px-5 ">
      {elements.map((element, index) => {
        const PatternComponent =
          index === 0
            ? patterns[0]
            : patterns[((index - 1) % (patterns.length - 1)) + 1];

        return (
          <PatternComponent
            key={element.id}
            isActive={activeElement === element.id}
            completed={element.completed}
            title={element.title}
            hex={element.completed ? hex : incompleteHex}
          />
        );
      })}
    </div>
  );
};

export default ProgressMap;
