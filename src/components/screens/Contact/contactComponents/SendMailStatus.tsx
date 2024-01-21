export const SendMailStatus = ({ status }: { status: string }) => {
	return (
		<div>
			<p className='font-semibold'>
				Status:{' '}
				<span
					className={
						status === 'Email sending!'
							? `text-green-600 font-light`
							: `text-red-600 font-light`
					}
				>
					{status}
				</span>
			</p>
		</div>
	)
}
