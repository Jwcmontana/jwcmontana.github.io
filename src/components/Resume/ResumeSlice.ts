import { createSlice, Slice } from '@reduxjs/toolkit'
import { WorkExperience } from './IResumeProps'

export const ResumeSlice: Slice = createSlice({
  name: 'resume',
  initialState: {
    workExperiences: [
      {
        companyTitle: "ClientHub",
        jobTitle: "Principal Software Engineer",
        employmentYears: "2018-2023",
        location: "Missoula, Montana",
        accomplishments: [
          {
            header: "Migrated on-premises infrastructure to the cloud.",
            description: "Successfully led the migration of a complex on-premises infrastructure to Google Cloud Platform, which included IIS web servers, Active Directory servers, dockerized legacy PHP applications, MSSQL and MySQL servers, and several ASP.NET WebForms applications. Developed automation scripts using Azure DevOps to streamline deployment and configuration of the cloud infrastructure. Implemented a CI/CD pipeline using Azure DevOps to automate build, test, and deployment processes for the migrated infrastructure."
          },
          {
            header: "Designed Reazo software product by inventorying systems, engaging stakeholders, and developing a comprehensive design.",
            description: "Conducted an inventory of the current systems and processes, engaged with stakeholders, department admins, and end-users, and developed a comprehensive design for the Reazo software product. Utilized wireframes and prototypes to effectively communicate the design vision to stakeholders and ensure alignment with user needs. Conducted thorough user testing and collected feedback to iterate on the design and enhance usability."
          },
          {
            header: "Built an interactive mapping application for geography-based lead matching.",
            description: "Desgined and developed an interactive mapping application using TypeScript, React, and Redux, that leverages the power of Leaflet and US Census mapping data to match incoming leads with subscribed real estate agents based on their geographic location. The application features a visual interface that makes it easy for customer service representatives to quickly and accurately match incoming leads with agents. This solution provides a significant improvement over the previous system, which relied on manual data entry and lacked the sophisticated mapping capabilities of the new application."
          },
          {
            header:"Developed web application to sell and manage subscription products.",
            description:"I designed and developed a user-friendly web application using TypeScript, React, and Redux to manage subscription-based lead generation products marketed towards real estate agents. The application seamlessly integrates data from multiple sources including HubSpot, Chargify, and Okta, providing a comprehensive platform for managing customer data, billing, and authentication information. By consolidating this data into a single platform, the application simplified the process of managing customer subscriptions."
          },
          {
            header:"Developed back-end API for Reazo's software products.",
            description:"Developed an ASP.NET Web API using C# and SQL Server to power Reazo's software products. The API processes incoming leads, manages customer data, and supports subscription management for the front-end applications."
          }

        ]
      },
      {
        companyTitle: "Point Six Solutions (formerly SnapApps.com)",
        jobTitle: "Software Development Consulant",
        employmentYears: "2011-2018",
        location: "Missoula, Montana",
        accomplishments: [
          {
            header: "Designed and led development of web application for capital accounting.",
            description: "As a team leader, developed and deployed a user-friendly web application using React, Redux, and ASP .NET Core Web API, integrating features such as Okta-based secure user authentication, email notifications, and custom reporting to streamline financial management for family ranching businesses. Leveraged GitHub and Azure DevOps for efficient collaboration and timely delivery, and ensured reliable hosting for users by deploying the application on Google Cloud Platform."
          },
          {
            header: "Led development of a widely-used, multi-tenant, bus conduct tracking system.",
            description: "Collaborated with project management and led a team to design and develop a widely-used, multi-tenant bus conduct tracking system utilizing ASP .NET, C#, and MSSQL while adhering to a strict budget. Managed tasks and coordinated with a front-end web developer and another backend developer to ensure seamless integration of all system components, while also contributing significantly to the design and development effort."
          },
          {
            header: "Developed applicant portal for government building permits.",
            description: "Collaborated closely with the programming and project management teams for Missoula County in developing and implementing the online Missoula County Permit System, utilizing technologies such as ASP .NET WebForms, jQuery and Bootstrap for front-end development, and MSSQL Server and Fluent nHibernate for back-end database management, along with Microsoft Team Foundation Server for version control and collaboration. The system enables users to apply for a variety of permits, including address and approach, building, land use, zoning, excavation, mechanical, electrical, and plumbing permits, and offers features such as user management and authentication, document management capabilities, and email notifications to keep applicants and officials up-to-date on the status of their permit applications."
          },
          {
            header: "Developed e-commerce web application for a botique fashion brand.",
            description: "Designed and developed Neesha Fashion's web-based ecommerce platform, featuring an intuitive online shopping experience for customers and easy access to both retail and wholesale inventory. The platform includes a flexible pricing model catering to both retail and wholesale sales, with distinct pricing tiers for each, and enables customers to create accounts to save their preferences and purchase history, streamlining future purchases. The project was built using technologies such as ASP .NET WebForms, jQuery, MSSQL Server, Authorize .NET, Fluent nHibernate, and Microsoft Team Foundation Server."
          },
          {
            header: "Developed subscription based web application for real estate leads.",
            description: "Designed and developed First2Contact, a subscription-based software product utilizing technologies such as ASP .NET WebForms, jQuery, Bootstrap, MSSQL Server, Fluent nHibernate, Microsoft Team Foundation Server, and Chargify to provide real estate agents and brokerages with a lead generation and management service that offers access to a lead generation network for real estate leads, validation, and immediate contact."
          },
          {
            header: "Developed suite of lead generation landing pages.",
            description: "Created and implemented an ASP .NET 4.0, C# and MSSQL-based suite of web sites that capture and generate real estate leads, featuring an extensible framework for integrating multiple lead sources, lead tracking and reporting, lead assignment, and email notifications to enable real estate agents to manage and follow up with potential clients efficiently."
          },
          {
            description: "Worked collaboratively with a domain specialist to design and develop complex SQL queries and reports for a legal malpractice insurance software product."

          },
          {
            description: "Maintained and updated an ASP-based e-commerce website for a custom tool manufacturer."
          },
          {
            description: "Refactored, maintained, and enhanced a VB .NET web application developed for a title insurance company, ensuring its stability and reliability, while also introducing new features to meet evolving business requirements."
          },
          {
            description: "Mentored and provided technical guidance to junior developers and interns, promoting their professional growth and development through code reviews, pair programming, and knowledge sharing sessions."
          }
        ]
      },
      {
        companyTitle: "CHR Solutions (formerly Martin Group)",
        jobTitle: "Software Developer",
        employmentYears: "2007-2011",
        location: "Missoula, Montana",
        "accomplishments": [
          {
            "description": "Modernized a legacy trouble ticketing application written in Classic ASP and VBScript by porting it to .NET 3.5, in collaboration with a senior developer."
          },
          {
            "description": "Upgraded a legacy VB6 Windows application for comparing MSSQL database schemas to .NET 3.5, and proposed a switch to the SQL Server Management Objects API to improve performance and maintainability."
          },
          {
            "description": "Coordinated with third-party contractors to implement an inventory audit system that compared Martin Group's inventory database to the element management systems of major telecom providers like Motorola and Nokia."
          },
          {
            "description": "Maintained a legacy trouble ticketing application, collaborating closely with end-users to develop custom functionality that improved their workflows."
          },
          {
            "description": "Developed new features for an ASP.NET application that tracked and provisioned cable set-top boxes and modems, ensuring timely and accurate delivery of equipment to customers."
          }
        ]
      },
      {
        companyTitle: "US Forest Service - Rocky Mountain Research Station",
        jobTitle: "Computer Technician",
        employmentYears: "2002-2007",
        location: "Missoula, Montana",
        accomplishments: [

          { description: "Provided telephone, walk-in, email, and onsite computer services for the 60+ employees of the Rocky Mountain Research Station in Missoula, Montana." },
          { description: "Developed and maintained inventory of computer systems, software licenses, and peripherals." },
          { description: "Advised on technology related purchases and upgrades." }
        ]
      },
      {
        companyTitle: "University Of Montana - CIS Help Desk",
        jobTitle: "Help Desk Consultant",
        employmentYears: "2001-2003",
        location: "Missoula, Montana",
        accomplishments: [

          { description: "Provided telephone, walk-in, email, and desk-side computer services for the employees and students at the University of Montana." },
        ]
      }
    ],
    technologies: [{
      title: "Languages",
      list: [
        "C#",
        "TypeScript",
        "JavaScript",
        "SQL",
        "HTML",
        "CSS",
        "Visual Basic .NET",
        "PHP",
        "C++",
        "Java",
        "Classic ASP",
        "Visual Basic 6",
      ]
    },
    {
      title: "Web",
      list: [
        "React / Redux",
        "Semantic UI React",
        "Axios",
        "D3.js",
        "Leaflet",
        "Jest",
        "Bootstap",
        "jQuery"
      ]
    },
    {
      title: "Server",
      list: [
        "ASP .NET Web API",
        "Entity Framework",
        "ASP .NET WebForms",
        "Fluent nHibernate",
      ]
    },
    {
      title: "Database",
      list: [
        "MSSQL",
        "MySQL",
        "SQL Server Reporting Services",
        "Firebase"
      ]
    },
    {
      title: "Integrations",
      list: [
        "HubSpot",
        "Okta",
        "SendGrid",
        "Authorize .NET",
        "Chargify"
      ]
    },
    {
      title: "Dev Ops",
      list: [
        "Azure Devops",
        "GitHub",
        "Microsoft Team Foundation Server",
        "CruiseControl.net",
        "Microsoft Visual SourceSafe"
      ]
    },
    {
      title: "Tools",
      list: [
        "Microsoft Visual Studio",
        "Visual Studio Code",
        "SQL Server Management Studio",
        "Postman"
      ]
    },
    {
      title: "Infrastructure",
      list: [
        "Windows",
        "IIS",
        "Active Directory",
        "GCP",
        "NGINX",
        "Apache",
      ]
    }],
    education: [{
      institution: "University Of Montana",
      degree: "Bachelor of Computer Science",
      location: "Missoula, Montana",
      accomplishments: ["3.84/4.0 GPA in Computer Science", "On the Dean’s List for five semesters."]
    },
    {
      institution: "Big Sky High School",
      degree: "High School Diploma",
      location: "Missoula, Montana",
    }],
    objective: "Highly skilled software developer with over 15 years of professional experience in designing and developing innovative software solutions. Passionate about programming since the 90s, and continually staying up-to-date with emerging technologies. Seeking a challenging role with a dynamic company that values creativity, collaboration, and technical excellence. Excited to leverage my expertise to solve complex problems, drive results, and exceed customer expectations."
  },
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { } = ResumeSlice.actions

export default ResumeSlice.reducer