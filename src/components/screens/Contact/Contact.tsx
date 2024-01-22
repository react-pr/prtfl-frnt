import { Layout } from '@/components/Layout/Layout'
import { IFormData } from '@/interfaces/Interfaces'
import { SendMainService } from '@/services/sendMail/SendMailService'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from './contactComponents/Button'
import { Label } from './contactComponents/Label'
import { Required } from './contactComponents/Required'

export const Contact = () => {
	const [mailSending, setMailSending] = useState<string>('')
	const [isSending, setIsSending] = useState<boolean>(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormData>({
		mode: 'onChange',
	})
	const formSubmit: SubmitHandler<IFormData> = async data => {
		setIsSending(true)
		await SendMainService.postData(data)
		setMailSending(await SendMainService.postData(data))
		SendMainService.postData(data).then(responseMessage => {
			setMailSending(responseMessage)
		})
		setIsSending(false)
		reset()
	}
	return (
		<Layout>
			<form
				className='mt-[25px] text-center'
				onSubmit={handleSubmit(formSubmit)}
			>
				<div className='mb-[10px] text-center relative'>
					<div className='flex gap-[5px] justify-center relative'>
						<Label labelName='Name' />
					</div>
					<input
						placeholder='Enter your n@me'
						className='px-[20px] py-[10px] text-[14px] text-[#000] font-semibold max-w-[400px] w-[100%] mx-auto outline-none focus:opacity-100 transition-all ease-in-out border-[2px] border-[#000] opacity-20'
						{...register('name', { required: 'Name is required!' })}
						type='text'
					/>
					{errors.name?.message && <Required error={errors.name.message} />}
				</div>
				<div className='mb-[10px] text-center'>
					<Label labelName='Email' />
					<input
						placeholder='Enter your em@il'
						className='px-[20px] py-[10px] text-[14px] text-[#000] font-semibold max-w-[400px] w-[100%] mx-auto outline-none focus:opacity-100 transition-all ease-in-out border-[2px] border-[#000] opacity-20'
						{...register('email', { required: 'Email is required!' })}
						type='email'
					/>
					{errors.email?.message && <Required error={errors.email.message} />}
				</div>
				<div className='mb-[10px] text-center relative'>
					<div className='flex gap-[5px] justify-center'>
						<Label labelName='Message' />
					</div>
					<textarea
						placeholder='Enter your mess@ge'
						className='px-[20px] py-[10px] h-[200px] text-[14px] text-[#000] font-semibold max-w-[400px] w-[100%] mx-auto outline-none focus:opacity-100 transition-all ease-in-out border-[2px] border-[#000] opacity-20'
						{...register('message', { required: 'Message is required!' })}
					/>
					{errors.message?.message && (
						<Required error={errors.message.message} />
					)}
				</div>
				<Button
					buttonTitle='Submit'
					sendingMail={isSending}
					sendingResponse={mailSending}
				/>
			</form>
		</Layout>
	)
}
