import React from "react";

interface IProjectCard {
    title: string,
    description: string,
    repo: string,
    icon: string,
}

const ProjectCard: React.FC<IProjectCard> = ({title, description, repo, icon}) => {
    return (
        <div className="border-4 p-4">
            <div>{title}</div>
            <div>{description}</div>
            <div>{repo}</div>
            <div>{icon}</div>
        </div>
    )
}

export default ProjectCard;