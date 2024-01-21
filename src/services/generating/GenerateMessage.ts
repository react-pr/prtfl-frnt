import axios from 'axios'

export const GenerateMessage = {
	async getMessage() {
		const response = await axios.get<string>(
			`${import.meta.env.VITE_BACK_END_URL}openai/generateMessage/`
		)
		return response.data
	},
}
