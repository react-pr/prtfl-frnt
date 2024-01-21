import { IFormData } from '@/interfaces/Interfaces'
import axios from 'axios'

export const SendMainService = {
	async postData(data: IFormData) {
		const request = await axios.post<IFormData>(
			`${import.meta.env.VITE_BACK_END_URL}sending/`,
			data
		)
		return request.data
	},
	async getRequest() {
		const response = await axios.get<string>(
			`${import.meta.env.VITE_BACK_END_URL}test-get/`
		)
		return response.data
	},
}
