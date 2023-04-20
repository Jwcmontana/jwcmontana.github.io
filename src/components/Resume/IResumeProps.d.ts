import { SemanticICONS } from "semantic-ui-react";

export interface IResumeProps {
  workExperiences :WorkExperience[]
  educationExperience :EducationExperience[]
  technologyExperience: TechnologyExperience[]
  objective: string
}

export interface TechnologyExperience {
  title: string
  list: string[]
}
export interface WorkExperience {
  companyTitle: string;
  jobTitle: string;
  employmentYears: string;
  location: string;
  accomplishments: {
    icon?: SemanticICONS;
    header?: string;
    description: string;
  }[];
}

export interface EducationExperience {
  institution: string;
  degree: string;
  location: string;
  accomplishments? : string[]
}






