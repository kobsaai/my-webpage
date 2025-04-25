import React from "react";
import { Tooltip } from "primereact/tooltip";

interface ProjectsPanelProps {
  header: string;
  image: string;
  summary: string;
  techstack: { [key: string]: string };
  onClick: () => void;
}

function ProjectsPanel({
  header,
  image,
  summary,
  techstack,
  onClick,
}: ProjectsPanelProps) {
  return (
    <div
      onClick={onClick}
      className="main-container p-5 border border-gray-200 bg-white text-gray-600 rounded-br-[6px] rounded-bl-[6px] border-t-0 max-w-80"
    >
      <Tooltip target=".main-container">
        <div>
          <h3>Ziel</h3>
          <p>{summary}</p>
          <ul className="mt-2 text-sm ">
            Techstack:
            {Object.entries(techstack).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </Tooltip>
      <h1>{header}</h1>
      <div className="m-2">
        <img src={image} className="image-one" data-pr-tooltip="hello world" />
      </div>
    </div>
  );
}

export default ProjectsPanel;
