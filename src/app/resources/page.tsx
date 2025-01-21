'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Swoosh } from '@/components/ui/Swoosh';
import { cn } from '@/lib/utils';

interface Resource {
  name: string;
  description: string;
  url: string;
  free: boolean;
  details?: {
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
    format: string[];
    timeCommitment: string;
    prerequisites?: string[];
    topics: string[];
  };
}

interface ResourceSection {
  title: string;
  items: Resource[];
}

interface Category {
  name: string;
  description: string;
  resources: ResourceSection[];
}

interface FilterOptions {
  discipline: string[];
  difficulty: string[];
  format: string[];
  timeCommitment: string[];
  free: boolean | null;
}

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false);
  const [showFormatDropdown, setShowFormatDropdown] = useState(false);
  const [showDisciplineDropdown, setShowDisciplineDropdown] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<FilterOptions>({
    discipline: [],
    difficulty: [],
    format: [],
    timeCommitment: [],
    free: null
  });

  const categories: Category[] = [
    {
      name: "Web Development",
      description: "Frontend and backend development resources",
      resources: [
        {
          title: "Frontend Development",
          items: [
            {
              name: "freeCodeCamp - Responsive Web Design",
              description: "Learn HTML, CSS, and responsive design principles",
              url: "https://www.freecodecamp.org/learn/responsive-web-design/",
              free: true,
              details: {
                difficulty: "Beginner",
                format: ["Interactive Tutorials", "Projects", "Certification"],
                timeCommitment: "40-80 hours",
                topics: [
                  "HTML5",
                  "CSS3",
                  "Flexbox",
                  "CSS Grid",
                  "Responsive Design",
                  "Accessibility"
                ]
              }
            },
            {
              name: "JavaScript.info",
              description: "Modern JavaScript Tutorial",
              url: "https://javascript.info/",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "Interactive Examples", "Exercises"],
                timeCommitment: "60-80 hours",
                topics: [
                  "JavaScript Fundamentals",
                  "DOM Manipulation",
                  "Async Programming",
                  "Object-Oriented JS",
                  "Modern JS Features"
                ]
              }
            },
            {
              name: "React Documentation",
              description: "Official React documentation and tutorials",
              url: "https://react.dev/learn",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "Interactive Examples", "Projects"],
                timeCommitment: "40-60 hours",
                prerequisites: ["JavaScript", "HTML", "CSS"],
                topics: [
                  "React Fundamentals",
                  "Hooks",
                  "State Management",
                  "Component Patterns",
                  "Performance Optimization"
                ]
              }
            },
            {
              name: "Next.js Documentation",
              description: "Learn Next.js from the official docs",
              url: "https://nextjs.org/docs",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "Examples", "Templates"],
                timeCommitment: "30-50 hours",
                prerequisites: ["React", "JavaScript"],
                topics: [
                  "Server Components",
                  "Routing",
                  "Data Fetching",
                  "API Routes",
                  "Deployment"
                ]
              }
            }
          ]
        },
        {
          title: "Backend Development",
          items: [
            {
              name: "Node.js Documentation",
              description: "Official Node.js documentation and guides",
              url: "https://nodejs.org/docs/latest/api/",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "API Reference", "Examples"],
                timeCommitment: "40-60 hours",
                prerequisites: ["JavaScript"],
                topics: [
                  "Node.js Runtime",
                  "Event Loop",
                  "File System",
                  "Streams",
                  "HTTP Server"
                ]
              }
            },
            {
              name: "Express.js",
              description: "Web framework for Node.js",
              url: "https://expressjs.com/",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "Tutorials", "Examples"],
                timeCommitment: "20-30 hours",
                prerequisites: ["Node.js", "JavaScript"],
                topics: [
                  "Routing",
                  "Middleware",
                  "Error Handling",
                  "Database Integration",
                  "Authentication"
                ]
              }
            },
            {
              name: "Django Documentation",
              description: "Python web framework documentation",
              url: "https://docs.djangoproject.com/",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "Tutorials", "Best Practices"],
                timeCommitment: "50-70 hours",
                prerequisites: ["Python"],
                topics: [
                  "Models & ORM",
                  "Views & URLs",
                  "Templates",
                  "Forms",
                  "Authentication",
                  "Admin Interface"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: "Mobile Development",
      description: "Android, iOS, and cross-platform development",
      resources: [
        {
          title: "Android Development",
          items: [
            {
              name: "Android Developers",
              description: "Official Android development documentation",
              url: "https://developer.android.com/courses",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Courses", "Documentation", "Codelabs"],
                timeCommitment: "80-100 hours",
                prerequisites: ["Java/Kotlin"],
                topics: [
                  "Android Studio",
                  "UI Development",
                  "App Components",
                  "Data Storage",
                  "Material Design"
                ]
              }
            },
            {
              name: "Kotlin Documentation",
              description: "Official Kotlin programming language docs",
              url: "https://kotlinlang.org/docs/home.html",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "Interactive Playground", "Examples"],
                timeCommitment: "40-60 hours",
                topics: [
                  "Kotlin Basics",
                  "Object-Oriented Programming",
                  "Coroutines",
                  "Collections",
                  "Android Integration"
                ]
              }
            }
          ]
        },
        {
          title: "Cross-Platform",
          items: [
            {
              name: "Flutter Documentation",
              description: "Google's UI toolkit for mobile, web, and desktop",
              url: "https://docs.flutter.dev/",
              free: true
            },
            {
              name: "React Native Documentation",
              description: "Build native apps using React",
              url: "https://reactnative.dev/docs/getting-started",
              free: true
            }
          ]
        }
      ]
    },
    {
      name: "Data Science & AI",
      description: "Machine learning, data analysis, and artificial intelligence",
      resources: [
        {
          title: "Machine Learning",
          items: [
            {
              name: "Google Machine Learning Crash Course",
              description: "Free course with TensorFlow APIs",
              url: "https://developers.google.com/machine-learning/crash-course",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Video Lectures", "Codelabs", "Exercises"],
                timeCommitment: "15-20 hours",
                prerequisites: ["Python", "Basic Linear Algebra"],
                topics: [
                  "ML Concepts",
                  "TensorFlow",
                  "Neural Networks",
                  "Training Models",
                  "Data Preprocessing"
                ]
              }
            },
            {
              name: "Fast.ai",
              description: "Practical Deep Learning for Coders",
              url: "https://www.fast.ai/",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Video Lectures", "Notebooks", "Projects"],
                timeCommitment: "80-100 hours",
                prerequisites: ["Python", "Basic ML Concepts"],
                topics: [
                  "Deep Learning",
                  "Computer Vision",
                  "NLP",
                  "Model Deployment",
                  "Ethics in AI"
                ]
              }
            }
          ]
        },
        {
          title: "Data Analysis",
          items: [
            {
              name: "Python Data Science Handbook",
              description: "Free online book for data science with Python",
              url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
              free: true
            },
            {
              name: "Kaggle Learn",
              description: "Free courses on data science and machine learning",
              url: "https://www.kaggle.com/learn",
              free: true
            }
          ]
        }
      ]
    },
    {
      name: "Cloud Computing",
      description: "Cloud platforms and DevOps resources",
      resources: [
        {
          title: "Cloud Platforms",
          items: [
            {
              name: "AWS Training",
              description: "Free digital courses for Amazon Web Services",
              url: "https://aws.amazon.com/training/digital/",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Digital Training", "Labs", "Documentation"],
                timeCommitment: "100+ hours",
                topics: [
                  "EC2 & Compute",
                  "S3 & Storage",
                  "Networking",
                  "Security",
                  "Serverless",
                  "Database Services"
                ]
              }
            },
            {
              name: "Microsoft Learn",
              description: "Free Azure cloud learning paths",
              url: "https://learn.microsoft.com/en-us/training/azure/",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Interactive Learning", "Documentation", "Labs"],
                timeCommitment: "80+ hours",
                topics: [
                  "Azure Fundamentals",
                  "Cloud Architecture",
                  "DevOps",
                  "Security",
                  "AI & ML Services"
                ]
              }
            }
          ]
        },
        {
          title: "DevOps",
          items: [
            {
              name: "Docker Documentation",
              description: "Learn containerization with Docker",
              url: "https://docs.docker.com/get-started/",
              free: true
            },
            {
              name: "Kubernetes Documentation",
              description: "Learn container orchestration",
              url: "https://kubernetes.io/docs/tutorials/",
              free: true
            }
          ]
        }
      ]
    },
    {
      name: "Cybersecurity",
      description: "Security, penetration testing, and ethical hacking",
      resources: [
        {
          title: "Security Fundamentals",
          items: [
            {
              name: "PortSwigger Web Security Academy",
              description: "Free web security training",
              url: "https://portswigger.net/web-security",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Interactive Labs", "Documentation", "Exercises"],
                timeCommitment: "60-80 hours",
                topics: [
                  "SQL Injection",
                  "XSS",
                  "CSRF",
                  "Authentication",
                  "Access Control",
                  "Web Security Testing"
                ]
              }
            },
            {
              name: "TryHackMe",
              description: "Learn cyber security through hands-on exercises",
              url: "https://tryhackme.com/",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Interactive Labs", "CTF Challenges", "Tutorials"],
                timeCommitment: "100+ hours",
                topics: [
                  "Network Security",
                  "Web Exploitation",
                  "Cryptography",
                  "Forensics",
                  "Reverse Engineering"
                ]
              }
            }
          ]
        },
        {
          title: "Practice Platforms",
          items: [
            {
              name: "HackTheBox",
              description: "Cybersecurity training platform",
              url: "https://www.hackthebox.com/",
              free: false
            },
            {
              name: "VulnHub",
              description: "Vulnerable machines for practice",
              url: "https://www.vulnhub.com/",
              free: true
            }
          ]
        }
      ]
    },
    {
      name: "UI/UX Design",
      description: "User interface and experience design resources",
      resources: [
        {
          title: "Design Fundamentals",
          items: [
            {
              name: "Google UX Design Professional Certificate",
              description: "Comprehensive UX design course by Google",
              url: "https://www.coursera.org/professional-certificates/google-ux-design",
              free: false,
              details: {
                difficulty: "Beginner",
                format: ["Video Lectures", "Projects", "Certification"],
                timeCommitment: "6 months",
                topics: [
                  "UX Design Process",
                  "User Research",
                  "Wireframing",
                  "Prototyping",
                  "Design Systems",
                  "Usability Testing"
                ]
              }
            },
            {
              name: "Figma Tutorials",
              description: "Official Figma learning resources",
              url: "https://help.figma.com/hc/en-us/categories/360002042553-Tutorials-Guides",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Tutorials", "Documentation"],
                timeCommitment: "Self-paced",
                topics: ["Figma Basics", "Components", "Auto Layout", "Plugins"]
              }
            }
          ]
        }
      ]
    },
    {
      name: "Game Development",
      description: "Game design and development resources",
      resources: [
        {
          title: "Game Engines",
          items: [
            {
              name: "Unity Learn",
              description: "Official Unity learning platform",
              url: "https://learn.unity.com/",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Interactive Tutorials", "Projects", "Live Sessions"],
                timeCommitment: "Self-paced",
                topics: [
                  "Unity Basics",
                  "C# Programming",
                  "2D/3D Game Development",
                  "Game Design"
                ]
              }
            },
            {
              name: "Unreal Engine Documentation",
              description: "Learn Unreal Engine development",
              url: "https://docs.unrealengine.com/",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "Tutorials", "Sample Projects"],
                timeCommitment: "Self-paced",
                topics: ["Blueprint Visual Scripting", "C++", "3D Modeling"]
              }
            }
          ]
        }
      ]
    },
    {
      name: "Blockchain & Web3",
      description: "Blockchain development and cryptocurrency resources",
      resources: [
        {
          title: "Blockchain Development",
          items: [
            {
              name: "Ethereum.org Developers",
              description: "Official Ethereum development resources",
              url: "https://ethereum.org/developers/",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "Tutorials", "Tools"],
                timeCommitment: "Self-paced",
                topics: [
                  "Smart Contracts",
                  "Solidity",
                  "Web3.js",
                  "DApp Development"
                ]
              }
            },
            {
              name: "CryptoZombies",
              description: "Learn to code blockchain DApps",
              url: "https://cryptozombies.io/",
              free: true,
              details: {
                difficulty: "Beginner",
                format: ["Interactive Tutorial", "Game-based Learning"],
                timeCommitment: "20-30 hours",
                topics: ["Solidity", "Smart Contracts", "Web3"]
              }
            }
          ]
        }
      ]
    },
    {
      name: "DevOps & SRE",
      description: "DevOps practices and Site Reliability Engineering",
      resources: [
        {
          title: "DevOps Fundamentals",
          items: [
            {
              name: "Google Cloud DevOps",
              description: "Learn DevOps practices with Google Cloud",
              url: "https://cloud.google.com/devops",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "Best Practices", "Tools"],
                timeCommitment: "Self-paced",
                topics: [
                  "CI/CD",
                  "Infrastructure as Code",
                  "Monitoring",
                  "SLOs"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: "IoT & Embedded Systems",
      description: "Internet of Things and embedded systems development",
      resources: [
        {
          title: "IoT Development",
          items: [
            {
              name: "Arduino Project Hub",
              description: "Learn Arduino with hands-on projects",
              url: "https://create.arduino.cc/projecthub",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Projects", "Tutorials", "Community"],
                timeCommitment: "Self-paced",
                topics: [
                  "Arduino Programming",
                  "Electronics",
                  "Sensors",
                  "Automation"
                ]
              }
            },
            {
              name: "Raspberry Pi Documentation",
              description: "Official Raspberry Pi learning resources",
              url: "https://www.raspberrypi.org/documentation/",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Documentation", "Projects", "Tutorials"],
                timeCommitment: "Self-paced",
                topics: ["Linux", "Python", "GPIO", "Electronics"]
              }
            }
          ]
        }
      ]
    },
    {
      name: "Product Management",
      description: "Learn product management and strategy",
      resources: [
        {
          title: "Product Management Fundamentals",
          items: [
            {
              name: "Product School Resources",
              description: "Free product management resources and guides",
              url: "https://productschool.com/resources",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Articles", "Webinars", "Templates"],
                timeCommitment: "Self-paced",
                topics: [
                  "Product Strategy",
                  "User Research",
                  "Product Analytics",
                  "Product Launch",
                  "Agile Development"
                ]
              }
            },
            {
              name: "Product Management Guide by Atlassian",
              description: "Comprehensive guide to product management",
              url: "https://www.atlassian.com/agile/product-management",
              free: true,
              details: {
                difficulty: "Beginner",
                format: ["Articles", "Templates", "Best Practices"],
                timeCommitment: "Self-paced",
                topics: [
                  "Product Discovery",
                  "Roadmapping",
                  "Agile Methodologies",
                  "Stakeholder Management"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: "Technical Writing",
      description: "Documentation and technical communication resources",
      resources: [
        {
          title: "Technical Writing Essentials",
          items: [
            {
              name: "Google Technical Writing Courses",
              description: "Learn technical writing from Google",
              url: "https://developers.google.com/tech-writing",
              free: true,
              details: {
                difficulty: "Beginner",
                format: ["Course", "Exercises"],
                timeCommitment: "10-20 hours",
                topics: [
                  "Writing Basics",
                  "Documentation Types",
                  "API Documentation",
                  "Style Guides"
                ]
              }
            },
            {
              name: "Write the Docs",
              description: "Community-driven technical writing resources",
              url: "https://www.writethedocs.org/",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Guides", "Community", "Conference Talks"],
                timeCommitment: "Self-paced",
                topics: [
                  "Documentation Best Practices",
                  "Tool Guides",
                  "Career Growth",
                  "Community Resources"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: "System Design",
      description: "Learn to design scalable systems and architectures",
      resources: [
        {
          title: "System Design Fundamentals",
          items: [
            {
              name: "System Design Primer",
              description: "Comprehensive system design guide",
              url: "https://github.com/donnemartin/system-design-primer",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Documentation", "Examples", "Practice Problems"],
                timeCommitment: "40-60 hours",
                topics: [
                  "Scalability",
                  "Performance",
                  "Latency",
                  "Load Balancing",
                  "Database Design"
                ]
              }
            },
            {
              name: "Grokking System Design",
              description: "Interactive system design course",
              url: "https://www.educative.io/courses/grokking-the-system-design-interview",
              free: false,
              details: {
                difficulty: "Advanced",
                format: ["Interactive Course", "Case Studies"],
                timeCommitment: "30-40 hours",
                prerequisites: ["Programming Experience", "Basic Networking"],
                topics: [
                  "Distributed Systems",
                  "Microservices",
                  "System Requirements",
                  "Real-world Examples"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: "Quality Assurance",
      description: "Software testing and quality assurance resources",
      resources: [
        {
          title: "Testing Fundamentals",
          items: [
            {
              name: "Ministry of Testing",
              description: "Community-driven testing resources",
              url: "https://www.ministryoftesting.com/",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Articles", "Courses", "Community"],
                timeCommitment: "Self-paced",
                topics: [
                  "Manual Testing",
                  "Automation Testing",
                  "Test Strategy",
                  "Performance Testing"
                ]
              }
            },
            {
              name: "Test Automation University",
              description: "Free test automation courses",
              url: "https://testautomationu.applitools.com/",
              free: true,
              details: {
                difficulty: "Intermediate",
                format: ["Video Courses", "Hands-on Practice"],
                timeCommitment: "40-60 hours",
                prerequisites: ["Basic Programming"],
                topics: [
                  "Selenium",
                  "API Testing",
                  "Mobile Testing",
                  "CI/CD Integration"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      name: "Digital Marketing",
      description: "Digital marketing and growth resources",
      resources: [
        {
          title: "Marketing Fundamentals",
          items: [
            {
              name: "Google Digital Garage",
              description: "Free digital marketing courses",
              url: "https://learndigital.withgoogle.com/digitalgarage",
              free: true,
              details: {
                difficulty: "Beginner",
                format: ["Video Courses", "Certification"],
                timeCommitment: "40 hours",
                topics: [
                  "SEO",
                  "Social Media Marketing",
                  "Content Marketing",
                  "Analytics"
                ]
              }
            },
            {
              name: "HubSpot Academy",
              description: "Comprehensive marketing courses",
              url: "https://academy.hubspot.com/",
              free: true,
              details: {
                difficulty: "All Levels",
                format: ["Courses", "Certifications"],
                timeCommitment: "Self-paced",
                topics: [
                  "Inbound Marketing",
                  "Email Marketing",
                  "Content Strategy",
                  "Marketing Analytics"
                ]
              }
            }
          ]
        }
      ]
    }
  ];

  // Filter options derived from all resources
  const filterOptions = {
    discipline: categories.map(cat => cat.name),
    difficulty: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
    format: ['Video Courses', 'Interactive Tutorials', 'Documentation', 'Projects', 'Community'],
    timeCommitment: ['< 10 hours', '10-20 hours', '20-40 hours', '40+ hours', 'Self-paced']
  };

  // Filter resources based on search and filters
  const filterResources = (resources: Resource[], categoryName: string) => {
    return resources.filter(resource => {
      // Search filter
      const searchMatch = !searchQuery || 
        resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Discipline filter
      const disciplineMatch = selectedFilters.discipline.length === 0 ||
        selectedFilters.discipline.includes(categoryName);

      // Difficulty filter
      const difficultyMatch = selectedFilters.difficulty.length === 0 ||
        (resource.details?.difficulty && selectedFilters.difficulty.includes(resource.details.difficulty));

      // Format filter
      const formatMatch = selectedFilters.format.length === 0 ||
        (resource.details?.format && resource.details.format.some(format => selectedFilters.format.includes(format)));

      // Time commitment filter
      const timeMatch = selectedFilters.timeCommitment.length === 0 ||
        (resource.details?.timeCommitment && selectedFilters.timeCommitment.includes(resource.details.timeCommitment));

      // Free/paid filter
      const freeMatch = selectedFilters.free === null || resource.free === selectedFilters.free;

      return searchMatch && disciplineMatch && difficultyMatch && formatMatch && timeMatch && freeMatch;
    });
  };

  // Add a function to check if a category has any matching resources
  const categoryHasMatchingResources = (category: Category) => {
    return category.resources.some(section => 
      filterResources(section.items, category.name).length > 0
    );
  };

  // Add a function to check if a section has any matching resources
  const sectionHasMatchingResources = (section: ResourceSection, categoryName: string) => {
    return filterResources(section.items, categoryName).length > 0;
  };

  const categoryIcons: { [key: string]: React.ReactNode } = {
    "Web Development": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm7.931 9h-2.764a14.67 14.67 0 0 0-1.792-6.243A8.013 8.013 0 0 1 19.931 11zM12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974.172-.01.344-.026.519-.026.179 0 .354.016.53.027zm-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.013 8.013 0 0 1 4.619-6.273zM4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13zm7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972-.182.012-.364.028-.551.028-.186 0-.367-.016-.55-.027zm4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8.005 8.005 0 0 1-4.469 6.201z" />
      </svg>
    ),
    "Mobile Development": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.5 1h-8A2.5 2.5 0 0 0 5 3.5v17A2.5 2.5 0 0 0 7.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
      </svg>
    ),
    "Data Science & AI": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
      </svg>
    ),
    "Cloud Computing": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
    "Cybersecurity": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
    "UI/UX Design": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
    "Game Development": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5S21 10.33 21 11.5z" />
      </svg>
    ),
    "Blockchain & Web3": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
      </svg>
    ),
    "DevOps & SRE": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c.12.22.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5 3.5z" />
      </svg>
    ),
    "IoT & Embedded Systems": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
      </svg>
    ),
    "Product Management": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </svg>
    ),
    "Technical Writing": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.11 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
    ),
    "System Design": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    ),
    "Quality Assurance": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    "Digital Marketing": (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    )
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white pt-32 pb-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 w-full text-blue-50/30">
          <Swoosh />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block p-2 px-4 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6">
            🚀 Level up your tech skills
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Learning Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated collection of the best learning resources to help you master various technology disciplines. Most resources are free!
          </p>
        </motion.div>

        {/* Enhanced Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="bg-white rounded-2xl border-2 border-blue-200 p-6 shadow-lg">
            <div className="flex flex-col gap-6">
              {/* Filter Section */}
              <div className="flex flex-col gap-4 mb-8">
                {/* Search and Filter Bar */}
                <div className="flex flex-wrap gap-4">
                  {/* Search Input */}
                  <div className="flex-grow min-w-[200px]">
                    <input
                      type="text"
                      placeholder="Search resources..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  {/* Filter Dropdowns */}
                  <div className="flex flex-wrap gap-4">
                    {/* Discipline Filter */}
                    <div className="relative min-w-[200px]">
                      <button
                        onClick={() => {
                          setShowDifficultyDropdown(false);
                          setShowFormatDropdown(false);
                          setShowDisciplineDropdown(!showDisciplineDropdown);
                        }}
                        className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-left flex items-center justify-between hover:border-blue-500 transition-colors"
                      >
                        <span className="text-gray-700">Filter by Discipline</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            showDisciplineDropdown ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Difficulty Filter */}
                    <div className="relative min-w-[200px]">
                      <button
                        onClick={() => {
                          setShowDisciplineDropdown(false);
                          setShowFormatDropdown(false);
                          setShowDifficultyDropdown(!showDifficultyDropdown);
                        }}
                        className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-left flex items-center justify-between hover:border-blue-500 transition-colors"
                      >
                        <span className="text-gray-700">Filter by Difficulty</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            showDifficultyDropdown ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Format Filter */}
                    <div className="relative min-w-[200px]">
                      <button
                        onClick={() => {
                          setShowDisciplineDropdown(false);
                          setShowDifficultyDropdown(false);
                          setShowFormatDropdown(!showFormatDropdown);
                        }}
                        className="w-full px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white text-left flex items-center justify-between hover:border-blue-500 transition-colors"
                      >
                        <span className="text-gray-700">Filter by Format</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            showFormatDropdown ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    {/* Price Toggle */}
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-gray-200 bg-white">
                      <button
                        onClick={() => setSelectedFilters(prev => ({
                          ...prev,
                          free: prev.free === true ? null : true
                        }))}
                        className={cn(
                          'px-3 py-1 rounded-full text-sm font-medium transition-all',
                          selectedFilters.free === true
                            ? 'bg-green-600 text-white'
                            : 'bg-green-50 text-green-600 hover:bg-green-100'
                        )}
                      >
                        Free
                      </button>
                      <button
                        onClick={() => setSelectedFilters(prev => ({
                          ...prev,
                          free: prev.free === false ? null : false
                        }))}
                        className={cn(
                          'px-3 py-1 rounded-full text-sm font-medium transition-all',
                          selectedFilters.free === false
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                        )}
                      >
                        Paid
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dropdown Contents */}
              <div className="relative">
                {/* Discipline Dropdown */}
                {showDisciplineDropdown && (
                  <div className="w-full bg-white border-2 border-gray-200 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[300px] overflow-y-auto">
                      {categories.map((category) => (
                        <label key={category.name} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={selectedFilters.discipline.includes(category.name)}
                            onChange={() => {
                              setSelectedFilters(prev => ({
                                ...prev,
                                discipline: prev.discipline.includes(category.name)
                                  ? prev.discipline.filter(d => d !== category.name)
                                  : [...prev.discipline, category.name]
                              }));
                            }}
                            className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{category.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Difficulty Dropdown */}
                {showDifficultyDropdown && (
                  <div className="w-full bg-white border-2 border-gray-200 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {['Beginner', 'Intermediate', 'Advanced'].map((difficulty) => (
                        <label key={difficulty} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={selectedFilters.difficulty.includes(difficulty)}
                            onChange={() => {
                              setSelectedFilters(prev => ({
                                ...prev,
                                difficulty: prev.difficulty.includes(difficulty)
                                  ? prev.difficulty.filter(d => d !== difficulty)
                                  : [...prev.difficulty, difficulty]
                              }));
                            }}
                            className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{difficulty}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Format Dropdown */}
                {showFormatDropdown && (
                  <div className="w-full bg-white border-2 border-gray-200 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {['Video', 'Article', 'Course', 'Documentation', 'Interactive'].map((format) => (
                        <label key={format} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            checked={selectedFilters.format.includes(format)}
                            onChange={() => {
                              setSelectedFilters(prev => ({
                                ...prev,
                                format: prev.format.includes(format)
                                  ? prev.format.filter(f => f !== format)
                                  : [...prev.format, format]
                              }));
                            }}
                            className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{format}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Add margin to push content down */}
        <div style={{ 
          marginTop: showDifficultyDropdown || showFormatDropdown ? '200px' : '0'
        }} />

        {/* Categories */}
        <div className="space-y-32">
          {categories.filter(categoryHasMatchingResources).map((category, categoryIndex) => (
            <motion.section
              id={category.name}
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative"
            >
              <div className="mb-12 relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  {categoryIcons[category.name]}
                </div>
                <div className="pl-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="space-y-12">
                {category.resources
                  .filter(section => sectionHasMatchingResources(section, category.name))
                  .map((section, sectionIndex) => (
                    <div key={section.title} className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {filterResources(section.items, category.name).map((resource, resourceIndex) => (
                          <motion.div
                            key={resource.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (sectionIndex + resourceIndex) * 0.1 }}
                            className="group relative"
                          >
                            <div 
                              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                              <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.name}</h3>
                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                <div className="flex items-center justify-between">
                                  <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                                      {resource.details?.difficulty}
                                    </span>
                                    <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                                      {resource.details?.format.join(', ')}
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => setSelectedResource(resource)}
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                                  >
                                    View Details
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Enhanced Category Swoosh */}
              <div className="absolute bottom-0 left-0 right-0 -mb-16 pointer-events-none">
                <div className="relative text-blue-100/40">
                  <div className="transform scale-y-75">
                    <Swoosh />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
              </div>
            </motion.section>
          ))}

          {/* Show a message when no results are found */}
          {!categories.some(categoryHasMatchingResources) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No matching resources found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
            </motion.div>
          )}
        </div>

        {/* Resource Details Modal - Simplified and Enhanced */}
        <AnimatePresence>
          {selectedResource && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedResource(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-xl w-full max-w-2xl relative overflow-hidden"
              >
                {/* Decorative top accent */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
                
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {selectedResource.name}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {selectedResource.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedResource(null)}
                      className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Key Information */}
                  {selectedResource.details && (
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="col-span-2 sm:col-span-1">
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-1.5">Difficulty</div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                              {selectedResource.details.difficulty}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-1.5">Time Commitment</div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                              {selectedResource.details.timeCommitment}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-1.5">Format</div>
                            <div className="flex flex-wrap gap-2">
                              {selectedResource.details.format.slice(0, 2).map((format) => (
                                <span
                                  key={format}
                                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                                >
                                  {format}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-1.5">Type</div>
                            <span
                              className={cn(
                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium",
                                selectedResource.free
                                  ? "bg-green-50 text-green-700"
                                  : "bg-blue-50 text-blue-700"
                              )}
                            >
                              {selectedResource.free ? "Free Resource" : "Paid Resource"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Key Topics */}
                  {selectedResource.details?.topics && (
                    <div className="mt-6">
                      <div className="text-sm font-medium text-gray-500 mb-2">Key Topics</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedResource.details.topics.map((topic) => (
                          <span
                            key={topic}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="mt-8 flex gap-3 justify-end">
                    <button
                      onClick={() => setSelectedResource(null)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
                    >
                      Close
                    </button>
                    <a
                      href={selectedResource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Start Learning →
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Resources Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-20 p-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl border border-blue-100 shadow-sm max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need More Resources?</h2>
          <p className="text-gray-600 mb-6">
            Join our WhatsApp community to get personalized recommendations and connect with fellow learners who can help guide your learning journey.
          </p>
          <Link
            href="https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
          >
            Join Our Community
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 