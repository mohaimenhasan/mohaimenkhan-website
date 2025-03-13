import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import CodeBlock from '../components/CodeBlock';
import { motion } from 'framer-motion';
import { FaDatabase, FaCode, FaCloud, FaRobot, FaDesktop, FaServer } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Load the ResumeViewer component only on client-side
const ResumeViewer = dynamic(() => import('../components/ResumeViewer'), {
  ssr: false,
});

// Time counter component to display duration since start date
const TimeCounter = ({ startDate }) => {
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const calculateDuration = () => {
      const start = new Date(startDate);
      const now = new Date();
      
      const diff = Math.floor((now - start) / 1000); // difference in seconds
      
      const years = Math.floor(diff / (60 * 60 * 24 * 365));
      const months = Math.floor((diff % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
      const days = Math.floor((diff % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
      const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((diff % (60 * 60)) / 60);
      const seconds = Math.floor(diff % 60);
      
      const formatNum = num => num.toString().padStart(2, '0');
      
      let durationText = '';
      if (years > 0) {
        durationText += `${years}y `;
      }
      if (months > 0 || years > 0) {
        durationText += `${months}m `;
      }
      durationText += `${days}d ${formatNum(hours)}:${formatNum(minutes)}:${formatNum(seconds)}`;
      
      setDuration(durationText);
    };
    
    calculateDuration();
    const timer = setInterval(calculateDuration, 1000); // Update every second
    
    return () => clearInterval(timer);
  }, [startDate]);

  return <span className="text-code-gray ml-2">({duration})</span>;
};

// Job duration component to display duration between start and end dates
const JobDuration = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  const diff = Math.floor((end - start) / 1000); // difference in seconds
  
  const years = Math.floor(diff / (60 * 60 * 24 * 365));
  const months = Math.floor((diff % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
  const days = Math.floor((diff % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
  
  let durationText = '';
  if (years > 0) {
    durationText += `${years}y `;
  }
  if (months > 0 || years > 0) {
    durationText += `${months}m `;
  }
  
  return <span className="text-code-gray ml-2">({durationText})</span>;
};

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
  team: "Core AI Division",
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
                Hello! I'm Mohaimen Khan, a Senior Software Engineer at Microsoft working in the Core AI division. 
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
                  <p className="text-code-blue font-mono">
                    Senior Software Engineer (L62-L63), Core AI Division
                  </p>
                  <p className="text-gray-400 text-sm mb-2">
                    August 2022 - Present <TimeCounter startDate="2022-08-01" />
                  </p>
                  <p className="text-gray-300">
                    Working on developer productivity and AI-driven solutions, including advancements in 
                    generative AI that enhance code context for GitHub Copilot.
                    Patented algorithm to reduce false positives in code generation, improving code quality
                    and developer efficiency.
                  </p>
                </div>

                <div className="border-l-4 border-code-green pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">Amazon</h3>
                  <p className="text-code-green font-mono">Software Engineer (L4), Amazon Learning Products</p>
                  <p className="text-gray-400 text-sm mb-2">
                    October 2021 - August 2022 <JobDuration startDate="2021-10-01" endDate="2022-08-01" />
                  </p>
                  <p className="text-gray-300">
                    Worked on the Amazon Learning Products team, building tools to enable learning across any 
                    platform, device, or application.
                  </p>
                </div>

                <div className="border-l-4 border-code-blue pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">Microsoft</h3>
                  <p className="text-code-blue font-mono">Software Engineer (L59-L60), Windows Packaging and Updates</p>
                  <p className="text-gray-400 text-sm mb-2">
                    August 2020 - October 2021 <JobDuration startDate="2020-08-01" endDate="2021-10-01" />
                  </p>
                  <p className="text-gray-300">
                    Worked on the Windows updates and packaging team, providing a platform to validate, test, and 
                    package windows updates before they are released to the public. 
                  </p>
                </div>
                
                <div className="border-l-4 border-code-yellow pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">RBC Amplify</h3>
                  <p className="text-code-yellow font-mono">Software Engineering Intern</p>
                  <p className="text-gray-400 text-sm mb-2">
                    May 2019 - August 2019 <JobDuration startDate="2019-05-01" endDate="2019-08-31" />
                  </p>
                  <p className="text-gray-300">
                    Developed an AI-powered rental bidding platform allowing tenants to bid on properties 
                    before public listing.
                    Patented AI model for accurate rental price prediction, achieving 90% accuracy.
                    Link: <a href="https://patents.google.com/patent/US20210049677A1" target="_blank" rel="noopener noreferrer" className="text-code-blue hover:underline">Google Patent</a>
                  </p>
                </div>
                
                <div className="border-l-4 border-code-orange pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">TELUS</h3>
                  <p className="text-code-orange font-mono">Software Engineering Intern</p>
                  <p className="text-gray-400 text-sm mb-2">
                    January 2019 - May 2019 <JobDuration startDate="2019-01-01" endDate="2019-05-01" />
                  </p>
                  <p className="text-gray-300">
                    Utilized machine learning to detect and resolve network bottlenecks, enhancing telecom 
                    network performance.
                  </p>
                </div>
                
                <div className="border-l-4 border-code-purple pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">BlueCat Networks</h3>
                  <p className="text-code-purple font-mono">Software Engineering Intern</p>
                  <p className="text-gray-400 text-sm mb-2">
                    May 2018 - December 2018 <JobDuration startDate="2018-05-01" endDate="2018-12-31" />
                  </p>
                  <p className="text-gray-300">
                    Automated virtual machine deployments, gaining practical experience in cloud computing 
                    and DevOps practices.
                  </p>
                </div>
                
                <div className="border-l-4 border-code-pink pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">BMO Financial Group</h3>
                  <p className="text-code-pink font-mono">Data Analyst</p>
                  <p className="text-gray-400 text-sm mb-2">
                    July 2017 - September 2017 <JobDuration startDate="2017-07-01" endDate="2017-09-30" />
                  </p>
                  <p className="text-gray-300">
                    Created SQL queries to analyze data from 900+ branches for the Information Management department.
                    Identified 5 major transaction processing delays through data anomaly research.
                    Developed an AngularJS web application for employee surveys reaching 50 staff members.
                  </p>
                </div>
                
                <div className="border-l-4 border-code-red pl-6 py-2">
                  <h3 className="text-xl font-semibold text-white">Legal Aid Ontario</h3>
                  <p className="text-code-red font-mono">IT Intern</p>
                  <p className="text-gray-400 text-sm mb-2">
                    June 2016 - September 2016 <JobDuration startDate="2016-06-01" endDate="2016-09-30" />
                  </p>
                  <p className="text-gray-300">
                    Created Python unit tests and tested software bugs after installing law-software on 600 computers across Ontario.
                    Assisted in upgrading computers from 24 provincial offices remotely to Microsoft Office 2013.
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
            
            <ResumeViewer pdfUrl="../Mohaimen_Khan_Resume.pdf" />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}