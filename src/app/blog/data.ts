export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: {
    type: 'paragraph' | 'heading' | 'list' | 'code';
    content?: string;
    items?: string[];
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Machine Learning',
    excerpt: 'A beginner-friendly guide to understanding machine learning concepts and implementing your first ML model.',
    category: 'AI/ML',
    author: 'John Doe',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop',
    tags: ['Machine Learning', 'AI', 'Technology', 'Python'],
    content: [
      {
        type: 'paragraph',
        content: "Machine Learning has become an integral part of modern technology. In this guide, we'll explore the fundamentals and build your first ML model."
      },
      {
        type: 'heading',
        content: 'Understanding the Basics'
      },
      {
        type: 'paragraph',
        content: "Before diving into implementation, it's crucial to understand key ML concepts. Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience."
      },
      {
        type: 'list',
        items: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Reinforcement Learning',
          'Model Training and Validation'
        ]
      },
      {
        type: 'heading',
        content: 'Your First ML Model'
      },
      {
        type: 'code',
        content: "import sklearn\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\n\n# Prepare your data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# Create and train the model\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)"
      }
    ]
  },
  {
    id: 2,
    title: 'Web Development Best Practices in 2024',
    excerpt: 'Explore the latest trends and best practices in web development to create modern, efficient websites.',
    category: 'Web Dev',
    author: 'Jane Smith',
    date: 'March 12, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop',
    tags: ['Web Development', 'Frontend', 'Best Practices', 'React'],
    content: [
      {
        type: 'paragraph',
        content: 'The web development landscape is constantly evolving. Stay ahead of the curve with these modern best practices and techniques.'
      },
      {
        type: 'heading',
        content: 'Performance Optimization'
      },
      {
        type: 'list',
        items: [
          'Implement lazy loading for images and components',
          'Use code splitting to reduce bundle size',
          'Optimize assets and implement caching strategies',
          'Utilize modern image formats and responsive images'
        ]
      },
      {
        type: 'code',
        content: "// Example of React code splitting\nconst MyComponent = React.lazy(() => import('./MyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<Loading />}>\n      <MyComponent />\n    </Suspense>\n  );\n}"
      }
    ]
  },
  {
    id: 3,
    title: 'Cybersecurity Essentials for Developers',
    excerpt: 'Learn the fundamental security practices every developer should know to build secure applications.',
    category: 'Security',
    author: 'Mike Johnson',
    date: 'March 10, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    tags: ['Cybersecurity', 'Development', 'Security', 'Best Practices'],
    content: [
      {
        type: 'paragraph',
        content: 'Security should be a top priority in every development project. Learn essential practices to protect your applications from common vulnerabilities.'
      },
      {
        type: 'heading',
        content: 'Common Security Vulnerabilities'
      },
      {
        type: 'list',
        items: [
          'SQL Injection',
          'Cross-Site Scripting (XSS)',
          'Cross-Site Request Forgery (CSRF)',
          'Security Misconfigurations'
        ]
      },
      {
        type: 'code',
        content: "// Example of SQL Injection Prevention\nconst query = 'SELECT * FROM users WHERE id = ?';\nconnection.query(query, [userId], (err, results) => {\n  // Handle results safely\n});"
      }
    ]
  },
  {
    id: 4,
    title: 'UI/UX Design Principles for Better User Experience',
    excerpt: 'Master the fundamental principles of UI/UX design to create intuitive and engaging user interfaces.',
    category: 'UI/UX',
    author: 'Sarah Chen',
    date: 'March 8, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop',
    tags: ['UI/UX', 'Design', 'User Experience', 'Figma'],
    content: [
      {
        type: 'paragraph',
        content: 'Good design is invisible. Learn how to create user interfaces that not only look great but also provide an excellent user experience.'
      },
      {
        type: 'heading',
        content: 'Key Design Principles'
      },
      {
        type: 'list',
        items: [
          'Visual Hierarchy',
          'Consistency',
          'Feedback and Response',
          'Accessibility'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Cloud Computing: A Comprehensive Guide',
    excerpt: 'Understand cloud computing concepts and learn how to leverage cloud services for your applications.',
    category: 'Cloud',
    author: 'Alex Turner',
    date: 'March 5, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    tags: ['Cloud Computing', 'AWS', 'DevOps', 'Infrastructure'],
    content: [
      {
        type: 'paragraph',
        content: 'Cloud computing has revolutionized how we build and deploy applications. Learn the fundamentals and best practices.'
      },
      {
        type: 'heading',
        content: 'Cloud Service Models'
      },
      {
        type: 'list',
        items: [
          'Infrastructure as a Service (IaaS)',
          'Platform as a Service (PaaS)',
          'Software as a Service (SaaS)',
          'Serverless Computing'
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Advanced Machine Learning: Deep Learning Fundamentals',
    excerpt: 'Dive deep into neural networks and deep learning architectures for complex AI applications.',
    category: 'AI/ML',
    author: 'Maria Garcia',
    date: 'March 3, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
    tags: ['Deep Learning', 'Neural Networks', 'AI', 'PyTorch'],
    content: [
      {
        type: 'paragraph',
        content: 'Deep Learning has enabled breakthrough advances in AI. Learn how to build and train neural networks for complex tasks.'
      },
      {
        type: 'heading',
        content: 'Neural Network Architectures'
      },
      {
        type: 'list',
        items: [
          'Convolutional Neural Networks (CNN)',
          'Recurrent Neural Networks (RNN)',
          'Transformers',
          'Generative Adversarial Networks (GAN)'
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'Building Scalable Mobile Apps with React Native',
    excerpt: 'Learn how to architect and develop performant cross-platform mobile applications using React Native and modern best practices.',
    category: 'Mobile Dev',
    author: 'David Kim',
    date: 'March 1, 2024',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop',
    tags: ['React Native', 'Mobile Development', 'JavaScript', 'Performance'],
    content: [
      {
        type: 'paragraph',
        content: "React Native has revolutionized mobile app development by enabling developers to build native applications using JavaScript and React. In this comprehensive guide, we'll explore advanced techniques for building scalable and performant mobile applications."
      },
      {
        type: 'heading',
        content: 'Architecture Patterns'
      },
      {
        type: 'list',
        items: [
          'Clean Architecture principles',
          'State management with Redux Toolkit',
          'Navigation patterns',
          'Code splitting and lazy loading'
        ]
      },
      {
        type: 'heading',
        content: 'Performance Optimization'
      },
      {
        type: 'paragraph',
        content: 'Performance is critical for mobile applications. Learn how to optimize your React Native app for smooth user experiences.'
      },
      {
        type: 'code',
        content: "// Example of React Native performance optimization\nimport { memo, useCallback } from 'react';\n\nconst ListItem = memo(({ item, onPress }) => {\n  const handlePress = useCallback(() => {\n    onPress(item.id);\n  }, [item.id, onPress]);\n\n  return (\n    <Pressable onPress={handlePress}>\n      <Text>{item.title}</Text>\n    </Pressable>\n  );\n});"
      }
    ]
  },
  {
    id: 8,
    title: 'DevOps Automation: Streamlining Your Development Pipeline',
    excerpt: 'Discover how to implement efficient CI/CD pipelines and automate your development workflow for faster, more reliable deployments.',
    category: 'DevOps',
    author: 'Emily Chen',
    date: 'February 28, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2076&auto=format&fit=crop',
    tags: ['DevOps', 'CI/CD', 'Automation', 'GitHub Actions'],
    content: [
      {
        type: 'paragraph',
        content: 'Modern software development requires efficient and reliable deployment pipelines. Learn how to implement DevOps best practices and automate your development workflow.'
      },
      {
        type: 'heading',
        content: 'Setting Up CI/CD with GitHub Actions'
      },
      {
        type: 'code',
        content: "name: CI/CD Pipeline\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  build-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: Set up Node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: '18'\n      - name: Install dependencies\n        run: npm ci\n      - name: Run tests\n        run: npm test"
      },
      {
        type: 'heading',
        content: 'Automated Testing Strategies'
      },
      {
        type: 'list',
        items: [
          'Unit testing with Jest',
          'Integration testing with Cypress',
          'End-to-end testing',
          'Performance testing'
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'Mastering TypeScript: Advanced Types and Patterns',
    excerpt: 'Deep dive into TypeScript\'s advanced features and learn how to write more type-safe and maintainable code.',
    category: 'Web Dev',
    author: 'Thomas Anderson',
    date: 'February 25, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop',
    tags: ['TypeScript', 'JavaScript', 'Web Development', 'Programming'],
    content: [
      {
        type: 'paragraph',
        content: 'TypeScript has become an essential tool for modern web development. Learn how to leverage its advanced features to write better, more maintainable code.'
      },
      {
        type: 'heading',
        content: 'Advanced Type System Features'
      },
      {
        type: 'code',
        content: "// Advanced TypeScript patterns\ntype DeepPartial<T> = {\n  [P in keyof T]?: T[P] extends object\n    ? DeepPartial<T[P]>\n    : T[P];\n};\n\ntype AsyncResult<T> = {\n  data: T | null;\n  loading: boolean;\n  error: Error | null;\n};"
      },
      {
        type: 'heading',
        content: 'Design Patterns in TypeScript'
      },
      {
        type: 'list',
        items: [
          'Factory Pattern implementation',
          'Dependency injection',
          'Builder Pattern',
          'Observer Pattern'
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'Blockchain Development: Building DApps on Ethereum',
    excerpt: 'Learn how to develop decentralized applications (DApps) on the Ethereum blockchain using Solidity and Web3.js.',
    category: 'Blockchain',
    author: 'Michael Chang',
    date: 'February 22, 2024',
    readTime: '20 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop',
    tags: ['Blockchain', 'Ethereum', 'Solidity', 'Web3'],
    content: [
      {
        type: 'paragraph',
        content: 'Blockchain technology is revolutionizing various industries. This guide will help you understand the fundamentals of blockchain development and how to build decentralized applications.'
      },
      {
        type: 'heading',
        content: 'Smart Contract Development'
      },
      {
        type: 'code',
        content: "// Example Solidity smart contract\npragma solidity ^0.8.0;\n\ncontract Token {\n    string public name;\n    string public symbol;\n    uint8 public decimals;\n    uint256 public totalSupply;\n    mapping(address => uint256) public balanceOf;\n\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    constructor(string memory _name, string memory _symbol) {\n        name = _name;\n        symbol = _symbol;\n        decimals = 18;\n        totalSupply = 1000000 * (10 ** uint256(decimals));\n        balanceOf[msg.sender] = totalSupply;\n    }\n}"
      },
      {
        type: 'heading',
        content: 'Web3 Integration'
      },
      {
        type: 'list',
        items: [
          'Connecting to Ethereum networks',
          'Interacting with smart contracts',
          'Managing wallets and transactions',
          'Gas optimization techniques'
        ]
      }
    ]
  }
]; 