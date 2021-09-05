import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { api } from '@/utils/axios'

import { LoaderContainer } from '@/styles/GlobalStyles'
import {
	BlobContainer,
	ButtonContainer,
	ElipseContainer,
	Arrow,
	SyncMessage
} from '@/styles/pages/home'

const home = () => {
	const [isSync, setIsSync] = useState<boolean>(false)
	const [messageSendgrid, setMessageSendgrid] = useState<string>(
		'Sync Contacts To Sendgrid'
	)
	const [messageFirebase, setMessageFirebase] = useState<string>(
		'Sync Contacts To Firebase'
	)

	const PushSyncButton = useCallback(async (provider: string) => {
		if (isSync) return

		const isFirebase = provider === 'firebase'

		setIsSync(true)
		try {
			const { data: contacts } = await api.get(`sync-contacts/${provider}`)
			setIsSync(false)
			isFirebase
				? setMessageFirebase(`${contacts} contacts were synced! on firebase`)
				: setMessageSendgrid(`${contacts} contacts were synced! on sendgrid`)
		} catch (error) {
			setIsSync(false)
			isFirebase
				? setMessageFirebase(`Error On Firebase!`)
				: setMessageSendgrid(`Error On Sendgrid!`)
			console.log(error)
		}
	}, [])

	return (
		<>
			<BlobContainer>
				<ButtonContainer>
					<ElipseContainer onClick={() => PushSyncButton('sendgrid')}>
						<Arrow color="black" orientation="left" />
						<Arrow color="orange" orientation="right" />
					</ElipseContainer>
					<SyncMessage>{messageSendgrid}</SyncMessage>
				</ButtonContainer>
				<ButtonContainer>
					<ElipseContainer onClick={() => PushSyncButton('firebase')}>
						<Arrow color="black" orientation="left" />
						<Arrow color="orange" orientation="right" />
					</ElipseContainer>
					<SyncMessage>{messageFirebase}</SyncMessage>
				</ButtonContainer>
			</BlobContainer>
			<LoaderContainer isLoading={isSync}>
				{isSync && (
					<Loader
						type="TailSpin"
						color={'#E5F5F8'}
						height={100}
						width={100}
						visible={isSync}
					/>
				)}
			</LoaderContainer>
		</>
	)
}

export default home

const Loader = dynamic(() => import('react-loader-spinner'), { ssr: false })
