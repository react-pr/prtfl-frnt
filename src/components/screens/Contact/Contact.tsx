import { Layout } from '@/components/Layout/Layout'
import { IFormData } from '@/interfaces/Interfaces'
import { SendMainService } from '@/services/sendMail/SendMailService'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const Contact = () => {
	const [response, setResponse] = useState<string>('')
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormData>({
		mode: 'onChange',
	})
	useEffect(() => {
		const getResult = async () => {
			const result = await SendMainService.getRequest()
			setResponse(result)
			console.log(response)
		}
		getResult()
	}, [])
	const formSubmit: SubmitHandler<IFormData> = async data => {
		await SendMainService.postData(data)
		const message = await SendMainService.postData(data)
		console.log(message)
		reset()
	}
	return (
		<Layout>
			<form onSubmit={handleSubmit(formSubmit)}>
				<div>
					<label>Name</label>
					<input
						{...register('name', { required: 'Name is required!' })}
						type='text'
					/>
					{errors.name?.message && <p>{errors.name.message}</p>}
				</div>
				<div>
					<label>Email</label>
					<input
						{...register('email', { required: 'Email is required!' })}
						type='email'
					/>
					{errors.email?.message && <p>{errors.email.message}</p>}
				</div>
				<div>
					<label>Message</label>
					<input
						{...register('message', { required: 'Message is required!' })}
						type='text'
					/>
					{errors.message?.message && <p>{errors.message.message}</p>}
				</div>
				<button>Submit</button>
			</form>
		</Layout>
	)
}
