import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaAws,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiSpringboot,
  SiPostman,
  SiGooglecloud,
  SiTypescript,
} from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";
import { SiUipath } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiFastapi } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaMicrosoft } from "react-icons/fa";
import { RiClaudeFill } from "react-icons/ri";
import { SiSwagger } from "react-icons/si";
import { SiDatabricks } from "react-icons/si";
import { SiApacheairflow } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";


export const personalInfo = {
  name: "Ivan Caringal",
  title: "AI Automation Engineer",
  email: "ivancaringalwork@gmail.com",
  phone: "09624544106",
  location: "Ortigas Center, Pasig, Philippines",

  linkedin: "https://www.linkedin.com/in/ivan-p-caringal-70aa00343/",
  github: "https://github.com/Ivan-Caringal",

  resumeLink: "/IvanCaringalResume.pdf",

  bio: "AI Automation Engineer experienced in developing intelligent automation solutions and integrating AI capabilities into enterprise systems. Skilled in Python, Microsoft Azure AI Foundry, RPA, API integration, and data engineering. Experienced in building multi-agent workflows, serverless integrations, data pipelines, and scalable automation solutions.",

  shortBio: "I build intelligent systems through AI and automation."
};


export const education = [
  {
    institution: "Batangas State University",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "Aug 2021 – July 16, 2025",
    score: "GWA: 1.7",
  },
];

export const projects = [
  {
    title: "AI Invoice Processing Portal",
    tech: ["React JS", "Fast Api", "Microsoft Foundry", "Ai Orchestration", "Python"],
    description: [
    <>
      Built an{" "}
      <span className="text-text-primary font-medium">
        AI-powered invoice processing portal
      </span>{" "}
      using Microsoft Foundry AI Agents to automate document extraction and
      three-way matching.
    </>,
    <>
      Implemented{" "}
      <span className="text-text-primary font-medium">
        agent orchestration and human-in-the-loop approval
      </span>{" "}
      with real-time workflow monitoring and approval decisions.
    </>,
    ],
    date: "",
    githubLink: "https://github.com/Ivan-Caringal/Microsoft-Foundry-Multi-Agent-Workflow-invoice_processing-main",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
    image: "/invoice-workflow.png",
  },
  {
    title: "AI Powered Legal Document Creator",
    tech: ["React.js", "FastAPI", "Cerebras AI", "REST API", "Python"],
    description: [
    <>
      Integrated{" "}
      <span className="text-text-primary font-medium">
        conversational AI
      </span>{" "}
      to gather requirements and generate customized legal agreements.
    </>,
    <>
      Implemented automated document workflows with live previews, editing, and downloads.
    </>,
    ],
    date: "",
    githubLink: "https://github.com/Ivan-Caringal/prelegal-main",
    category: "AI",
    icon: <FaCode size={24} className="text-accent-1" />,
    image: "/prelegal-automation.png",
  },
  {
    title: "Crypto Prediction Portal",
    tech: ["React", "Django Rest Framework", "Machine Learning", "Tensor Flow"],
    description: [
      <>
        Developed an{" "}
        <span className="text-text-primary font-medium">
          end-to-end cryptocurrency prediction platform
        </span>{" "}
        using Django, React, and Scikit-learn.
      </>,
      <>
        Built{" "}
        <span className="text-text-primary font-medium">
          automated data pipelines
        </span>{" "}
        to retrieve and preprocess Yahoo Finance market data.
      </>,
      <>
        Integrated{" "}
        <span className="text-text-primary font-medium">
          machine learning models
        </span>{" "}
        through Django REST APIs to deliver cryptocurrency price forecasts.
      </>,
    ],
    date: "",
    githubLink: "https://github.com/Ivan-Caringal/Stock-Prediction-Portal",
    category: "Blockchain",
    icon: <FaDatabase size={24} className="text-accent-1" />,
    image: "/crypto-prediction-portal.png",
  },
];



export const skills = {
  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "PowerShell", icon: <TbBrandPowershell /> },
  ],

  AIAutomation: [
    { name: "Azure AI Foundry", icon: <VscAzure /> },
    { name: "AI Agents", icon: <VscAzure /> },
    { name: "Azure Functions", icon: <VscAzure /> },
    { name: "Power Automate", icon: <FaMicrosoft /> },
    { name: "REST APIs", icon: <SiSwagger  /> },
    { name: "UI Path", icon: <SiUipath  /> },
    { name: "Claude", icon: <RiClaudeFill /> },
  ],

  DataEngineering: [
    { name: "Databricks", icon: <SiDatabricks  /> },
    { name: "Microsoft Fabric", icon: <FiDatabase  /> },
    { name: "Airflow", icon: <SiApacheairflow  /> },
    { name: "Pandas", icon: <SiPandas  /> },
  ],
  
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "REF Framework", icon: <SiUipath /> },
    { name: "Django", icon: <DiDjango  /> },
    { name: "FastAPI", icon: <SiFastapi  /> },
    
  ],
  toolsAndPlatforms: [
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Azure", icon: <VscAzure  /> },
    { name: "Power Platform", icon: <FaMicrosoft /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Claude Code", icon: <RiClaudeFill /> },

  ],
  coreCompetencies: [
  "Problem Solving",
  "Fast Learner",
  "Adaptability",
  "Analytical Thinking",
  "Strong Work Ethic",
  "Continuous Learning",
  ],
};

export const experience = [
  {
    role: "Junior AI and Automation Engineer",
    organization: "ActimAi",
    duration: "October 2026 – Present",
    points: [
      "Built multi-agent workflows using Microsoft Azure AI Foundry to automate business processes.",
      "Developed serverless Azure Functions to expose tools for AI agent integration.",
      "Integrated AI agents with legacy RPA workflows for invoice processing and IT ticket management."
    ],
  },
  {
    role: "Junior Automation Engineer",
    organization: "ActimAi",
    duration: "April 2026 – October 2026",
    points: [
      "Built Python-based migration pipelines using REST APIs to migrate 1,500+ processes, 20K+ assets, 1K+ triggers, and 1K+ queues from on-premises to cloud Orchestrator.",
      "Developed reusable Python API libraries and UiPath workflows for scheduled and API-triggered automations.",
      "Maintained production automation reliability through troubleshooting, root-cause analysis, and orchestration issue resolution.",
      "Resolved legacy workflow and package compatibility issues through dependency analysis and version upgrades or downgrades."
    ]
  },
  // {
  //   role: "Junior Partner",
  //   organization: "The Apex Circle (TAC)",
  //   duration: "Jan 2025 – Present",
  //   points: [
  //     "Participated in over 15 hackathons and technical events, collaborating with peers to build innovative solutions.",
  //     "Mentored juniors by sharing knowledge, guiding them in projects, and fostering a strong tech community.",
  //   ],
  // },
  {
    role: "Project Control Services (Business Intelligence Developer)",
    organization: "Accenture",
    duration: "October 2025 – April 2026",
    points: [
      "Developed SQL queries and ETL pipelines using Power BI Dataflows, integrating data from SQL Server, SharePoint, and Excel.",
      "Transformed and modeled data using Power Query and DAX, designing star schemas for ERP, CRM, and staffing analytics.",
      "Migrated Excel dashboards to Power BI and automated reporting workflows using Power Automate and Power BI Service."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    organization: "Geographic Information System Application Development Center",
    duration: "January 2025 – April 2025",
    points: [
      "Developed a community-based monitoring and mapping web application using Django, implementing role-based authentication and report submission workflows.",
      "Designed responsive UI/UX interfaces using Figma, HTML, CSS, Bootstrap, and JavaScript."
    ]
  },

];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
};
