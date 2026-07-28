import { ProjectSection } from "./project-section.model";
import { ProjectTech } from "./project-tech.model";

export interface Project {
    id: number;
    name: string;
    slug: string;
    image: string;
    description: string;
    github: string;
    demo: string | null;
    createdAt: string;
    techs: ProjectTech[];
    sections: ProjectSection[];
}