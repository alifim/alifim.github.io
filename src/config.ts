export const siteConfig = {
  accentColor: "#6366f1", // Tailwind indigo-500 as default
  profile: {
    name: "Alif Ilham Madani",
    title: "AI/ML Engineer | 4 YOE",
    email: "alifilhammadani@gmail.com",
    location: "New York, NY",
    github: "https://github.com/alifim",
    linkedin: "https://linkedin.com/in/alifim",
    medium: "https://medium.com/@alifim",
    summary: "AI/ML Engineer specializing in the intersection of hardware and software. Proven track record of architecting scalable, end-to-end machine learning systems, from edge TPU deployments for predictive maintenance to building generative AI models for satellite imagery.",
  },
  
  skills: [
    {
      category: "ML & AI",
      items: ["PyTorch", "TensorFlow", "Keras", "LangGraph", "YOLO", "Scikit-Learn", "OpenCV", "Triton"]
    },
    {
      category: "Programming & Data",
      items: ["Python", "SQL", "Java", "Pandas", "NumPy", "Bash/Shell"]
    },
    {
      category: "Data Engineering",
      items: ["Kafka", "RabbitMQ", "MQTT", "ScyllaDB", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Cloud & MLOps",
      items: ["AWS", "GCP", "Azure", "Docker", "Terraform", "MLflow", "Git"]
    }
  ],

  experience: [
    {
      company: "Weill Cornell Medicine / Cornell Tech",
      companyLink: "https://weill.cornell.edu/",
      role: "AI/ML Researcher",
      location: "New York, NY",
      date: "January 2026 – Present",
      achievements: [
        "Engineered the comparative evaluation pipeline for an ISMRM-accepted 3D medical image registration project.",
        "Deployed and tuned state-of-the-art Swin-Transformer baselines (TransMorph) to rigorously benchmark a novel keypoint-based architecture.",
        "Standardized heterogeneous clinical datasets (abdominal and brain MRI) to generate reproducible baseline metrics, confirming a +9% Dice score improvement and ~49% Hausdorff Distance reduction."
      ]
    },
    {
      company: "Groundup.ai",
      companyLink: "https://groundup.ai/who-we-are/",
      role: "AI/ML Engineer",
      location: "Singapore",
      date: "December 2022 – August 2025",
      achievements: [
        "Secured an enterprise contract with a major international airport by engineering predictive RUL and fault probability models, enabling engineering teams to optimize OPEX/CAPEX and justify asset rehabilitation strategies.",
        "Won a competitive national defense tender by engineering object detection and pose estimation algorithms for automated workshop safety surveillance.",
        "Empowered rapid naval emergency response by developing trajectory and ETA forecasting algorithms within an on-premise backend processing live API data for 10,000+ global vessels.",
        "Prevented $100,000+ in annual material losses for a global semiconductor manufacturer by deploying a <0.1s latency sound anomaly detection system on edge TPUs to instantly halt catastrophic wafer crunch events.",
        "Deployed an on-premise safety solution for a major APAC maritime hub, resolving complex domain-shift data issues to implement a real-time, 30 FPS video anomaly detection model with 90% accuracy.",
        "Architected an agentic AI system (LangGraph, Prefect) with autonomous tool-calling capabilities, slashing manual vibration analysis reporting time by ~70% (from 1-2 days to <5 hours).",
        "Engineered a 24/7 event-driven IoT pipeline (MQTT, Kafka) for 300+ sensors and scaled a ScyllaDB backend to 8TB, achieving <100ms latency to eliminate data-loading bottlenecks for downstream AI agents.",
        "Led an Azure to GCP cloud migration and automated infrastructure provisioning via Terraform, eliminating $36,000 in annual spend and increasing maintenance capacity by 3X-5X.",
        "Engineered a unified FastAPI service to concurrently serve high-frequency vibration data to clients, AI agents, and internal analysts, ensuring seamless real-time data access across three distinct downstream systems.",
        "Developed an interactive Streamlit dashboard for vibration analysts to visualize signal features (waveform, FFT, envelope spectrum), reducing diagnosis time from 1 day to ~10 minutes by eliminating the need for manual Python scripting."
      ]
    },
    {
      company: "Monash University",
      companyLink: "https://www.monash.edu/indonesia/our-research/mining-ai-and-gis",
      role: "Data Scientist",
      location: "Indonesia",
      date: "February 2024 – March 2025",
      achievements: [
        "Architected a two-stage training pipeline processing 12,000 global Landsat/NASA SRTM image pairs to reconstruct complex mountainous terrains with a 0.4671 mean RMSE.",
        "Authored an IEEE IGARSS 2025 accepted paper detailing a novel conditional GAN (pix2pix) that generates Digital Elevation Models (DEMs) directly from free 2D RGB satellite imagery."
      ]
    },
    {
      company: "Carro",
      companyLink: "https://carro.sg/about",
      role: "Machine Learning Engineer",
      location: "Indonesia",
      date: "July 2022 – December 2022",
      achievements: [
        "Automated market-wide vehicle valuations by engineering an end-to-end CatBoost pricing pipeline that replaced manual spreadsheets, scraping hundreds of thousands of competitor data points to reduce the complete prediction cycle to under 6 hours.",
        "Established production-grade MLOps by translating qualitative business logic into quantitative requirements and migrating unversioned SageMaker notebooks to modular Docker containers on Amazon ECS via Terraform.",
        "Prevented inaccurate pricing deployments by designing a systematic pre-production testing architecture integrated with GitHub for robust version control and cross-team reproducibility."
      ]
    },
    {
      company: "GDP Labs",
      companyLink: "https://www.gdplabs.id/about-gdp-labs",
      role: "Artificial Intelligence Engineer",
      location: "Indonesia",
      date: "June 2021 – July 2022",
      achievements: [
        "Slashed batch-prediction infrastructure costs by 70%+ by migrating from always-on servers to a pay-per-execution, serverless AWS pipeline utilizing Glue, Athena, and Step Functions.",
        "Deployed highly adaptable time-series forecasting modules on AWS Lambda, utilizing MLflow to track experiments and accurately predict diverse enterprise metrics ranging from retail sales to HR anomalies."
      ]
    }
  ],

  projects: [
    {
      title: "LLM Inference Optimization",
      category: "Systems & Optimization",
      date: "Spring 2026",
      tech: ["PyTorch", "OpenAI Triton", "CUDA", "INT4 Quantization"],
      description: "Accelerated the PyTorch execution graph utilizing torch.compile and engineered a custom Triton INT4 GEMV kernel. Synergistically integrated flex_attention and Triton autotuning to drive significant improvements in Time-To-First-Token (TTFT) and decode throughput.",
      link: "/papers/llm-inference-optimization.pdf"
    },
    {
      title: "Edge AI Speech Recognition & Compression",
      category: "Edge & Hardware",
      date: "Spring 2026",
      tech: ["TinyML", "TFLite Micro", "C++", "QAT"],
      description: "Engineered an end-to-end TinyML audio classification pipeline deployed onto an Arduino Nano 33 BLE. Implemented Quantization-Aware Training (QAT) and structured channel pruning to achieve an 18% physical inference speedup directly on MCU silicon.",
      link: "/papers/tinyml-audio-quantization.pdf"
    },
    {
      title: "Particle Filter SLAM & 2D Grid Mapping",
      category: "Robotics & Perception",
      date: "Spring 2026",
      tech: ["Sensor Fusion", "Kinematics", "Probabilistic Modeling"],
      description: "Engineered a 2D SLAM system from scratch fusing 4-channel wheel encoder telemetry with Hokuyo Lidar. Architected a Sequential Monte Carlo algorithm with dynamic roulette-wheel resampling to achieve large-scale loop closure.",
      link: "/papers/particle-filter-slam-mapping.pdf"
    },
    {
      title: "Deep Learning Hardware Profiling",
      category: "Systems & Optimization",
      date: "Spring 2026",
      tech: ["Hardware Profiling", "Roofline Modeling", "HPC"],
      description: "Constructed theoretical and empirical Roofline models to analyze operational intensity and peak TFLOPS across 10 deep neural network architectures, isolating performance bottlenecks within heterogeneous CPU and GPU environments.",
      link: "/papers/dl-hardware-profiling.pdf"
    },
    {
      title: "PosturePro: Biomechanical AI Analysis",
      category: "Full-Stack AI",
      date: "Fall 2025",
      tech: ["TypeScript", "Vite", "Gemini API", "Drizzle ORM"],
      description: "Engineered a full-stack TypeScript web application integrating Vision-Language Models to perform zero-shot visual analysis of biomechanical form in workout imagery, utilizing an automated prompt-engineering pipeline.",
      link: "https://github.com/alifim/posture-pro-demo"
    },
    {
      title: "SoloSearch: Audio Retrieval & Contrastive Learning",
      category: "Deep Learning",
      date: "Fall 2025",
      tech: ["Signal Processing", "MFCCs", "Triplet Margin Loss"],
      description: "Architected a 1D Convolutional Triplet Network optimized via Triplet Margin Loss to map complex improvised audio sequences into a robust semantic embedding space for k-NN classification.",
      link: "/papers/content-based-audio-retrieval.pdf"
    },
    {
      title: "IMU Gesture Recognition & Time-Series Classification",
      category: "Deep Learning",
      date: "Spring 2026",
      tech: ["Hidden Markov Models", "Time-Series", "Sensor Fusion", "K-Means"],
      description: "Engineered an inertial measurement unit (IMU) time-series classification system to recognize complex 6-DOF spatial gestures using 3-axis accelerometer and gyroscope data. Architected K-Means clustering for vector quantization and trained left-to-right HMMs with Baum-Welch algorithm, implementing all forward-backward calculations in log-space to eliminate numerical underflow across long temporal sequences.",
      link: "/papers/imu-hmm-time-series-classification.pdf"
    },
    {
      title: "Probabilistic Color Segmentation & Depth Estimation",
      category: "Computer Vision",
      date: "Spring 2026",
      tech: ["Computer Vision", "YCrCb Color Space", "Maximum Likelihood Estimation", "Polynomial Regression"],
      description: "Engineered a vision-based obstacle detection pipeline utilizing YCrCb color space to decouple luminance from chrominance across varying lighting conditions. Trained multivariate Gaussian distribution models via MLE with quantized 6-bit Look-Up Tables for real-time inference, and implemented 4th-degree polynomial regression achieving 12.78 cm RMSE on distance estimation.",
      link: "/papers/color-segmentation-depth-estimation.pdf"
    },
    {
      title: "Robust ECG Time-Series Reconstruction & Classification",
      category: "Deep Learning",
      date: "Fall 2025",
      tech: ["1D ResNet", "Focal Loss", "Anomaly Detection", "Domain Shift"],
      description: "Engineered an end-to-end anomaly detection pipeline classifying cardiovascular heartbeats from low-fidelity 128x128 grayscale images, overcoming extreme class imbalance (<1% minorities) and severe domain distribution shifts. Architected custom signal-reconstruction module translating 2D rasterized images to 1D time-series, and trained deep 1D ResNet-34 with Focal Loss and stratified k-fold cross-validation, boosting performance from 0.43 baseline to robust 0.836 test score.",
      link: "/papers/robust-ecg-classification.pdf"
    },
    {
      title: "Semi-Supervised Sentiment Classification Pipeline",
      category: "NLP",
      date: "Fall 2025",
      tech: ["FastText", "XGBoost", "NLP", "Pseudo-Labeling"],
      description: "Architected a 5-stage NLP optimization pipeline combining 300-dimensional FastText embeddings and XGBoost gradient boosting for 5-class sentiment classification, achieving 93.5% test accuracy. Engineered supervised pseudo-labeling augmentation to leverage sparse datasets where 58% of 59,000+ training samples were unlabeled, outperforming traditional KNN Label Propagation while executing rigorous ablation studies.",
      link: "/papers/sentiment-classification-2025.pdf"
    }
  ],

  education: [
    {
      institution: "Cornell Tech, Cornell University",
      location: "New York, NY",
      degree: "MEng in Electrical and Computer Engineering",
      date: "May 2026",
      details: "GPA: 4.0 | Government Scholarship"
    },
    {
      institution: "Bandung Institute of Technology",
      location: "Bandung, Indonesia",
      degree: "BS in Electrical Engineering",
      date: "April 2021",
      details: "GPA: 3.9/4.0 (Cum Laude)"
    }
  ],

  publications: [
    {
      title: "Digital Elevation Model Estimation from RGB Satellite Imagery using Generative Deep Learning",
      authors: "A. I. Madani, R. A. Kuswati, A. M. Lechner, M. R. U. Saputra",
      conference: "IEEE International Geoscience and Remote Sensing Symposium (IGARSS)",
      year: "2025",
      link: "https://ieeexplore.ieee.org/document/11243010" // Add your publication link here
    }
  ]
};