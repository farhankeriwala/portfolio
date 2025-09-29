import { Home, User, FolderGit2, BriefcaseBusiness, Mail } from "lucide-react";

export const navItems: NavItem[] = [
    {
        href: "/",
        label: "Home",
        icon: Home
    },
    {
        href: "/about",
        label: "About",
        icon: User
    },
    {
        href: "/projects",
        label: "Projects",
        icon: FolderGit2
    },
    {
        href: "/services",
        label: "Services",
        icon: BriefcaseBusiness
    },
    {
        href: "/contact",
        label: "Contact",
        icon: Mail
    },
]

export const socialMediaItems: SocialMediaItem[] = [
    {
        url: 'https://www.instagram.com/farhan.keriwala/',
        label: 'Instagram',
        icon: '/assets/icons/instagram.svg'
    },
    {
        url: 'https://www.linkedin.com/in/farhankeriwala/',
        label: 'LinkedIn',
        icon: '/assets/icons/linkedin.svg'
    },
    {
        url: 'https://github.com/farhankeriwala',
        label: 'GitHub',
        icon: '/assets/icons/github.svg'
    },
]

export const typescriptCode = `type WebDeveloper = {
  name: string;
  frameworks: string[];
  currentFocus: string;
};

const farhan: WebDeveloper = {
  name: "Farhan Keriwala",
  frameworks: ["Next.js", "Tailwind CSS", "ShadCN UI", "Supabase"],
  currentFocus: "Building full-stack SaaS platforms for EdTech and Fintech",
};

console.log(\`🚀 Meet \${farhan.name} – crafting seamless user experiences with modern web tools.\`);
`;

export const javaCode = `public class SoftwareEngineer {
    private String name = "Farhan Keriwala";
    private String[] principles = {
        "Object-Oriented Design",
        "Version Control (Git)",
        "Clean Code & Testing",
        "Agile & DevOps Practices"
    };

    public void profile() {
        System.out.println("🛠️ " + name + " – grounded in software engineering principles and scalable system design.");
    }

    public static void main(String[] args) {
        new SoftwareEngineer().profile();
    }
}
`;

export const pythonCode = `class MLPractitioner:
    def __init__(self):
        self.name = "Farhan Keriwala"
        self.skills = ["Pandas", "NumPy", "PyTorch", "Scikit-Learn"]
        self.projects = ["Stock Sentiment LSTM", "News-Driven Forecasting", "Model Evaluation Pipelines"]

    def introduce(self):
        print(f"🤖 {self.name} applies machine learning to real-world financial data and AI-based insights.")

if __name__ == "__main__":
    dev = MLPractitioner()
    dev.introduce()
`;

