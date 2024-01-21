import { Layout } from '@/components/Layout/Layout'
import { IFormData } from '@/interfaces/Interfaces'
import { SendMainService } from '@/services/sendMail/SendMailService'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from './contactComponents/Button'
import { Label } from './contactComponents/Label'
import { Required } from './contactComponents/Required'
import { SendMailStatus } from './contactComponents/SendMailStatus'

export const Contact = () => {
	const [mailSending, setMailSending] = useState<string>('')
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormData>({
		mode: 'onChange',
	})
	const formSubmit: SubmitHandler<IFormData> = async data => {
		await SendMainService.postData(data)
		SendMainService.postData(data).then(responseMessage => {
			setMailSending(responseMessage)
		})
		reset()
	}
	return (
		<Layout>
			<form
				className='mt-[25px] text-center'
				onSubmit={handleSubmit(formSubmit)}
			>
				<div className='mb-[10px]'>
					<Label labelName='Name' />
					<input
						placeholder='Enter your n@me'
						className='text-[14px] text-[#000] font-semibold max-w-[400px] w-[100%] mx-auto outline-none focus:opacity-100 transition-all ease-in-out border-[2px] border-[#000] opacity-20'
						{...register('name', { required: 'Name is required!' })}
						type='text'
					/>
					{errors.name?.message && <Required error={errors.name.message} />}
				</div>
				<div className='mb-[10px]'>
					<Label labelName='Email' />
					<input
						placeholder='Enter your em@il'
						className='text-[14px] text-[#000] font-semibold max-w-[400px] w-[100%] mx-auto outline-none focus:opacity-100 transition-all ease-in-out border-[2px] border-[#000] opacity-20'
						{...register('email', { required: 'Email is required!' })}
						type='email'
					/>
					{errors.email?.message && <Required error={errors.email.message} />}
				</div>
				<div className='mb-[10px]'>
					<Label labelName='Message' />
					<textarea
						placeholder='Enter your mess@ge'
						className='text-[14px] text-[#000] font-semibold max-w-[400px] w-[100%] mx-auto outline-none focus:opacity-100 transition-all ease-in-out border-[2px] border-[#000] opacity-20'
						{...register('message', { required: 'Message is required!' })}
					/>
					{errors.message?.message && (
						<Required error={errors.message.message} />
					)}
				</div>
				<Button buttonTitle='Submit' />
				<SendMailStatus status={mailSending} />
			</form>
		</Layout>
	)
}
