import {
    mobile,
    backend,
    creator,
    web,
    disney,
    amazon,
    google,
    apple,
    nike,
    netflix,
    spotify,
    spacex,
    microsoft,
    playstation,
    visa,
    toyota,
    meta,
    starbucks,
    tesla,
    shopify,
    dollar,
    hr,
    legal,
    nintendo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Elevate Business Expansion",
      icon: web,
    },
    {
      title: "Top Notch Equipment",
      icon: mobile,
    },
    {
      title: "Round-the-Clock Availability",
      icon: backend,
    },
    {
      title: "Local Business Frenzy",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Google",
      icon: google,
    },
    {
      name: "Apple",
      icon: apple,
    },
    {
      name: "Disney",
      icon: disney,
    },
    {
      name: "Amazon",
      icon: amazon,
    },
    {
      name: "Nike",
      icon: nike,
    },
    {
      name: "Netflix",
      icon: netflix,
    },
    {
      name: "Spotify",
      icon: spotify,
    },
    {
      name: "Space X",
      icon: spacex,
    },
    {
      name: "Microsoft",
      icon: microsoft,
    },
    {
      name: "Nintendo",
      icon: nintendo,
    },
    {
      name: "Playstation",
      icon: playstation,
    },
    {
      name: "Toyota",
      icon: toyota,
    },
    {
      name: "Visa",
      icon: visa,
    },
  ];
  
  const experiences = [
    {
      title: "Coffee Company",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining connections using Telephone and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other coffee makers to create high-quality products.",
        "Implementing modern design and ensuring cross-country compatibility.",
        "Participating in Shark Tank and getting a investment.",
      ],
    },
    {
      title: "Electric Car Manufracturer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Helping a local poor labour named Elon Musk creating a company.",
        "Funding him.",
        "Making him the richest person.",
        "A unicorn.",
      ],
    },
    {
      title: "Another startup that helps business",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Helps making online presence.",
        "NIL.",
        "NIL.",
        "NIL.",
      ],
    },
    {
      title: "Social Media Service Provider",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "April 2023 - Present",
      points: [
        "NIL.",
        "NIL.",
        "NIL.",
        "NIL.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make my business as successful as our idea, but BizHub proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a Entrepreneur who truly cares about their fellow entrepreneur' success like BizHub does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After BizHub optimized our Business, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Capital",
      description:
        "Starting a business typically requires an initial investment to cover various costs, such as equipment, inventory, rent, and utilities. It's important to have a clear understanding of your financial needs and create a budget to ensure you have enough funds to cover your expenses.",
      tags: [
        {
          name: "startupcapital",
          color: "blue-text-gradient",
        },
        {
          name: "businessfunding",
          color: "green-text-gradient",
        },
        {
          name: "entrepreneurialinvestment",
          color: "pink-text-gradient",
        },
      ],
      image: dollar,
      source_code_link: "https://en.wikipedia.org/wiki/Capital_(economics)",
    },
    {
      name: "Human Resources",
      description:
        "Depending on the type of business, you may need to hire employees to help run and manage the company. This may include hiring a team of professionals such as accountants, lawyers, marketing experts, and other staff members.",
      tags: [
        {
          name: "talentacquisition",
          color: "blue-text-gradient",
        },
        {
          name: "teamdevelopment",
          color: "green-text-gradient",
        },
        {
          name: "employeetraining",
          color: "pink-text-gradient",
        },
      ],
      image: hr,
      source_code_link: "https://en.wikipedia.org/wiki/Human_resources",
    },
    {
      name: "Legal Requirements",
      description:
        "Starting a business involves complying with legal regulations and requirements, such as registering the business with the appropriate government agencies, obtaining necessary licenses and permits, and setting up contracts with vendors and clients. It's essential to understand the legal aspects of running a business to avoid any legal issues down the road.",
      tags: [
        {
          name: "businessregistration",
          color: "blue-text-gradient",
        },
        {
          name: "businesslicenses",
          color: "green-text-gradient",
        },
        {
          name: "taxlaws",
          color: "pink-text-gradient",
        },
      ],
      image: legal,
      source_code_link: "https://bnblegal.com/article/legal-requirements-to-start-a-business-in-india/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };