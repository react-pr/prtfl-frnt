import { MdErrorOutline } from 'react-icons/md'
import { SlCheck } from 'react-icons/sl'
import { TbClick } from 'react-icons/tb'
import { Hourglass } from 'react-loader-spinner'

export const Button = ({
	buttonTitle,
	sendingMail,
	sendingResponse,
}: {
	buttonTitle: string
	sendingMail: boolean
	sendingResponse: string
}) => {
	return (
		<button className='px-[20px] py-[10px] text-center border-2 border-black font-medium transition-all ease-in-out mx-auto flex items-center gap-[10px]'>
			{buttonTitle}
			{sendingMail ? (
				<Hourglass
					visible={true}
					height='20'
					width='20'
					ariaLabel='hourglass-loading'
					wrapperStyle={{}}
					wrapperClass=''
					colors={['#306cce', '#72a1ed']}
				/>
			) : sendingResponse === 'Email sending successfully!' ? (
				<SlCheck />
			) : sendingResponse === 'Something went wrong' ? (
				<MdErrorOutline />
			) : (
				<TbClick />
			)}
		</button>
	)
}
