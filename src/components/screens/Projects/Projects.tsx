import { ItemsLayout } from '@/components/Layout/ItemsLayout/ItemsLayout'
import { Layout } from '@/components/Layout/Layout'
import { IProjects } from '@/interfaces/Interfaces'
import { HomeServices } from '@/services/homeServices/HomeServices'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
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
				<Swiper
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					{projects.map(project => (
						<SwiperSlide>
							<ProjectItem
								key={project.id}
								name={project.name}
								description={project.description}
								github_link={project.github_link}
								demo_link={project.demo_link}
								image_link={`https://prtfl-frntnd.onrender.com/project${project.id}.png`}
								tags={project.tags}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</ItemsLayout>
		</Layout>
	)
}
