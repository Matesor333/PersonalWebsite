// Add a venture = add one object. Strings are real copy; {tbd:'...'} renders a visible placeholder to fill in.
window.VENTURES = [
    {
        name: 'Elev8 — Augmented Fitness CRM',
        role: {tbd: 'your role'},
        status: 'In development',
        biz: {
            problem: 'Trainers run their business across scattered tools: scheduling in one place, progress notes in another, messages and payments somewhere else.',
            users: 'Personal trainers and online coaches. Shaped together with coaches in Aberdeen and Bratislava.',
            decisions: [
                'Start as a lean responsive web app, then a fast PC app, then iOS and Android.',
                'Record an exercise-demo library once, so trainers share pro videos instead of filming their own.',
                'Host and test on my own server first: an internal alpha before any beta.'
            ],
            outcome: [{tbd: 'coaches in the alpha'}, {tbd: 'sessions scheduled through it'}]
        },
        build: {
            stack: ['React', 'Firebase', 'Python', 'MySQL', 'REST API', 'AWS', 'Stripe'],
            contribution: 'Coding the platform and the server it runs on: scheduling, progress tracking, workout plans, messaging and payments.'
        },
        media: {video: 'PhotoGallery/UpdatedGUI.mp4', alt: 'Screen recording of the Elev8 coaching CRM'},
        links: [['Full case study', 'project-details.html'], ['elev8coaching.tech', 'http://elev8coaching.tech/']]
    },
    {
        name: 'Designlify',
        role: 'Runs it',
        status: 'Freelance, ongoing',
        biz: {
            problem: 'Businesses that need a landing page, a full-stack app or custom software, and want one person to scope it and build it.',
            users: {tbd: 'typical client / sector'},
            decisions: ['Take on select projects only: the ones I can own end to end.'],
            outcome: [{tbd: 'clients served'}, {tbd: 'projects delivered'}]
        },
        build: {
            stack: ['Landing pages', 'Full-stack web apps', 'Custom software', 'Hardware implementations'],
            contribution: 'Scoping, design, build and delivery of each project.'
        },
        media: null,
        links: [['designlify.tech', 'https://designlify.tech/']]
    },
    {
        name: 'Ikarians HealthTech',
        role: 'Led the technical team',
        status: 'Prototype delivered',
        biz: {
            problem: 'Doctors need patient data they can read and act on quickly, to make better and faster decisions.',
            users: 'Doctors, through a portal prototype built for a HealthTech startup.',
            decisions: ['Led the team on the technical track while the startup shaped the product.'],
            outcome: [{tbd: 'pilot feedback / result'}]
        },
        build: {
            stack: [{tbd: 'stack'}],
            contribution: 'Led a team building the technical side of the doctor-portal prototype.'
        },
        media: {img: 'PhotoGallery/Ikarian.gif', alt: 'Doctor portal prototype for Ikarians HealthTech'},
        links: []
    }
];

window.SIDE_PROJECTS = [
    {
        name: 'Invoice Creation Software',
        biz: 'A desktop tool for freelancers: manage clients, track history and generate professional PDF invoices with cloud sync.',
        stack: ['Java', 'JavaFX', 'Supabase', 'REST API', 'iText7', 'Jackson', 'Maven'],
        img: 'PhotoGallery/InvoiceMakerVideo.gif', alt: 'Invoice software demo'
    },
    {
        name: 'Variation Turing Machine',
        biz: 'A puzzle in the purest constraint: a variation generator written entirely as Turing machine code.',
        stack: ['Turing machine code'],
        img: 'PhotoGallery/Video Project 5.gif', alt: 'Turing machine running',
        link: ['Run it', 'https://turingmachine.io/']
    }
];