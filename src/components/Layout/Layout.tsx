import { LayoutProps } from '@/interfaces/Interfaces'
import { Header } from './Header/Header'

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className='text-[#000] bg-[#fff] w-full max-w-5xl mx-auto h-[100vh]'>
			<Header />
			{children}
		</div>
	)
}
