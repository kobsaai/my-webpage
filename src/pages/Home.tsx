import { useLocation } from "react-router-dom";
import myImage from "../assets/profilepicture.png";
import TechSkills from "../components/TechSkills";
import { useEffect } from "react";

function Home() {
  const location = useLocation();

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
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 relative">
          Über mich
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Profile Image & Social Links */}
          <div className="flex-none text-center md:w-64">
            <div className="relative w-64 h-64 mx-auto">
              <img
                src={myImage}
                alt="Benjamin Koller"
                className="rounded-full w-full h-full object-cover border-4 border-blue-500 shadow-lg"
              />
            </div>
            {/* social media links if wanted 
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-all transform hover:-translate-y-1"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-all transform hover:-translate-y-1"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition-all transform hover:-translate-y-1"
              >
                <i className="fab fa-xing text-lg"></i>
              </a>
            </div>
          */}
          </div>

          {/* About Text Content */}
          <div className="flex-1">
            <section id="about">
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                Hallo, ich bin Benjamin!
              </h3>
            </section>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Als Fullstack Software Developer mit Wurzeln im Finanzwesen
              verbinde ich technische Expertise mit einem tiefen Verständnis für
              Kundenbedürfnisse und Geschäftsprozesse.
            </p>

            <TechSkills />
            <section id="development">
              <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                Mein Werdegang
              </h4>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Meine Reise in die Welt der Softwareentwicklung begann bereits
                früh. Während meiner Schulzeit am Thomas Mann Gymnasium in
                Budapest entwickelte ich eine Leidenschaft für Mathematik und
                Physik, die mich zum Informatikstudium an der
                Eötvös-Loránd-Universität führte. Parallel dazu sammelte ich
                erste praktische Erfahrungen im elterlichen Betrieb, wo ich an
                der Entwicklung und Integration von Datenbanken und der
                Automatisierung von Geschäftsabläufen arbeitete.
              </p>

              <p className="text-gray-600 mb-5 leading-relaxed">
                Mein beruflicher Weg führte mich zunächst in die Finanzbranche,
                wo ich als selbständiger Handelsvertreter wertvolle Erfahrungen
                im Umgang mit Kunden und in der Entwicklung maßgeschneiderter
                Lösungen sammeln konnte. Gleichzeitig übernahm ich als
                Teamleiter bei Events und Messen Verantwortung für Teams mit bis
                zu 30 Personen und entwickelte dabei meine Führungsqualitäten
                weiter.
              </p>

              <p className="text-gray-600 mb-5 leading-relaxed">
                2021 entschied ich mich, meiner Leidenschaft für die Informatik
                vollständig zu folgen und absolvierte eine Ausbildung zum
                Fachinformatiker für Anwendungsentwicklung. Diese formale
                Ausbildung, kombiniert mit meinem Praktikum und der
                anschließenden Festanstellung bei Team Internet Service GmbH,
                hat mein Verständnis für moderne Softwareentwicklung vertieft
                und erweitert.
              </p>
            </section>
            <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Meine Philosophie
            </h4>
            <p className="text-gray-600 mb-5 leading-relaxed">
              In meiner Arbeit als Entwickler strebe ich danach, komplexe
              technische Herausforderungen in intuitive und effiziente Lösungen
              zu verwandeln. Ich glaube fest daran, dass gute Software nicht nur
              funktional, sondern auch benutzerfreundlich sein muss. Meine
              Erfahrung in der Kundenberatung hat mir gezeigt, wie wichtig es
              ist, die tatsächlichen Bedürfnisse der Endnutzer zu verstehen und
              diese in den Mittelpunkt der Entwicklung zu stellen.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 italic text-lg text-gray-700">
              "Technologie sollte Probleme lösen, nicht neue schaffen. Mein Ziel
              ist es, Software zu entwickeln, die nicht nur technisch solide
              ist, sondern auch echten Mehrwert für ihre Nutzer bietet."
            </blockquote>

            <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Meine technische Expertise
            </h4>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Als Fullstack-Entwickler arbeite ich mit einem breiten Spektrum an
              Technologien. Im Frontend setze ich auf moderne
              JavaScript-Frameworks wie React, kombiniert mit TypeScript für
              typsichere Codebasen. Im Backend entwickle ich mit Python und
              nutze diverse AWS-Services für skalierbare und zuverlässige
              Cloud-Lösungen. Mein Verständnis von Datenbanksystemen und
              DevOps-Praktiken rundet mein Profil ab und ermöglicht es mir, am
              gesamten Entwicklungszyklus mitzuwirken.
            </p>

            <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Neben der Arbeit
            </h4>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Wenn ich nicht gerade code, verbringe ich Zeit mit meinem Hund
              Bronco, der mich zu regelmäßigen Pausen und Spaziergängen an der
              frischen Luft zwingt – was meiner Kreativität und
              Problemlösungsfähigkeit zugute kommt. Als leidenschaftlicher
              NFL-Fan verfolge ich die Saison intensiv und genieße die
              strategische Tiefe des Spiels. Seit kurzem habe ich auch das
              Golfen für mich entdeckt und arbeite kontinuierlich daran, mein
              Handicap zu verbessern.
            </p>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Diese Interessen helfen mir nicht nur dabei, einen klaren Kopf zu
              bewahren, sondern lehren mich auch wertvolle Lektionen über
              Teamarbeit, Strategie und kontinuierliche Verbesserung –
              Prinzipien, die ich auch in meiner Arbeit als Entwickler anwende.
            </p>

            <h4 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              Meine Zukunftsvision
            </h4>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Ich strebe danach, mich kontinuierlich weiterzuentwickeln und mein
              Wissen in den Bereichen Cloud-Architektur, DevOps und moderne
              Frontend-Frameworks zu vertiefen. Langfristig möchte ich an
              innovativen Projekten mitwirken, die einen positiven Einfluss auf
              den Alltag der Menschen haben, und meine vielfältigen Erfahrungen
              einbringen, um Brücken zwischen Technologie und
              Benutzerbedürfnissen zu bauen.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/contact"
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
              >
                Kontakt aufnehmen
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-50 transition-colors"
              >
                Meine Projekte ansehen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
