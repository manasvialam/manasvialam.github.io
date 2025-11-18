import React, { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  X,
  Layers,
  GraduationCap,
  Sparkles,
  Zap,
} from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});

  const [selectedExp, setSelectedExp] = useState(null);   


  const allSkills = [
    // Programming Languages
    { name: "Python", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "R", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
    { name: "SQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },

    // Frontend & Web
    { name: "Angular", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Flask", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },

    // Machine Learning & Data Science
    { name: "Numpy", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Pandas", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "TensorFlow", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
    { name: "Sklearn", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "OpenCV", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "Matplotlib", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
    { name: "Seaborn", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/seaborn/seaborn-original.svg" },
    { name: "NLTK", logoUrl: "https://placehold.co/40x40/4096c4/FFFFFF?text=NLTK" },
    { name: "Langchain", logoUrl: "https://placehold.co/40x40/36AB3D/FFFFFF?text=LC" },

    // Databases & Big Data
    { name: "PostgreSQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "ChromaDB", logoUrl: "https://placehold.co/40x40/3E8652/FFFFFF?text=CDB" },
    { name: "Hadoop", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
    { name: "Tableau", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg" },

    // DevOps & MLOps
    { name: "Docker", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
    { name: "Git", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Bitbucket", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" },
    { name: "DVC", logoUrl: "https://placehold.co/40x40/017373/FFFFFF?text=DVC" },
    { name: "MLFlow", logoUrl: "https://placehold.co/40x40/1B98E0/FFFFFF?text=MLF" },
    { name: "Insomnia", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg" },
  ];
  
  const education = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "State University of Technology",
      year: "2020 - 2024",
      details: "Specialized in AI Ethics and Large Language Models.",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      degree: "M.S. in Software Engineering",
      institution: "Metropolitan Institute of Science",
      year: "2018 - 2020",
      details: "Thesis on scalable database architecture.",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  const projects = [
    {
      title: "Predictive Modeling Platform",
      description: "Developed a platform using Python and Flask to deploy various machine learning models with real-time feedback.",
      tags: ["Python", "Flask", "ML", "Deployment"],
      link: "#",
    },
    {
      title: "Decentralized Voting System",
      description: "Implemented a secure, blockchain-based voting system prototype using Solidity and React.",
      tags: ["Blockchain", "Solidity", "React", "Security"],
      link: "#",
    },
  ];

const experiences = [
    {
      title: "Machine Learning Engineer",
      organization: "Exponential AI",
      period: "Nov 2024 – Present",
      location: "Hyderabad, India",
      icon: <Briefcase className="w-5 h-5" />,
      logoUrl: "/expo.jpeg", // ← in public folder
      highlights: [
        "Leading a 10-member team building LLM-powered RAG systems preventing $20M+ claim denials yearly",
        "Deployed custom embedding + reranker pipelines hitting 98.2% accuracy in production",
        "Built intelligent email & multi-format parser cutting processing time by 89%",
        "Systems live at Fortune 500 healthcare and $2B+ Medicaid platforms across the US"
      ]
    },
    {
      title: "AI Research Intern",
      organization: "Harvard Medical School – Shafiee Lab",
      period: "Feb 2024 – Jul 2024",
      location: "Boston, USA",
      icon: <Building2 className="w-5 h-5" />,
      logoUrl: "public/harvard.png",
      highlights: [
        "Co-invented SPyDERMAN — GAN-based smartphone diagnostics for Hepatitis C (Science Advances 2024)",
        "Developed VISTA — electricity-free AI-powered viral testing cartridge (Advanced Materials Technologies 2025)",
        "Achieved 94.59% accuracy detecting HCV at 574 IU/ml — works in areas with no labs or power",
        "Presented AI-for-IVF work at ASRM 2024"
      ]
    },
    {
      title: "Full-Stack Intern",
      organization: "Fidelity Investments",
      period: "Jun 2023 – Aug 2023",
      location: "Bengaluru, India",
      icon: <Briefcase className="w-5 h-5" />,
      logoUrl: "public/Fidelity-Logo.png",
      highlights: [
        "Led a team of 15 interns to merge 4 internal platforms into one unified NextGen UI",
        "Reduced transaction processing time from 8–10 minutes to under 3 minutes (90% efficiency gain)",
        "Built production-ready dashboards used daily by brokerage operations teams",
        "Presented to senior leadership and received outstanding rating"
      ]
    },
    {
      title: "Data Science Intern",
      organization: "Exposys Data Labs",
      period: "Oct 2022",
      location: "Bengaluru, India",
      icon: <Briefcase className="w-5 h-5" />,
      logoUrl: "public/exposys.jpeg",
      highlights: [
        "Developed Early Diabetes Prediction model on 10,000+ patient records",
        "Performed full EDA + feature engineering to reveal key risk patterns",
        "Achieved 99.2% accuracy using Random Forest — best among all classifiers tested",
        "Built complete end-to-end ML pipeline ready for deployment"
      ]
    },
    {
      title: "Web Development Intern",
      organization: "Sonata Software",
      period: "Feb 2022 – May 2022",
      location: "Bengaluru, India",
      icon: <Briefcase className="w-5 h-5" />,
      logoUrl: "public/Sonata_Software.png",
      highlights: [
        "Built fully responsive heritage preservation website for INTACH Bangalore with 360° virtual tours",
        "Led front-end development using HTML, CSS, JavaScript, and Bootstrap",
        "Collaborated with team of 8 to deliver accessible platform promoting Indian cultural heritage",
        "Live website → https://www.intachblr.org/ulsoorsomeshwara/"
      ]
    }
  ];

  const achievements = [
    "Recipient of the National Research Fellowship (2024).",
    "Led a team of 5 engineers to successfully launch a major product feature.",
    "Mentored junior researchers on effective data visualization techniques.",
    "Published 4 papers in top-tier conferences.",
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
    { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2022" },
  ];

  const publications = [
    {
      title: "Automated, Deep Learning-Enabled Immunoassay Microfluidic Cartridge for Viral Pathogen Detection",
      authors: "Joseph Michael Hardie, Sungwan Kim, Zehua Yin, et al.",
      venue: "Advanced Materials Technologies",
      year: "2025",
      description:
        "We present VISTA, a low-cost, electricity-free microfluidic cartridge paired with a deep learning-enabled smartphone app for automated ELISA diagnostics. Powered by an adversarial neural network...",
      tags: ["AI", "Microfluidics", "Diagnostics"],
      link: "#",
      imageUrl: "https://placehold.co/200x100/D3E0FB/1E40AF?text=AI+Cartridge", 
    },
    {
      title: "Lorem Ipsum Research Study on AI",
      authors: "John Doe, Jane Smith, et al.",
      venue: "Journal of Advanced AI Research",
      year: "2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam, consectetur adipiscing elit.",
      tags: ["AI", "Research", "Deep Learning"],
      link: "#",
      imageUrl: "https://placehold.co/200x100/D3E0FB/1E40AF?text=AI+Research",
    },
  ];



//   useEffect(() => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         const id = entry.target.id;

//         // 1. Trigger fade-in as soon as any part enters the viewport
//         if (entry.isIntersecting) {
//           setIsVisible((prev) => ({ ...prev, [id]: true }));
//         }

//         // 2. Update active nav when section takes up a good portion of the screen
//         if (entry.intersectionRatio > 0.2) {
//           setActiveSection(id);
//         }
//       });
//     },
//     {
//       threshold: [0, 0.1, 0.2, 0.3, 0.5], // multiple thresholds for better control
//       rootMargin: "-10% 0px -20% 0px", // reduced bottom margin drastically
//     }
//   );

//   document.querySelectorAll("section[id]").forEach((section) => {
//     observer.observe(section);
//   });

//   // Also force-show the last section if user has scrolled to bottom
//   const handleScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
//       setIsVisible((prev) => ({ ...prev, "contact": true }));
//       setActiveSection("contact");
//     }
//   };
//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     observer.disconnect();
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

useEffect(() => {
  // Hero is always visible
  setIsVisible({ hero: true });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  document.querySelectorAll("section[id]").forEach((section) => {
    if (section.id !== "hero") observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

// ← ADD THIS (fixes modal + background scroll forever)
useEffect(() => {
  if (selectedExp) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return () => {
    document.body.style.overflow = "unset";
  };
}, [selectedExp]);

  const NavLink = ({ href, children }) => {
    const sectionId = href.substring(1);
    const isActive = activeSection === sectionId;
    return (
      <a
        href={href}
        className={`text-xs font-medium transition-all duration-200 
          ${
            isActive
              ? "text-blue-700 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300"
          }
          py-1 whitespace-nowrap
        `}
        onClick={() => setActiveSection(sectionId)}
      >
        {children}
      </a>
    );
  };

  const getSectionClass = (id) =>
    `py-20 px-4 transition-all duration-1000 ease-out 
    ${
      isVisible[id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`;
    
    // Helper component for content cards
    const Card = ({ title, children, className = "" }) => (
      <div className={`bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 ${className}`}>
        {title && <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>}
        {children}
      </div>
    );

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-blue-50 via-sky-50 to-white">
      {/* Navigation Bar - FIXED: Hidden on mobile, visible on md: and above */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-md hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl font-extrabold text-gray-800 tracking-tight md:mb-0">
            Manasvi Alam
          </h1>
          <div className="flex gap-4 overflow-x-auto py-1 md:py-0 justify-center items-center">
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#publications">Publications</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#achievements">Achievements</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Adjusted pt-28 to pt-16 since the nav bar is now hidden on mobile */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16 md:pt-20">
        <div className="max-w-5xl w-full">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Text Content - Left */}
            <div className="text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight 
                bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Manasvi Alam
              </h1>

              <p className="text-xl md:text-2xl font-medium text-gray-700 tracking-tight">
                Machine Learning Engineer & Data Scientist
              </p>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                I love building intelligent systems that solve real problems — from production-grade LLM pipelines to creative deep learning research. 
                Passionate about clean code, scalable deployments, and pushing models from prototype to impact.
              </p>

              {/* Social Icons - Perfectly spaced & sized */}
              <div className="flex gap-5 justify-center md:justify-start pt-4">
                <a
                  href="https://github.com/manasvialam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-gray-700 hover:text-blue-600"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/manasvi-alam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:manasvialam03@gmail.com"
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-gray-700 hover:text-blue-600"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Photo - Right */}
            <div className="order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-white shadow-2xl">
                  <img
                    src="/profile.png" 
                    alt="Manasvi Alam"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={getSectionClass("about")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            About Me
          </h2>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a Machine Learning Engineer currently working full-time, building and shipping LLM-powered systems and end-to-end ML pipelines used by large-scale clients every day.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Before this, I spent six months as an AI Research Intern at Harvard Medical School’s Shafiee Lab — an incredible experience that blended deep learning research with real-world engineering challenges and resulted in publications I'm really proud of.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I graduated with a B.Tech in Computer Science (AI & Data Science specialization) from SASTRA University, where I served as Vice-Chairperson of the Entrepreneurship Cell, won national hackathons, and got deeply involved in building things that matter.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Outside work, I enjoy mentoring students, staying up-to-date with the latest in LLMs and vision models, volunteering, and occasionally trying to explain transformers to my family over chai. 
              Always open to interesting conversations — feel free to reach out!
            </p>
          </div>
        </div>
      </section>
      
      {/* Experience Section - IMPROVED MOBILE TIMELINE */}
      {/* ====== NEW INTERACTIVE EXPERIENCE SECTION ====== */}
      <section id="experience" className={getSectionClass("experience")}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent h-full rounded-full"></div>

            <div className="space-y-12 md:space-y-20">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"} cursor-pointer`}
                  onClick={() => setSelectedExp(exp)}
                >
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 hover:scale-125 transition-all duration-300"></div>

                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${idx % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:scale-[1.03] group">
                      <div className="flex items-start gap-4">
                        {exp.logoUrl && (
                          <img src={exp.logoUrl} alt={exp.organization} className="w-12 h-12 rounded-lg shadow-md flex-shrink-0 object-contain bg-white p-1" />
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition">{exp.title}</h3>
                          <p className="text-blue-600 font-medium">{exp.organization}</p>
                          <p className="text-sm text-gray-500 mt-1">{exp.period} • {exp.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MODAL */}
        {/* SIMPLE MODAL - JUST WORKS, NO PORTAL, NO DRAMA */}
        {selectedExp && (
          <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }} // dark backdrop
            onClick={() => setSelectedExp(null)}
          >
            {/* Click outside or on backdrop closes it */}
            <div 
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8 relative"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Close X button */}
              <button 
                onClick={() => setSelectedExp(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Logo */}
              {selectedExp.logoUrl && (
                <div className="flex justify-center mb-4">
                  <img 
                    src={selectedExp.logoUrl} 
                    alt={selectedExp.organization}
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                </div>
              )}

              {/* Title & Company */}
              <h3 className="text-2xl font-bold text-center text-gray-800">
                {selectedExp.title}
              </h3>
              <p className="text-center text-blue-600 font-semibold mt-1">
                {selectedExp.organization}
              </p>
              <p className="text-center text-sm text-gray-500 mt-1 mb-6">
                {selectedExp.period} • {selectedExp.location}
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 text-gray-700">
                {selectedExp.highlights.map((point, i) => (
                  <li key={i} className="flex">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* Skills Section - FIXED: Icons stay in full color */}
      <section id="skills" className={getSectionClass("skills")}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Technical Skills
          </h2>
          <Card className="p-8">
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 justify-center">
              {allSkills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center justify-start h-20 w-16 group hover:scale-105 transition-transform duration-300 p-1"
                  title={skill.name}
                >
                  <img
                    src={skill.logoUrl}
                    alt={`${skill.name} Logo`}
                    // Removed grayscale and filter classes to keep icons colorful
                    className="h-10 w-10 object-contain mb-1 transition-all duration-300" 
                  />
                  <p className="text-xs font-medium text-gray-600 group-hover:text-blue-700 text-center leading-tight">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
      
      {/* Education Section - IMPROVED MOBILE TIMELINE */}
      <section id="education" className={getSectionClass("education")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Education
          </h2>
          <div className="space-y-6 relative">
            {/* Timeline Line: Adjusted left-alignment for mobile/md */}
            <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-blue-400 transform md:-translate-x-1/2"></div>
            
            {education.map((edu, idx) => (
               <div
                key={idx}
                // Force left alignment on mobile, only alternate on medium screens
                className={`flex justify-start ${
                  idx % 2 !== 0 ? "md:justify-start" : "md:justify-end"
                } relative`}
              >
                <div
                  className={`w-full md:w-1/2 p-3 ${
                    idx % 2 !== 0 ? "md:pr-8" : "md:pl-8"
                  } rounded-xl`}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:scale-[1.02] transform origin-center">
                    {/* Circle Icon: Adjusted position to match left-aligned line on mobile */}
                    <div
                      className={`absolute top-0 transform -translate-y-1/2 
                        left-[14px] md:left-1/2 md:translate-x-[-15px]
                        p-1.5 rounded-full bg-blue-600 text-white ring-6 ring-blue-50 z-10`}
                    >
                      {edu.icon}
                    </div>

                    <p className="text-xs text-gray-500 mb-1 font-semibold pt-3">
                      {edu.year}
                    </p>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-700 text-sm leading-normal">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Publications Section - IMPROVED MOBILE STACKING AND IMAGE SIZING */}
      <section id="publications" className={getSectionClass("publications")}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Recent Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Responsive Flex container: stacks vertically on mobile (flex-col), side-by-side on md: (md:flex-row) */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                  
                  {/* Publication Image/Cover */}
                  {pub.imageUrl && (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" 
                       // Responsive image sizing
                       className="flex-shrink-0 mx-auto md:mx-0 w-full sm:w-64 md:w-40 h-20 md:h-20"
                    >
                      <img
                        src={pub.imageUrl}
                        alt={`${pub.title} Cover`}
                        className="w-full h-full object-cover rounded-md shadow-lg border border-gray-200" 
                      />
                    </a>
                  )}

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1 leading-tight">
                        {pub.title}
                      </h3>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors self-start shadow-sm ml-4 flex-shrink-0"
                        title="View Publication"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-1 italic">
                      {pub.authors}
                    </p>
                    <p className="text-sm font-bold text-blue-600 mb-2">
                      {pub.venue}, {pub.year}
                    </p>
                    <p className="text-sm text-gray-700 leading-normal mb-3 line-clamp-3">
                      {pub.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={getSectionClass("projects")}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <Card key={idx} className="hover:scale-[1.01] transform origin-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 leading-normal mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Leadership Section */}
      <section id="achievements" className={getSectionClass("achievements")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Achievements & Leadership
          </h2>
          <Card className="p-8">
            <ul className="space-y-3 list-none p-0">
              {achievements.map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-gray-700">
                  <Sparkles className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={getSectionClass("certifications")}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="flex items-start">
                <Zap className="w-5 h-5 text-blue-600 mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {cert.issuer} - {cert.year}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className={getSectionClass("contact")}>
        <div className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-sky-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-md text-gray-600 mb-8">
            Interested in collaboration or have questions about my research?
            Feel free to reach out—I'd love to chat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm"
              // Ensure href has a valid email address
            >
              <Mail className="w-4 h-4 inline mr-2" /> Send Email
            </a>
            <a
              // REPLACE '#' with the actual URL to your PDF/CV file
              href="/path/to/your/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-gray-700 rounded-full font-semibold shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105 text-sm"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-blue-200 bg-white/70">
        <div className="max-w-5xl mx-auto text-center text-xs text-gray-600">
          <p className="font-medium">
            © 2025 Manasvi Alam.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;