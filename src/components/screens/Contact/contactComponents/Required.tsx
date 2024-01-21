export const Required = ({ error }: { error: string }) => {
	return <p className='text-[10px] text-red-700 font-normal'>{error}</p>
}
