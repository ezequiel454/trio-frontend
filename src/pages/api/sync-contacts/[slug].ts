import { NextApiRequest, NextApiResponse } from 'next'
import { axiosConfig } from '@/pages/api/util/axios'
import { SyncResponseDto } from '@/pages/api/dto/sync'
import { AxiosInstance } from 'axios'

const axiosConnection = (): AxiosInstance => {
	return axiosConfig({
		url: 'https://trio-backend-dev-zeke.herokuapp.com/v1/'
	})
}

const syncContacts = async (req: NextApiRequest, res: NextApiResponse) => {
	const { slug } = req.query
	const axiosConn = axiosConnection()
	const { data: syncResponse }: SyncResponseDto = await axiosConn.get(
		`sync/${slug}`
	)
	res.json(syncResponse.data.contacts)
}

export default syncContacts
