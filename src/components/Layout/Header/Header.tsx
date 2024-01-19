import { MenuPart } from '@/interfaces/Interfaces'
import { HeaderServices } from '@/services/headerServices/HeaderServices'
import { useEffect, useState } from 'react'
import { ItemsWrap } from './headerComponents/ItemsWrap'
import { MenuItem } from './headerComponents/MenuItem'

export const Header = () => {
	const [menuNavs, setMenuNavs] = useState<MenuPart[]>([])
	useEffect(() => {
		const getAllPartsOfMenu = async () => {
			const allMenuPars = await HeaderServices.getAllBarsPartitions()
			setMenuNavs(allMenuPars)
		}
		getAllPartsOfMenu()
	}, [])
	return (
		<ItemsWrap>
			{menuNavs.map(part => (
				<MenuItem
					key={part.id}
					id={part.id}
					link={part.link}
					name={part.name}
					component={part.component}
				/>
			))}
		</ItemsWrap>
	)
}
