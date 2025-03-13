import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import CodeBlock from '../components/CodeBlock';
import { motion } from 'framer-motion';
import { FaDatabase, FaCode, FaCloud, FaRobot, FaDesktop, FaServer } from 'react-icons/fa';

// Load the ResumeViewer component only on client-side
const ResumeViewer = dynamic(() => import('../components/ResumeViewer'), {
  ssr: false,
});

const skillCategories = [
  {
    name: "Languages",
    icon: <FaCode className="text-code-blue text-xl" />,
    skills: ["JavaScript", "TypeScript", "Python", "C#", "Java", "SQL", "HTML/CSS"]
  },
  {
    name: "Frontend",
    icon: <FaDesktop className="text-code-green text-xl" />,
    skills: ["React", "Next.js", "Redux", "Tailwind CSS", "Material UI", "Framer Motion"]
  },
  {
    name: "Backend",
    icon: <FaServer className="text-code-orange text-xl" />,
    skills: ["Node.js", "Express", "ASP.NET Core", "REST APIs", "GraphQL"]
  },
  {
    name: "Databases",
    icon: <FaDatabase className="text-code-yellow text-xl" />,
    skills: ["MongoDB", "PostgreSQL", "SQL Server", "Redis", "Firebase"]
  },
  {
    name: "Cloud & DevOps",
    icon: <FaCloud className="text-code-purple text-xl" />,
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"]
  },
  {
    name: "AI & ML",
    icon: <FaRobot className="text-code-pink text-xl" />,
    skills: ["Machine Learning", "Natural Language Processing", "Computer Vision", "TensorFlow", "PyTorch"]
  }
];

const experienceCode = `
// Microsoft Experience
const microsoftRole = {
  title: "Senior Software Engineer",
  team: "Cloud & AI Division",
  focus: "Developer Productivity",
  achievements: [
    "Led development of AI-powered code context enhancements for GitHub Copilot",
    "Contributed to multiple patents in generative AI applications",
    "Built scalable developer tools that impact millions of engineers worldwide"
  ]
};
`;

export default function About() {
  return (
    <Layout title="About Me | Mohaimen Khan" description="Learn about Mohaimen Khan's experience, skills and background as a Senior Software Engineer.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/3">
            <motion.h1 
              className="text-4xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-code-green">{"<"}</span>
              About Me
              <span className="text-code-green">{"/>"}</span>
            </motion.h1>
            
            <motion.div 
              className="mb-12 text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="mb-4">
                Hello! I'm Mohaimen Khan, a Senior Software Engineer at Microsoft working in the Cloud & AI division. 
                I specialize in developing AI-powered tools that enhance developer productivity and workflows.
              </p>
              
              <p className="mb-4">
                With a passion for innovative technologies, I've contributed to projects that leverage machine 
                learning and cloud computing to solve complex problems. My work includes developing patents in 
                generative AI and building tools that transform how developers interact with code.
              </p>
              
              <p>
                Prior to Microsoft, I gained valuable experience at companies like RBC, TELUS, and BlueCat Networks, 
                where I honed my skills in full-stack development, system architecture, and technical leadership.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-code-green mr-2">#</span> My Experience
              </h2>
              
              <CodeBlock 
                code={experienceCode}
                language="javascript"
                fileName="experience.js"
              />
              
              <div className="mt-8 space-y-6">
                <div className="border-l-4 border-code-blue pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">Microsoft</h3>
                  <p className="text-code-blue font-mono">Senior Software Engineer, Cloud & AI Division</p>
                  <p className="text-gray-400 text-sm mb-2">2020 - Present</p>
                  <p className="text-gray-300">
                    Working on developer productivity and AI-driven solutions, including advancements in 
                    generative AI that enhance code context for GitHub Copilot.
                  </p>
                </div>
                
                <div className="border-l-4 border-code-yellow pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">RBC Amplify</h3>
                  <p className="text-code-yellow font-mono">Software Engineering Intern</p>
                  <p className="text-gray-400 text-sm mb-2">2019</p>
                  <p className="text-gray-300">
                    Developed an AI-powered rental bidding platform allowing tenants to bid on properties 
                    before public listing.
                  </p>
                </div>
                
                <div className="border-l-4 border-code-orange pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">TELUS</h3>
                  <p className="text-code-orange font-mono">Software Engineering Intern</p>
                  <p className="text-gray-400 text-sm mb-2">2018</p>
                  <p className="text-gray-300">
                    Utilized machine learning to detect and resolve network bottlenecks, enhancing telecom 
                    network performance.
                  </p>
                </div>
                
                <div className="border-l-4 border-code-purple pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">BlueCat Networks</h3>
                  <p className="text-code-purple font-mono">Software Engineering Intern</p>
                  <p className="text-gray-400 text-sm mb-2">2017</p>
                  <p className="text-gray-300">
                    Automated virtual machine deployments, gaining practical experience in cloud computing 
                    and DevOps practices.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-code-green mr-2">#</span> Skills
            </h2>
            
            <div className="space-y-6 mb-12">
              {skillCategories.map((category, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <h3 className="flex items-center text-white font-semibold mb-3">
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-2 py-1 text-xs font-mono rounded bg-gray-700 text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-code-green mr-2">#</span> Resume
            </h2>
            
            <ResumeViewer pdfUrl="/Mohaimen Khan - Senior Software Engineer Resume.pdf" />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}