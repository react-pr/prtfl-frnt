import { LayoutProps } from '@/interfaces/Interfaces'

export const ItemsWrap = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className='flex items-center max-w-[500px] w-[100%] mx-auto my-0 px-[10px] justify-center min-h-[80px]'>
			{children}
		</div>
	)
}
