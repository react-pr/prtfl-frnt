export const Button = ({ buttonTitle }: { buttonTitle: string }) => {
	return (
		<button className='px-[20px] py-[10px] text-center border-[#000] border-[2px] font-medium transition-all ease-in-out'>
			{buttonTitle}
		</button>
	)
}
