import { MenuPart } from '@/interfaces/Interfaces'
import axios from 'axios'

export const HeaderServices = {
	async getAllBarsPartitions() {
		const response = await axios.get<MenuPart[]>(
			`${import.meta.env.VITE_BACK_END_URL}/menu_links/`
		)
		return response.data
	},
}
