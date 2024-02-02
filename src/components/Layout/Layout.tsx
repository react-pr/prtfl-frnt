import { LayoutProps } from '@/interfaces/Interfaces'
import { Popup } from '@/popup/Popup'
import { Header } from './Header/Header'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className='text-[#000] bg-[#fff] w-full mx-auto h-[100vh] relative'>
			<Header />
			{children}
			<Popup />
		</div>
	)
}
