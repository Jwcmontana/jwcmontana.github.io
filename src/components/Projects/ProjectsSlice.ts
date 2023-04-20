import { createSlice, Slice } from '@reduxjs/toolkit'

export const ProjectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [
      {
        title: "Reazo",
        name: "reazo",
        thumbSrc: "/img/projects/summary/reazo.png",
        logoImageSrc: "/img/projects/logos/reazo-logo.png",
        summary: "Reazo is a powerful and comprehensive real estate lead generation, distribution, and management platform that consolidates multiple subscription-based e-commerce websites into one unified system. The platform enables seamless and real-time connection of real estate leads with real estate agents, facilitating efficient lead management and optimizing agent productivity.",
        technologies: [
          "React",
          "Redux",
          "Axios",
          "Leaflet",
          "D3.js",
          "Jest",
          "ASP .NET Web API",
          "Swagger",
          "MSSQL Server",
          "HubSpot",
          "SendGrid",
          "Okta",
          "Authorize .NET",
          "Chargofy",
          "Azure Devops",
          "GitHub",
          "Google Cloud Platform"
        ],
        images: [
          {
            fullSizeSrc: "/img/projects/details/full-size/reazo/reazo-verification-map.png",
            thumbSrc: "/img/projects/details/thumbs/reazo/reazo-verification-map.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/reazo/reazo-lead-report.png",
            thumbSrc: "/img/projects/details/thumbs/reazo/reazo-lead-report.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/reazo/reazo-contact.png",
            thumbSrc: "/img/projects/details/thumbs/reazo/reazo-contact.png",
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/reazo/reazo-new-sale-map.png",
            thumbSrc: "/img/projects/details/thumbs/reazo/reazo-new-sale-map.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/reazo/reazo-exclusive-subscription.png",
            thumbSrc: "/img/projects/details/thumbs/reazo/reazo-exclusive-subscription.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/reazo/reazo-sales-dashboard.png",
            thumbSrc: "/img/projects/details/thumbs/reazo/reazo-sales-dashboard.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/reazo/reazo-verification-attempt.png",
            thumbSrc: "/img/projects/details/thumbs/reazo/reazo-verification-attempt.png"
          },
        ]
      },
      {
        title: "Scott Land Banking",
        name: "scott-land-banking",
        logoImageSrc: "/img/projects/logos/scottland-logo.png",
        thumbSrc: "/img/projects/summary/scottland.png",
        summary: "This web-based application, allows a family ranching businesses to manage financial transactions and associated documents, receive email notifications, and enable clerical approval and oversight of member accounts. The user-friendly design also enables seamless data input and management, report generation, and data analysis, making it a valuable asset for streamlining capital accounting and maintaining accurate financial records.",
        technologies: [
          "React",
          "Redux",
          "Axios",
          "ASP .NET Core Web API",
          "Entity Framework",
          "Okta",
          "SendGrid",
          "Azure Devops",
          "GitHub",
          "Google Cloud Platform"
        ]
      },
      {
        title: "FirstACTS",
        name: "first-acts",
        thumbSrc: "/img/projects/summary/first-acts.png",
        logoImageSrc: "/img/projects/logos/first-acts-logo.png",
        summary: "FirstACTS is a web-based tool designed to help schools and districts streamline their student conduct tracking and reporting process. The tool allows for easy identification and communication of conduct issues to the right people, eliminates the need for paper-based tracking and filing, and provides preloaded student and driver information to report incidents. FirstACTS can be customized to meet the specific needs of each school district and provides safe and secure access to critical information and updates. flame, and other effects.",
        technologies: [
          "ASP .NET WebForms",
          "jQuery",
          "MSSQL Server",
          "Fluent nHibernate",
          "Microsoft Team Foundation Server",
        ],
        keyFeatures: [
          "A multi-tenant implementation supporting separate databases for over 25 bus depot locations driven by a single application instance.",
          "A membership system with support for a variety of user roles with differing functionality.",
          "A workflow system allowing easy communication and accountability between bus depot locations and their serviced school districts.",
          "Asynchronous ticket creation features including auto-complete search functionality, dynamic input control population, and file upload.",
          "Functionality for creating customized, printable, notification letters with tailored letter heading, content, and contact information for each location and school district.",
          "User creation, and data import, via an uploaded Excel file."
        ],
        images: [
          {
            fullSizeSrc: "/img/projects/details/full-size/first-acts/first-acts-create-incident.png",
            thumbSrc: "/img/projects/details/thumbs/first-acts/first-acts-create-incident.png",
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/first-acts/first-acts-types-management.png",
            thumbSrc: "/img/projects/details/thumbs/first-acts/first-acts-types-management.png",
          },
          {

            fullSizeSrc: "/img/projects/details/full-size/first-acts/first-acts-user-account.png",
            thumbSrc: "/img/projects/details/thumbs/first-acts/first-acts-user-account.png"
          }
        ]
      },
      {
        title: "Missoula County Permitting",
        name: "missoula-permitting",
        thumbSrc: "/img/projects/summary/missoula-permitting.png",
        logoImageSrc: "/img/projects/logos/missoula-permitting-logo.png",
        summary: "The Missoula County Permit System is an online platform that enables users to apply for a variety of permits, including address and approach, building, land use, zoning, excavation, mechanical, electrical, and plumbing permits. The software offers features such as user management and authentication, allowing applicants to create accounts and access their applications easily. Additionally, the system includes document management capabilities and email notifications, which help applicants and officials stay up-to-date on the status of their permit applications.",
        technologies: [
          "ASP .NET WebForms",
          "jQuery",
          "MSSQL Server",
          "Bootstrap",
          "Fluent nHibernate",
          "Microsoft Team Foundation Server",
        ],
        keyFeatures: [
          "A model-view-presenter architecture designed with a focus on future extensibility and a decoupling of the presenter logic from the persistence and business logic.",
          "Web service based integration with the customer's back-end system for persistence and data retrieval.",
          "Membership system for administering users and their permit applications.",
          "A fail-safe XML based permit application logging system used to ensure that no permit submissions are lost.",
          "ASP .NET Routing for dynamic, clean, URLs."
        ],
        images: [
          {
            fullSizeSrc: "/img/projects/details/full-size/missoula-permitting/missoula-permitting-account.png",
            thumbSrc: "/img/projects/details/thumbs/missoula-permitting/missoula-permitting-account.png",
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/missoula-permitting/missoula-permitting-application.png",
            thumbSrc: "/img/projects/details/thumbs/missoula-permitting/missoula-permitting-application.png",
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/missoula-permitting/missoula-permitting-search.png",
            thumbSrc: "/img/projects/details/thumbs/missoula-permitting/missoula-permitting-search.png"
          }
        ]
      },
      {
        title: "Neesha Fashion",
        name: "neesha-fashion",
        thumbSrc: "/img/projects/summary/neesha.png",
        logoImageSrc: "/img/projects/logos/neesha-logo.png",
        summary: "Neesha Fashion's web-based ecommerce platform offers an intuitive online shopping experience for customers, with easy access to both retail and wholesale inventory. The platform features a flexible pricing model that caters to both retail and wholesale sales, with distinct pricing tiers for each. Customers can create accounts to save their preferences and purchase history, streamlining future purchases.",
        technologies: [
          "ASP .NET WebForms",
          "jQuery",
          "MSSQL Server",
          "Authorize .NET",
          "Fluent nHibernate",
          "Microsoft Team Foundation Server",
        ],
        keyFeatures: [
          "Membership system supporting retail, wholesale, and administrative users.",
          "Inventory management system for maintaining separate retail and wholesale inventories.",
          "Content management features for maintaining site text.",
          "Authorize .NET integration for customer management and payment processing.",
          "Google maps integration for listing retail outlets.",
          "ASP .NET Routing for dynamic, clean, URLs."
        ],
        images: [
          {
            fullSizeSrc: "/img/projects/details/full-size/neesha/neesha-cart.png",
            thumbSrc: "/img/projects/details/thumbs/neesha/neesha-cart.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/neesha/neesha-category.png",
            thumbSrc: "/img/projects/details/thumbs/neesha/neesha-category.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/neesha/neesha-order.png",
            thumbSrc: "/img/projects/details/thumbs/neesha/neesha-order.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/neesha/neesha-orders.png",
            thumbSrc: "/img/projects/details/thumbs/neesha/neesha-orders.png"
          },
          {

            fullSizeSrc: "/img/projects/details/full-size/neesha/neesha-style.png",
            thumbSrc: "/img/projects/details/thumbs/neesha/neesha-style.png"
          }
        ]
      },
      {
        title: "First2Contact",
        name: "first-2-contact",
        logoImageSrc: "/img/projects/logos/first-2-contact-logo.png",
        thumbSrc: "/img/projects/summary/first-2-contact.png",
        summary: "First2Contact is a subscription-based software product that offers a lead generation and management service to real estate agents and brokerages. By subscribing to the service, agents and brokerages gain access to a lead generation network that generates real estate leads, validates them, and contacts them immediately.",
        technologies: [
          "ASP .NET WebForms",
          "jQuery",
          "MSSQL Server",
          "Bootstrap",
          "Fluent nHibernate",
          "Microsoft Team Foundation Server",
          "Chargify"
        ],
        keyFeatures: [
          "A membership system with support for credential and Active Directory base authentication.",
          "Integration with Chargify for subscription management and payment gateway services.",
          "Various statistics and reports to help management track customer service representative and lead generation performance.",
          "A territories management system for tracking leads and automatically assigning them to agents based on their subscribed locations.",
          "Consumer-facing sites allowing agents to create, manage, and upgrade their subscriptions without the need for help from a customer service representative."
        ],
        images: [
          {
            fullSizeSrc: "/img/projects/details/full-size/first-2-contact/first-2-contact-dashboard.png",
            thumbSrc: "/img/projects/details/thumbs/first-2-contact/first-2-contact-dashboard.png",
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/first-2-contact/first-2-contact-group-view.png",
            thumbSrc: "/img/projects/details/thumbs/first-2-contact/first-2-contact-group-view.png",
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/first-2-contact/first-2-contact-territories-search.png",
            thumbSrc: "/img/projects/details/thumbs/first-2-contact/first-2-contact-territories-search.png"
          }
        ]
      },
      {
        title: "Particle Studio",
        name: "particle-studio",
        thumbSrc: "/img/projects/summary/particle-studio.jpg",
        summary: "This program enables user to create complicated particle systems that look like fireworks, but can also be used to simulate explosions, dust clouds, flame, and other effects.",
        technologies: [
          "OpenGL",
          "Win32",
          "MSVC++",
          "Adobe Photoshop",
          "Visual Basic 6",
          "Rational Rose"
        ],
        images: [
          {
            fullSizeSrc: "/img/projects/details/full-size/particle-studio/particle-studio-interface.png",
            thumbSrc: "/img/projects/details/thumbs/particle-studio/particle-studio-interface.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/particle-studio/particle-studio-more-particles.jpg",
            thumbSrc: "/img/projects/details/thumbs/particle-studio/particle-studio-more-particles.jpg"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/particle-studio/particle-studio-particles.png",
            thumbSrc: "/img/projects/details/thumbs/particle-studio/particle-studio-particles.png"
          },
        ],
        downloads: [
          {
            title: "Selected Source Code",
            url: "/downloads/ParticlesSourceCode.zip"
          }
        ]
      },
      {
        title: "3D Terrain",
        name: "3d-terrain",
        thumbSrc: "/img/projects/summary/3d-terrain.jpg",
        summary: "This program samples a gray-scale image file and uses the sampled pixel values to create a file with vertex information and calculated lighting values. This file is then used to render simulated 3D terrain.",
        technologies: [
          "OpenGL",
          "Win32",
          "MSVC++",
          "Adobe Photoshop"
        ],
        images: [
          {
            fullSizeSrc: "/img/projects/details/full-size/3d-terrain/3d-terrain-flat-shading.jpg",
            thumbSrc: "/img/projects/details/thumbs/3d-terrain/3d-terrain-flat-shading.jpg"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/3d-terrain/3d-terrain-purple.jpg",
            thumbSrc: "/img/projects/details/thumbs/3d-terrain/3d-terrain-purple.jpg"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/3d-terrain/3d-terrain-white.jpg",
            thumbSrc: "/img/projects/details/thumbs/3d-terrain/3d-terrain-white.jpg"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/3d-terrain/3d-terrain-wireframe.jpg",
            thumbSrc: "/img/projects/details/thumbs/3d-terrain/3d-terrain-wireframe.jpg"
          }
        ],
        downloads: [
          {
            title: "3D Terrain Executable",
            url: "/downloads/3dTerrainViewer.zip"
          }
        ]
      },
      {
        title: "MD2 Model Control",
        name: "md2-model-Control",
        thumbSrc: "/img/projects/summary/md2-models.png",
        summary: "This project involves parsing files using the Quake II character model format, rendering the models via OpenGL, and playing their animations via user input or a simplistic AI.",
        technologies: [
          "OpenGL",
          "Win32",
          "MSVC++"
        ],
        images: [
          { fullSizeSrc: "/img/projects/details/full-size/md2-models/md2-models-1.png", thumbSrc: "/img/projects/details/thumbs/md2-models/md2-models-1.png" },
          { fullSizeSrc: "/img/projects/details/full-size/md2-models/md2-models-2.png", thumbSrc: "/img/projects/details/thumbs/md2-models/md2-models-2.png" }
        ],
        downloads: [
          {
            title: "MD2 Model Control Executable",
            url: "/downloads/Md2ModelControl.zip"
          }
        ]
      },
      {
        title: "3D Selection Sort",
        name: "3d-selection-sort",
        thumbSrc: "/img/projects/summary/3d-selection-sort.png",
        summary: "This program implements the well-known selection sort algorithm, displays the process using 3D textured cubes, and, when the sort is complete, it rotates the sorted cubes.",
        technologies: [
          "OpenGL",
          "Win32",
          "MSVC++",
          "Adobe Photoshop"
        ],
        images: [
          {
            fullSizeSrc: "/img/projects/details/full-size/3d-selection-sort/3d-selection-sort-1.png",
            thumbSrc: "/img/projects/details/thumbs/3d-selection-sort/3d-selection-sort-1.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/3d-selection-sort/3d-selection-sort-2.png",
            thumbSrc: "/img/projects/details/thumbs/3d-selection-sort/3d-selection-sort-2.png"
          }
        ],
        downloads: [
          {
            title: "3D Selection Sort Executable",
            url: "/downloads/3DSelectionSort.zip"
          }
        ]
      },
      {
        title: "Graphical A-Star",
        name: "graphical a-star",
        thumbSrc: "/img/projects/summary/a-star.png",
        summary: "An implementation of the popular A* pathfinding algorithm that animates the discovered path on a grid of tiles.",
        technologies: [
          "OpenGL",
          "Win32",
          "MSVC++",
          "Adobe Photoshop"
        ],
        images: [
          {
            fullSizeSrc: "/img/projects/details/full-size/a-star/a-star-1.png",
            thumbSrc: "/img/projects/details/thumbs/a-star/a-star-1.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/a-star/a-star-2.png",
            thumbSrc: "/img/projects/details/thumbs/a-star/a-star-2.png"
          }
        ],
        downloads: [
          {
            title: "Graphical A-Star Executable",
            url: "/downloads/AStarExecutable.zip"
          },
          {
            title: "Selected Source",
            url: "/downloads/SelectedAStarSource.cpp"
          }
        ]
      },
      {
        title: "VCR State Machine",
        name: "vcr-state-machine",
        thumbSrc: "/img/projects/summary/vcr-paper.png",
        summary: "This paper presents a finite state machine, and its derived logic networks, for a simplistic, hypothetical, VCR.",
        technologies: [
          "Microsoft Visio",
          "Microsoft Word",
          "Adobe Photoshop"
        ],
        images: [
          {
            fullSizeSrc: "/img/projects/details/full-size/vcr-paper/vcr-paper-logic-component.png",
            thumbSrc: "/img/projects/details/thumbs/vcr-paper/vcr-paper-logic-component.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/vcr-paper/vcr-paper-sequential-logic-diagram.png",
            thumbSrc: "/img/projects/details/thumbs/vcr-paper/vcr-paper-sequential-logic-diagram.png"
          },
          {
            fullSizeSrc: "/img/projects/details/full-size/vcr-paper/vcr-paper-state-machine.png",
            thumbSrc: "/img/projects/details/thumbs/vcr-paper/vcr-paper-state-machine.png"
          }

        ],
        downloads: [
          {
            title: "VCR State Machine Paper",
            url: "/downloads/VCRStateMachinePaper.doc"
          }
        ]
      },
      {
        title: "Graph Theory Paper",
        name: "graph-theory-paper",
        thumbSrc: "/img/projects/summary/graph-paper.png",
        summary: "A paper presenting solutions to two famous graph theory problems; the minimal spanning tree problem and the shortest path problem. The paper explores, and compares, brute force methods to Kruskal's and Dijsktra's algorithms for solving the respective problems.",
        technologies: [
          "Microsoft Visio",
          "Microsoft Word",
          "Adobe Photoshop"
        ],
        images: [
          {
            thumbSrc: "/img/projects/details/thumbs/graph-paper/graph-paper-given-graph.png",
            fullSizeSrc: "/img/projects/details/full-size/graph-paper/graph-paper-given-graph.png"
          },
          {
            thumbSrc: "/img/projects/details/thumbs/graph-paper/graph-paper-minimal-spanning-tree.png",
            fullSizeSrc: "/img/projects/details/full-size/graph-paper/graph-paper-minimal-spanning-tree.png"
          },
          {
            thumbSrc: "/img/projects/details/thumbs/graph-paper/graph-paper-shortest-path.png",
            fullSizeSrc: "/img/projects/details/full-size/graph-paper/graph-paper-shortest-path.png"
          }
        ],
        downloads: [
          {
            title: "Graph Theory Paper",
            url: "/downloads/GraphTheoryPaper.doc"
          }
        ]
      }]
  } as ProjectsSliceState,
  reducers: {

  },
})

export type Project = {
  title: string,
  name: string,
  thumbSrc: string,
  summary: string,
  technologies: string[],
  keyFeatures?: string[],
  logoImageSrc?: string,
  images?: {
    thumbSrc: string,
    fullSizeSrc: string
  }[],
  downloads?: {
    title: string
    url: string
  }[]
}

export type ProjectsSliceState = {
  projects: Project[]
}

// Action creators are generated for each case reducer function
export const { } = ProjectsSlice.actions

export default ProjectsSlice.reducer