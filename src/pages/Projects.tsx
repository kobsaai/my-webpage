import { useState } from "react";
import ProjectsPanel from "../components/ProjectsPanel";
import { Dialog } from "primereact/dialog";
import projectsList from "../utils/projects.json";
function Projects() {
  const [iframeVisible, setIframeVisible] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div>
      <p className="m-2">
        Da ich derzeit nur an Firmeninternen Projekten arbeite und diese nicht
        für die Öffentlichkeit sind kann ich hier keine beruflichen Projekte
        zeigen.
        <br />
        Einige private Projekte die zur weiterenwicklung meiner persönlichen
        Fähigkeiten dienen habe ich hier als Portfolio bereitgestellt.{" "}
      </p>
      <div className="flex">
        {Object.entries(projectsList.project).map(([key, project]) => (
          <div key={key} className="relative">
            <ProjectsPanel
              name={key}
              header={project.header}
              image={project.image}
              summary={project.summary}
              techstack={project.techstack}
              onClick={() => {
                setOpenDropdown(openDropdown === key ? null : key);
              }}
            />
            {openDropdown === key && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-md p-2 z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  GitHub Repository
                </a>
                {project.demo && (
                  <button
                    onClick={() => setIframeVisible(true)}
                    className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                  >
                    Project Demo öffnen
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {iframeVisible && (
        <Dialog
          className="w-[80%]"
          visible={iframeVisible}
          onHide={() => {
            if (!iframeVisible) return;
            setIframeVisible(false);
          }}
        >
          <div className="mt-4">
            <iframe
              src="https://finance-dashboard.benjamin-koller.click"
              title="Dashboard"
              width="100%"
              height="800px"
              style={{ border: "none" }}
            />
          </div>
        </Dialog>
      )}
    </div>
  );
}

export default Projects;

/*        <iframe
src="https://finance-dashboard.benjamin-koller.click"
title="Dashboard"
width="100%"
height="800px"
style={{ border: "none" }}
/>
*/
