import { LayoutProps } from '@/interfaces/Interfaces'

export const ItemsLayout = ({ children }: LayoutProps): JSX.Element => {
	return <div className='mt-[25px] flex items-start gap-5'>{children}</div>
}
