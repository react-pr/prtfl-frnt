import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Demo = ({
	demo_link,
	name,
}: {
	demo_link: string
	name: string
}) => {
	return (
		<Link
			to={demo_link}
			className='flex items-center gap-[5px] bg-[#fff] border-[#000] border-[2px] max-w-[100px] justify-center rounded-md text-center px-[8px] py-[3px] text-[13px] hover:border-green-600 transition-all ease-in-out'
		>
			{name}
			<FaGithub />
		</Link>
	)
}
