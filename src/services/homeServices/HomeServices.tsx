import { IProjects } from '@/interfaces/Interfaces'
import axios from 'axios'

export const HomeServices = {
	async getAllProjects() {
		const response = await axios.get<IProjects[]>(
			`${import.meta.env.VITE_BACK_END_URL}projects/`
		)
		return response.data
	},
}
