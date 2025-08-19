export type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    annuallyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "standard",
        title: "Solo Practice",
        desc: "Perfect for individual attorneys and small legal practices looking to automate research and document generation with AI tools.",
        monthlyPrice: 89,
        annuallyPrice: 939,
        buttonText: "Start Solo Practice",
        features: [
            "AI legal research (500 queries/mo)",
            "Document template library",
            "Basic case management",
            "Client communication tools",
            "Legal analytics dashboard",
            "2 team members",
            "Email support"
        ],
        link: "#"
    },
    {
        id: "mastermind",
        title: "Law Firm Pro",
        desc: "Ideal for growing law firms and legal teams who need advanced AI capabilities and automation to scale their practice.",
        monthlyPrice: 199,
        annuallyPrice: 2100,
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "AI legal research (2,500 queries/mo)",
            "Advanced brief generation",
            "Multi-jurisdiction legal analysis",
            "Custom legal precedent training",
            "Custom workflow automation",
            "Priority 24/7 support",
            "Up to 15 team members"
        ],
        link: "#"
    },
    // {
    //     id: "enterprise",
    //     title: "Enterprise",
    //     desc: "Full-scale AI marketing solution for large organizations",
    //     monthlyPrice: 199,
    //     annuallyPrice: 2101,
    //     badge: "Custom AI Solutions",
    //     buttonText: "Contact Sales",
    //     features: [
    //         "Unlimited AI content",
    //         "Custom AI model training",
    //         "Advanced automation workflows",
    //         "Multi-brand management",
    //         "API access",
    //         "Unlimited team members",
    //         "24/7 priority support",
    //         "Dedicated success manager",
    //     ],
    //     link: "https://stripe.com/enterprise-plan-link"
    // }
];

export const PLANS_FAQ = [
    {
        id: 1,
        question: "How does the AI legal research work?",
        answer: "Our AI analyzes vast legal databases to find relevant case law, statutes, and legal precedents, providing comprehensive research results while maintaining accuracy and relevance to your case."
    },
    {
        id: 2,
        question: "Can I manage multiple cases or clients?",
        answer: "Yes! The Solo Practice plan supports basic case management, while Law Firm Pro offers advanced multi-case and client management capabilities."
    },
    {
        id: 3,
        question: "Is there a discount for annual billing?",
        answer: "Yes, you can save 15% by choosing annual billing over monthly billing for any of our plans."
    },
    {
        id: 4,
        question: "Do you offer special pricing for public defenders?",
        answer: "Yes, we offer special rates for public defender offices and legal aid organizations. Contact our sales team for more information about our public service discount."
    },
    {
        id: 5,
        question: "How does the document generation work?",
        answer: "Our AI can generate legal documents, briefs, and contracts based on templates and your specific case details, saving hours of drafting time while ensuring legal accuracy."
    },
    {
        id: 6,
        question: "What kind of support do you provide?",
        answer: "We offer email support for Solo Practice plans, priority support for Law Firm Pro plans, with legal-specific training and onboarding available for all users."
    },
    {
        id: 7,
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, you can change your plan at any time. If you upgrade, you'll be prorated for the remainder of your billing period. Downgrades take effect at the next billing cycle."
    },
    {
        id: 8,
        question: "Is mobile access available?",
        answer: "Yes, all plans include access to our mobile app for iOS and Android, allowing you to access legal research and case files on the go."
    },
    {
        id: 9,
        question: "What security measures do you have in place?",
        answer: "We implement attorney-client privilege protection, end-to-end encryption, and comply with legal industry security standards including HIPAA and state bar requirements."
    }
];

export const PLANS_TABLE = [
    {
        id: 1,
        title: 'Solo Practice',
        priceMonthly: '$89',
        priceYearly: "$939",
        buttonText: 'Start free trial',
        usage: {
            members: '2 members',
            contentGeneration: '500 queries/mo',
            socialChannels: 'Basic tools',
            brands: '1 practice',
        },
        features: [
            'AI legal research',
            'Document templates',
            'Case management',
            'Client portal',
            'Legal form generation',
            'Basic automation',
            'Mobile app access',
            'Email support',
        ],
    },
    {
        id: 2,
        title: 'Law Firm Pro',
        priceMonthly: '$199',
        priceYearly: "$2100",
        buttonText: 'Upgrade now',
        usage: {
            members: '15 members',
            contentGeneration: '2,500 queries/mo',
            socialChannels: 'All legal tools',
            brands: '5 practices',
        },
        features: [
            'Advanced AI legal research',
            'Custom brief generation',
            'Advanced case management',
            'Multi-jurisdiction analysis',
            'Performance analytics',
            'Workflow automation',
            'Priority support',
            'API access',
            'Advanced reporting',
        ],
    },
    {
        id: 3,
        title: 'Enterprise Legal',
        priceMonthly: '$499',
        priceYearly: "$5250",
        buttonText: 'Contact sales',
        usage: {
            members: 'Unlimited',
            contentGeneration: 'Unlimited',
            socialChannels: 'Unlimited',
            brands: 'Unlimited',
        },
        features: [
            'Custom AI solutions',
            'Enterprise automation',
            'Multi-firm management',
            'Advanced security',
            'Custom integrations',
            'Dedicated support',
            'Custom training',
            'Enterprise analytics',
            'Custom workflows',
        ],
    },
];
