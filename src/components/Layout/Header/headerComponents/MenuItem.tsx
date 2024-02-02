import { MenuPart } from '@/interfaces/Interfaces'
import { GoProjectSymlink } from 'react-icons/go'
import { GrContact } from 'react-icons/gr'
import { IoHomeOutline } from 'react-icons/io5'
import { SiAboutdotme } from 'react-icons/si'
import { Link, useLocation } from 'react-router-dom'

export const MenuItem = ({ id, link, name, component }: MenuPart) => {
	const location = useLocation()
	return (
		<div
			key={id}
			className={
				location.pathname === link
					? 'text-green-600 mr-[20px] hover:hover:text-green-400 transition-all ease-in-out'
					: 'text-[#000] mr-[20px] hover:text-green-400 transition-all ease-in-out'
			}
		>
			<Link to={link} className='font-bold flex items-center gap-[5px]'>
				{component === 'home' ? (
					<IoHomeOutline size={15} />
				) : component === 'about' ? (
					<SiAboutdotme size={15} />
				) : component === 'projects' ? (
					<GoProjectSymlink size={15} />
				) : component === 'contact' ? (
					<GrContact size={15} />
				) : (
					''
				)}
				{name}
			</Link>
		</div>
	)
}
