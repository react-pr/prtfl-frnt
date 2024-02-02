import { IProjects } from '@/interfaces/Interfaces'
import { Demo } from './Demo'
import { Description } from './Description'
import { Source } from './Source'
import { Tag } from './Tag'
import { Title } from './Title'

export const ProjectItem = ({
	name,
	description,
	github_link,
	demo_link,
	image_link,
	tags,
}: IProjects) => {
	return (
		<div className='mt-[100px] p-[5px] flex gap-[20px] items-center w-[100%] max-w-[1000px] mx-auto rounded-lg border-[#000] border-solid border-[1px] hover:border-green-600 transition-all ease-in-out'>
			<img width={600} src={image_link} alt={name} className='rounded-lg' />
			<div className='p-[5px]'>
				<Title title={name} />
				<Description description={description} />
				<div className='flex items-center gap-[10px] pb-[10px]'>
					<Demo demo_link={github_link} name='Demo' />
					<Source demo_link={demo_link} name='Source code' />
				</div>
				<div className='flex items-center gap-[5px] flex-wrap'>
					{tags.map(tag => (
						<Tag
							key={tag.id}
							id={tag.id}
							docs_link={tag.docs_link}
							tag_name={tag.tag_name}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
