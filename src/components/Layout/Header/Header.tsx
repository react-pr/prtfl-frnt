import { ItemsWrap } from './headerComponents/ItemsWrap'
import { MenuItem } from './headerComponents/MenuItem'
import { HeaderData } from './headerData/HeaderData'

export const Header = () => {
	return (
		<ItemsWrap>
			{HeaderData.map(part => (
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
