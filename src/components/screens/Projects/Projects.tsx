import { ItemsLayout } from '@/components/Layout/ItemsLayout/ItemsLayout'
import { Layout } from '@/components/Layout/Layout'
import { IProjects } from '@/interfaces/Interfaces'
import { HomeServices } from '@/services/homeServices/HomeServices'
import { useEffect, useState } from 'react'
import { ProjectItem } from './projectsComponents/ProjectItem'

export const Projects = () => {
	const [projects, setProject] = useState<IProjects[]>([])
	useEffect(() => {
		const getAllPetProjects = async () => {
			const response = await HomeServices.getAllProjects()
			setProject(response)
		}
		getAllPetProjects()
	}, [])
	return (
		<Layout>
			<ItemsLayout>
				{projects.map(project => (
					<ProjectItem
						key={project.id}
						name={project.name}
						description={project.description}
						github_link={project.github_link}
						demo_link={project.demo_link}
						image_link={`https://prtfl-frntnd.onrender.com/project${project.id}.png`}
						tags={project.tags}
					/>
				))}
			</ItemsLayout>
		</Layout>
	)
}
