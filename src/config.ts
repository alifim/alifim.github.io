export const siteConfig = {
  name: "Alif Madani",
  title: "AI/ML Engineer | 4 YOE",
  description: "Portfolio website of Alif Madani - AI/ML Engineer specializing in Computer Vision, DSP, and Applied Machine Learning.",
  accentColor: "#001a61",
  social: {
    email: "alifilhammadani@gmail.com",
    linkedin: "https://www.linkedin.com/in/alifim/",
    twitter: "https://x.com/_alifim",
    github: "https://github.com/alifim",
  },
  aboutMe:
    "I am an AI/ML Engineer with four years of professional experience, currently completing my Master of Engineering in Electrical and Computer Engineering at Cornell Tech. I specialize in computer vision, digital signal processing, and applied machine learning. My work bridges the gap between complex research and scalable engineering, with hands-on experience building generative AI models for medical image registration, developing robust ECG heartbeat classification pipelines, and analyzing satellite imagery. I am actively seeking roles where I can leverage my background in rigorous system architecture and advanced ML to solve complex, real-world problems.",
  skills: [
    "PyTorch",
    "TensorFlow",
    "LangGraph",
    "Python",
    "ScyllaDB",
    "Kafka",
    "AWS",
    "GCP",
    "Docker",
    "Terraform",
    "OpenCV",
    "SQL"
  ],
  projects: [
    {
      name: "ECG Heartbeat Classification under Distribution Shift",
      description:
        "Engineered a robust 1D ResNet-34 pipeline addressing critical data distribution shifts and class imbalance. Transformed 2D images into 1D time-series signals to boost performance from a 0.67 baseline to a 0.865 F1 score.",
      link: "https://github.com/alifim",
      skills: ["PyTorch", "ResNet", "Time-Series", "Ensemble Inference"],
    },
    {
      name: "SoloSearch: Content-Based Music Retrieval",
      description:
        "Developed a Triplet CNN architecture with margin loss to identify jazz songs from improvised solos. Conducted a rigorous study on distribution shift and acoustic overfitting against statistical MFCC baselines.",
      link: "https://github.com/alifim",
      skills: ["CNN", "Deep Learning", "Audio Processing", "Signal Processing"],
    },
    {
      name: "PosturePro Venture: Workout Posture Correction",
      description:
        "Engineered a full-stack AI prototype leveraging multimodal APIs to perform zero-shot visual analysis of workout photos, extracting structured biomechanical data to generate automated lifting scores and safety corrections.",
      link: "https://github.com/alifim",
      skills: ["Generative AI", "Vision-Language", "Full-Stack", "Prompt Engineering"],
    },
  ],
  experience: [
    {
      company: "Weill Cornell Medicine",
      title: "AI/ML Researcher",
      dateRange: "Jan 2026 - Present",
      bullets: [
        "Engineered the comparative evaluation pipeline for a 3D medical image registration project.",
        "Deployed and tuned state-of-the-art Swin-Transformer baselines (TransMorph) to rigorously benchmark a novel keypoint-based architecture (RealKeyMorph).",
        "Standardized heterogeneous clinical datasets (abdominal and brain MRI) to generate reproducible baseline metrics, confirming the novel model's +9% Dice score improvement and ~49% Hausdorff Distance reduction."
      ],
    },
    {
      company: "Groundup.ai",
      title: "AI/ML Engineer",
      dateRange: "Dec 2022 - Aug 2025",
      bullets: [
        "Secured a signed enterprise contract with a major Middle Eastern aviation hub by architecting predictive algorithms to forecast Remaining Useful Life (RUL) and OPEX/CAPEX impacts.",
        "Solely developed the Video Content Analytics (VCA) prototype for a national government agency, achieving a >90% True Positive Rate and winning a competitive enterprise contract.",
        "Architected an agentic AI system using LangGraph and Prefect with autonomous tool-calling, slashing vibration analysts' manual reporting time by ~70%.",
        "Eliminated data bottlenecks by engineering a 24/7 IoT pipeline (MQTT, Kafka) for 300+ sensors, scaling a ScyllaDB backend to 8TB with <100ms latency.",
        "Led a cloud migration from Azure to GCP, eliminating $36,000 in annual cloud spend, and utilized Terraform to automate provisioning."
      ],
    },
    {
      company: "Monash University",
      title: "Data Scientist / Research Assistant",
      dateRange: "Feb 2024 - Mar 2025",
      bullets: [
        "Authored an IEEE IGARSS 2025 accepted paper detailing a novel conditional GAN (pix2pix) that generates Digital Elevation Models (DEMs) directly from free 2D RGB satellite imagery.",
        "Architected a two-stage training pipeline processing 12,000 global Landsat/NASA SRTM image pairs, utilizing SSIM-based fine-tuning to reconstruct complex mountainous terrains with a 0.4671 mean RMSE.",
        "Engineered a cost-effective alternative to expensive LiDAR, empowering geospatial researchers in resource-constrained settings to perform critical hydrological modeling."
      ],
    },
    {
      company: "CARRO",
      title: "Machine Learning Engineer",
      dateRange: "Jul 2022 - Dec 2022",
      bullets: [
        "Revolutionized vehicle valuation by replacing manual spreadsheet workflows with an automated, end-to-end CatBoost pricing pipeline.",
        "Engineered automated scraping and ingestion pipelines to process hundreds of thousands of competitor data points, reducing the market prediction cycle to under 6 hours.",
        "Transformed data science workflows by migrating legacy SageMaker notebooks to modular Docker containers on Amazon ECS.",
        "Integrated GitHub and Terraform to establish production-grade version control and pre-production model evaluation architectures."
      ],
    },
    {
      company: "GDP Labs",
      title: "Artificial Intelligence Engineer",
      dateRange: "Jun 2021 - Jul 2022",
      bullets: [
        "Architected an end-to-end, event-driven analytics pipeline using AWS (Glue, Athena, Step Functions) and MLflow.",
        "Slashed daily batch-prediction infrastructure costs by over 70% by transitioning from always-on servers to a purely pay-per-execution serverless architecture.",
        "Deployed a highly adaptable time-series forecasting module on AWS Lambda to predict diverse client metrics, from retail sales to HR anomalies."
      ],
    },
  ],
  education: [
    {
      school: "Cornell Tech, Cornell University",
      degree: "MEng in Electrical and Computer Engineering",
      dateRange: "Aug 2025 - May 2026",
      achievements: [
        "GPA: 4.0 | Government Scholarship Grantee",
        "AI/ML Researcher at Weill Cornell Medicine (Medical Image Registration)",
        "Relevant Coursework: Digital Signal Processing, Computer Vision, Applied Machine Learning"
      ],
    },
    {
      school: "Institut Teknologi Bandung",
      degree: "BS in Electrical Engineering",
      dateRange: "2016 - 2021",
      achievements: [
        "GPA: 3.9/4.0 (Cum Laude)",
        "Relevant Coursework: Advanced Calculus, Signal Processing, System Architecture"
      ],
    },
  ],
};