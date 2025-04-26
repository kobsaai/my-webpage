import { useState } from "react";
import ProjectsPanel from "../components/ProjectsPanel";
import { Dialog } from "primereact/dialog";
function Projects() {
  const [iframeVisible, setIframeVisible] = useState(false);

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
      <ProjectsPanel
        header="Private Finance Dashboard"
        image="/finance-dashboard.png"
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
