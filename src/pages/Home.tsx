import { useLocation } from "react-router-dom";
import myImage from "../assets/profilepicture.png";
import TechSkills from "../components/TechSkills";
import { useEffect } from "react";
import BasicBody from "../components/BasicBody";
import { useTranslation } from "react-i18next";

function Home() {
  const location = useLocation();
  const { t } = useTranslation();

  // Effekt, der bei Seitenladung oder bei Hash-Änderung ausgeführt wird
  useEffect(() => {
    if (location.hash) {
      // Kurzer Timeout, damit der DOM vollständig geladen wird
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -70; // Offset für die Navbar-Höhe
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 300); // Etwas längerer Timeout für zuverlässigeres Laden
    } else {
      // Wenn kein Hash vorhanden ist, scrolle zum Anfang der Seite
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <section id="" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16 relative">
          {t("aboutMe")}
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 dark:bg-blue-300"></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-none text-center md:w-64">
            <div className="relative w-64 h-64 mx-auto">
              <img
                src={myImage}
                alt="Benjamin Koller"
                className="rounded-full w-full h-full object-cover border-4 border-blue-500 dark:border-blue-300 shadow-lg"
              />
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://github.com/kobsaai"
                className="flex items-center justify-center w-10 h-10 bg-blue-500 dark:bg-blue-300 rounded-full text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-200 transition-all transform hover:-translate-y-1"
              >
                <i className="pi pi-github text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/benjamin-koller-click"
                className="flex items-center justify-center w-10 h-10 bg-blue-500 dark:bg-blue-300 rounded-full text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-200 transition-all transform hover:-translate-y-1"
              >
                <i className="pi pi-linkedin text-lg"></i>
              </a>
              <a
                href="https://www.instagram.com/benni.koller.berlin/"
                className="flex items-center justify-center w-10 h-10 bg-blue-500 dark:bg-blue-300 rounded-full text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-200 transition-all transform hover:-translate-y-1"
              >
                <i className="pi pi-instagram text-lg"></i>
              </a>
            </div>
          </div>

          <div className="flex-1">
            <section id="start">
              <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {t("greeting")}
              </h3>
            </section>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {t("intro")}
            </p>

            <TechSkills />
            <section id="about">
              <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
                {t("career")}
              </h4>
              <BasicBody>{t("careerText1")}</BasicBody>

              <BasicBody>{t("careerText2")}</BasicBody>

              <BasicBody>{t("careerText3")}</BasicBody>
            </section>
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
              {t("philosophy")}
            </h4>
            <BasicBody>{t("philosophyText")}</BasicBody>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 italic text-lg text-gray-700">
              {t("quote")}
            </blockquote>

            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
              {t("technicalExpertise")}
            </h4>
            <BasicBody>{t("expertiseText")}</BasicBody>

            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
              {t("besideWork")}
            </h4>
            <BasicBody>{t("besideWorkText1")}</BasicBody>

            <BasicBody>{t("besideWorkText2")}</BasicBody>

            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
              {t("futureVision")}
            </h4>
            <BasicBody>{t("futureText")}</BasicBody>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/contact"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
              >
                {t("contact")}
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-50 transition-colors"
              >
                {t("viewProjects")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
