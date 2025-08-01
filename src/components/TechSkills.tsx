import React from "react";

type SkillLevel =
  | "Beginner"
  | "Advanced Beginner"
  | "Competent"
  | "Proficient"
  | "Expert";

interface Skill {
  name: string;
  level: SkillLevel;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Other";
}

const TechSkills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: "React", level: "Proficient", category: "Frontend" },
    { name: "TypeScript", level: "Competent", category: "Frontend" },
    { name: "JavaScript", level: "Proficient", category: "Frontend" },
    { name: "HTML/CSS", level: "Competent", category: "Frontend" },
    { name: "Tailwind CSS", level: "Competent", category: "Frontend" },

    // Backend
    { name: "Python", level: "Proficient", category: "Backend" },
    { name: "Java", level: "Competent", category: "Backend" },
    { name: "PHP", level: "Advanced Beginner", category: "Backend" },
    { name: "C++", level: "Beginner", category: "Backend" },
    { name: "VBA", level: "Advanced Beginner", category: "Backend" },

    // Database
    { name: "MySQL", level: "Advanced Beginner", category: "Database" },
    { name: "PostgreSQL", level: "Competent", category: "Database" },
    { name: "AWS Athena", level: "Advanced Beginner", category: "Database" },

    // DevOps
    { name: "AWS", level: "Competent", category: "DevOps" },
    { name: "Docker", level: "Advanced Beginner", category: "DevOps" },
    { name: "Git", level: "Proficient", category: "DevOps" },
    { name: "CI/CD", level: "Advanced Beginner", category: "DevOps" },
  ];

  const getLevelValue = (level: SkillLevel): number => {
    switch (level) {
      case "Beginner":
        return 1;
      case "Advanced Beginner":
        return 2;
      case "Competent":
        return 3;
      case "Proficient":
        return 4;
      case "Expert":
        return 5;
    }
  };

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-16 relative">
          Technische Fähigkeiten
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-gray-50 dark:bg-gray-950 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}
                        </span>
                      </div>
                      <div className="flex h-2 bg-gray-100 dark:bg-gray-900 rounded-full">
                        {[1, 2, 3, 4, 5].map((segment) => {
                          const segmentColors = [
                            "bg-gray-200 dark:bg-orange-200", // Beginner
                            "bg-blue-200 dark:bg-orange-300", // Advanced Beginner
                            "bg-blue-300 dark:bg-orange-400", // Competent
                            "bg-blue-400 dark:bg-orange-500", // Proficient
                            "bg-blue-500 dark:bg-orange-600", // Expert
                          ];

                          const active = getLevelValue(skill.level) >= segment;

                          return (
                            <div
                              key={segment}
                              className={`h-full flex-1 ${
                                active
                                  ? segmentColors[segment - 1]
                                  : "bg-gray-100 "
                              } 
                                ${segment === 1 ? "rounded-l-full" : ""} 
                                ${segment === 5 ? "rounded-r-full" : ""}
                                ${segment > 1 ? "ml-0.5" : ""}`}
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 dark:bg-orange-200 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Beginner
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-200 dark:bg-orange-300 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Advanced Beginner
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-300 dark:bg-orange-400 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Competent
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 dark:bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Proficient
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 dark:bg-orange-600 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Expert
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
