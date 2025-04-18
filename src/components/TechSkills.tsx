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
    { name: "TypeScript", level: "Proficient", category: "Frontend" },
    { name: "JavaScript", level: "Expert", category: "Frontend" },
    { name: "HTML/CSS", level: "Expert", category: "Frontend" },
    { name: "Tailwind CSS", level: "Competent", category: "Frontend" },

    // Backend
    { name: "Python", level: "Proficient", category: "Backend" },
    { name: "Java", level: "Competent", category: "Backend" },
    { name: "PHP", level: "Advanced Beginner", category: "Backend" },
    { name: "C++", level: "Beginner", category: "Backend" },
    { name: "VBA", level: "Competent", category: "Backend" },

    // Database
    { name: "MySQL", level: "Proficient", category: "Database" },
    { name: "PostgreSQL", level: "Competent", category: "Database" },
    { name: "AWS Athena", level: "Competent", category: "Database" },

    // DevOps
    { name: "AWS Lambda", level: "Competent", category: "DevOps" },
    { name: "AWS S3", level: "Proficient", category: "DevOps" },
    { name: "AWS RDS", level: "Competent", category: "DevOps" },
    { name: "AWS DynamoDB", level: "Competent", category: "DevOps" },
    { name: "AWS EC2", level: "Advanced Beginner", category: "DevOps" },
    { name: "AWS CloudWatch", level: "Competent", category: "DevOps" },
    { name: "Docker", level: "Competent", category: "DevOps" },
    { name: "Git", level: "Proficient", category: "DevOps" },
    { name: "CI/CD", level: "Advanced Beginner", category: "DevOps" },
  ];

  const getLevelClass = (level: SkillLevel): string => {
    switch (level) {
      case "Beginner":
        return "bg-gray-200 w-1/5";
      case "Advanced Beginner":
        return "bg-blue-200 w-2/5";
      case "Competent":
        return "bg-blue-300 w-3/5";
      case "Proficient":
        return "bg-blue-400 w-4/5";
      case "Expert":
        return "bg-blue-500 w-full";
    }
  };

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 relative">
          Technische Fähigkeiten
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div
                          className={`h-full rounded-full ${getLevelClass(
                            skill.level
                          )}`}
                        ></div>
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
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              <span className="text-sm text-gray-600">Beginner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
              <span className="text-sm text-gray-600">Advanced Beginner</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
              <span className="text-sm text-gray-600">Competent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <span className="text-sm text-gray-600">Proficient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
