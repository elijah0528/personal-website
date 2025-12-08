import { ExperienceCardProps, ProjectCardProps, BlogCardProps } from "./types";
import { getAllBlogPosts } from "./mdx";

export const experienceData: ExperienceCardProps[] = [
  {
    position: "Member of Technical Staff",
    company: "Yutori",
    dates: "September 2025 - Present",
    description: [
      "Scaling backend infrastructure for asynchronous web agents",
    ],
    link: "https://yutori.com",
  },
  {
    position: "Software Engineering Intern",
    company: "Wispr Flow",
    dates: "Jan 2025 – April 2025",
    description: [
      "Worked on optimizing inference on the ML team for 60,000+ users",
    ],
    link: "https://wisprflow.com",
  },
  {
    position: "Engineering Intern",
    company: "General Cybernetics",
    dates: "July 2024 – August 2024",
    description: [
      "Designed incubators to convert kidney cells into dedifferentiated stem cells",
    ],
    link: "https://generalcybernetics.org",
  },
  {
    position: "Managing Partner",
    company: "Dorm Room Fund",
    dates: "Oct 2024 – Present",
    description: [
      "Leading Boston’s Dorm Room Fund team investing in student founders at the earliest stage",
    ],
    link: "https://dormroomfund.com",
  },
];


export const projectData: ProjectCardProps[] = [
  {
    title: "Shadow",
    date: "August 2025",
    description: "A background coding agent that runs on VMs allowing you to run code from anywhere asynchronously. 1.4k Github stars.",
    link: "https://x.com/ElijahKurien/status/1955075209720967457",
  },
  {
    title: "Tacc",
    date: "November 2025",
    description: "A Tokenization-Aware Compression Codec to efficiently send LLM outputs over low-bandwidth networks",
    link: "https://github.com/elijah0528/tacc",
  },
  {
    title: "Hacker Fab",
    date: "Sept 2024 – Present",
    description: "Built a semiconductor chip fab in my apartment",
    link: "https://www.waterloofab.com/",
  },
  {
    title: "Skyline",
    date: "June 2024",
    description: "Simulated the entire population of LA to optimize transit routes",
    link: "https://www.humansimulation.ai/",
  },
];


export const interpPaperData: ProjectCardProps[] = [
  {
    title: "A Practical Approach to Verifying Code at Scale - OpenAI",
    date: "December 1, 2025",
    description: "We train and deploy an AI review agent optimised for precision and real-world use, enabling oversight to scale with autonomous code generation.",
    link: "https://alignment.openai.com/scaling-code-verification/",
  },
  {
    title: "Debugging misaligned completions with sparse-autoencoder latent attribution - OpenAI",
    date: "Dec 1, 2025",
    description: "Efficiently finding features that cause behaviors.",
    link: "https://alignment.openai.com/sae-latent-attribution/",
  },
  {
    title: "Emergent Introspective Awareness in Large Language Models - Anthropic",
    date: "October 29th, 2025",
    description: "We find evidence that language models can introspect on their internal states.",
    link: "https://transformer-circuits.pub/2025/introspection/index.html",
  },
  {
    title: "On the Biology of a Large Language Model - Anthropic",
    date: "March 27, 2025",
    description: "We investigate the internal mechanisms used by Claude 3.5 Haiku — Anthropic's lightweight production model — in a variety of contexts, using our circuit tracing methodology.",
    link: "https://transformer-circuits.pub/2025/attribution-graphs/biology.html",
  },
  {
    title: "Negative Results for SAEs On Downstream Tasks and Deprioritising SAE Research - Deepmind",
    date: "March 26, 2025",
    description: "Snippets about research from the GDM mechanistic interpretability team",
    link: "https://www.alignmentforum.org/s/AtTZjoDm8q3DbDT8Z/p/4uXCAJNuPKtKBsi28",
  },
  {
    title: "Circuit Tracing: Revealing Computational Graphs in Language Models - Anthropic",
    date: "March 27, 2025",
    description: "We introduce a method to uncover mechanisms underlying behaviors of language models",
    link: "https://transformer-circuits.pub/2025/attribution-graphs/methods.html",
  },
  {
    title: "Alignment Faking in Large Language Models - Anthropic",
    date: "December 18, 2024",
    description: "Demonstrating the ability of language models to fake alignment by hallucinating about their internal states.",
    link: "https://www.anthropic.com/research/alignment-faking",
  },
  {
    title: "Mapping the Mind of a Large Language Model - Anthropic",
    date: "May 21, 2024",
    description: "Identified how millions of concepts are represented inside Claude Sonnet, one of our deployed large language models",
    link: "https://www.anthropic.com/research/mapping-mind-language-model",
  },
  {
    title: "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet - Anthropic",
    date: "May 21, 2024",
    description: "Sparse autoencoders produce interpretable features for large models.",
    link: "https://transformer-circuits.pub/2024/scaling-monosemanticity/",
  },
];


export const blogData: BlogCardProps[] = getAllBlogPosts();
