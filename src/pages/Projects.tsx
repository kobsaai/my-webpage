import { useState } from "react";
import ProjectsPanel from "../components/ProjectsPanel";
import { Dialog } from "primereact/dialog";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
function Projects() {
  const [iframeVisible, setIframeVisible] = useState(false);

  return (
    <div>
      <h1 className="mb-2">Private Projects</h1>
      <ProjectsPanel
        header="Private Finance Dashboard"
        image="src\assets\finance-dashboard.png"
        summary="normalisiert Daten von gegebenem Bankauszug und erstellt kategorisierbare visualisierung als Tabellen und Diagramme"
        techstack={{
          Sprache: "Python",
          Hosting: "AWS EC2",
          Verarbeitung: "AWS Lambda",
        }}
        onClick={() => setIframeVisible(true)}
      ></ProjectsPanel>
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
