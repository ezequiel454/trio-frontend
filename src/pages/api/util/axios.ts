import axios from 'axios'
import { AxiosConfig } from '@/pages/api/dto/common'

export const axiosConfig = (configs: AxiosConfig) =>
	axios.create({
		baseURL: configs.url ?? process.env.AXIOS_BASE_URL,
		headers: configs.headers
	})
