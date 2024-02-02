import { ContactLink } from '@/interfaces/Interfaces'
import {
	FaGithub,
	FaInstagramSquare,
	FaLinkedin,
	FaTelegram,
} from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'
import { Link } from 'react-router-dom'

export const PopupComponent = ({ link, icon }: ContactLink) => {
	return (
		<div className='block p-[10px]'>
			<Link to={link}>
				{icon === 'linkedin' ? (
					<FaLinkedin
						className='hover:text-green-500 transition-all ease-in-out'
						size={30}
					/>
				) : icon === 'telegram' ? (
					<FaTelegram
						className='hover:text-green-500 transition-all ease-in-out'
						size={30}
					/>
				) : icon === 'instagram' ? (
					<FaInstagramSquare
						className='hover:text-green-500 transition-all ease-in-out'
						size={30}
					/>
				) : icon === 'github' ? (
					<FaGithub
						className='hover:text-green-500 transition-all ease-in-out'
						size={30}
					/>
				) : icon === 'byCoffe' ? (
					<SiBuymeacoffee
						className='hover:text-green-500 transition-all ease-in-out'
						size={30}
					/>
				) : (
					''
				)}
			</Link>
		</div>
	)
}
