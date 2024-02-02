import { PopupComponent } from './popupComponents/PopupComponent'
import { Data } from './popupData/Data'

export const Popup = () => {
	return (
		<div className='absolute top-[50%] translate-y-[-50%] left-[0px]'>
			{Data.map((contactItem, key) => (
				<PopupComponent
					key={key}
					link={contactItem.link}
					icon={contactItem.icon}
				/>
			))}
		</div>
	)
}
