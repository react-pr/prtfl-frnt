import { CiHashtag } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export const Tag = ({
	id,
	docs_link,
	tag_name,
}: {
	id: number
	docs_link: string
	tag_name: string
}) => {
	return (
		<Link
			to={docs_link}
			key={id}
			className='flex items-center text-[15px] font-light gap-[2px] hover:text-green-500 transition-all ease-in-out'
		>
			<CiHashtag />
			{tag_name}
		</Link>
	)
}
