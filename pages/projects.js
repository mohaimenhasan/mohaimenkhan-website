import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "GitHub Copilot Context Enhancement",
    description: "Developed AI-powered solutions to enhance code context understanding in GitHub Copilot, improving the quality and relevance of AI code suggestions.",
    tags: ["AI", "Machine Learning", "TypeScript", "Python"],
    githubUrl: null, // Proprietary
    liveUrl: null,
    codeSnippet: null
  },
  {
    title: "Spotify Music Trend Predictor",
    description: "Built a machine learning model that predicts music trend popularity using Spotify data, with visualization of prediction confidence and feature importance.",
    tags: ["React.js", "CSS", "Express.js", "Python", "TensorFlow", "Spotify API", "Data Visualization"],
    githubUrl: "https://github.com/mohaimenhasan/Crystal-Ball-Music-Trend-Predictor-Hack-The-6",
    liveUrl: "https://mohaimenhasan.github.io/Crystal-Ball-Music-Trend-Predictor-Hack-The-6/",
    codeSnippet: `import tensorflow as tf
import numpy as np
from spotify_api import SpotifyClient

class MusicTrendPredictor:
  def __init__(self):
    self.model = tf.keras.Sequential([
      tf.keras.layers.Dense(128, activation='relu'),
      tf.keras.layers.Dropout(0.2),
      tf.keras.layers.Dense(64, activation='relu'),
      tf.keras.layers.Dense(1, activation='sigmoid')
    ])
    self.model.compile(optimizer='adam', 
                      loss='binary_crossentropy',
                      metrics=['accuracy'])
    
  def predict_trend(self, track_features):
    """Predicts if a track will trend based on audio features"""
    prediction = self.model.predict(np.array([track_features]))
    return {
      'will_trend': bool(prediction[0] > 0.7),
      'confidence': float(prediction[0])
    }`
  },
  {
    title: "Crime Rate Predictor in Toronto",
    description: "Created a machine learning model that predicts crime rates in Toronto, using data from the Toronto Police Service and the City of Toronto Open Data Portal.",
    tags: ["Jupyter Notebook", "Python", "Machine Learning"],
    githubUrl: "https://github.com/mohaimenhasan/Toronto-Crime-Predictor",
    liveUrl: null,
    codeSnippet: null
  },
  {
    title: "Flight Delay Predictor",
    description: "Developed a machine learning model that predicts flight delays at Toronto Pearson International Airport, using historical flight data from the Bureau of Transportation Statistics.",
    tags: ["Python", "numpy", "pandas", "Time Series"],
    githubUrl: "",
    liveUrl: null,
    codeSnippet: null
  },
  {
    title: "Therapy Chatbot",
    description: "Built a chatbot on WhatsApp with LLM that provides mental health support and resources, using CBT techniques to analyze user input and generate empathetic responses.",
    tags: ["JavaScript", "Node.js", "Twilio API", "LLM"],
    githubUrl: "https://github.com/mohaimenhasan/TheraBot",
    liveUrl: null,
    codeSnippet: null
  },
  {
    title: "Music based Mood Analyzer",
    description: "App that tries to predict your mood based on your Spotify playlist and suggests songs to vibe accordingly.",
    tags: ["React Native", "NLP", "Spotify API", "Node.js"],
    githubUrl: "https://github.com/mohaimenhasan/Mood-Analyzer",
    liveUrl: "https://mohaimenhasan.github.io/Mood-Analyzer/",
    codeSnippet: null
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Projects() {
  return (
    <Layout title="Projects | Mohaimen Khan" description="Explore Mohaimen Khan's portfolio of software engineering projects, showcasing skills in AI, full-stack development, and cloud computing.">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            <span className="text-code-green">{"<"}</span>
            Projects & Experience
            <span className="text-code-green">{"/>"}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in software development, AI, and cloud computing. 
            These projects represent my journey from internships to my current role at Microsoft.
          </p>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-code-green mr-2">#</span> Featured Projects
          </h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                codeSnippet={project.codeSnippet}
              />
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-800 rounded-xl p-8 border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-code-yellow mr-2">&gt;</span> Want to collaborate?
          </h2>
          
          <p className="text-gray-300 mb-6">
            I'm always open to discussing new projects, innovative ideas, or opportunities to collaborate.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <motion.a 
            href="/portfolio/contact"
            className="inline-block px-6 py-3 bg-code-blue text-white rounded font-medium hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </Layout>
  );
}