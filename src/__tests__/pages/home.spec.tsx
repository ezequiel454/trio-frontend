import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import preloadAll from 'jest-next-dynamic'
import Home from '@/pages'
import GlobalStyles from '@/styles/GlobalStyles'

beforeAll(async () => {
	await preloadAll()
})

jest.mock('@/utils/axios', () => ({
	api: {
		get: jest
			.fn()
			.mockImplementationOnce(() => ({ data: 3 }))
			.mockReturnValueOnce(new Error('Simulated error'))
			.mockImplementationOnce(() => ({ data: 5 }))
			.mockReturnValueOnce(new Error('Simulated error'))
	}
}))

describe('Home page tests', () => {
	it('Success request sync contacts sendgrid', async () => {
		const { debug, getByTestId } = render(
			<>
				<GlobalStyles />
				<Home />
			</>
		)

		const button = getByTestId('button-sendgrid')

		fireEvent.click(button, {})

		await waitFor(() =>
			expect(getByTestId('message-sendgrid')).toHaveTextContent(
				'3 contacts were synced! on sendgrid'
			)
		)
		debug()
	})

	it('Reject request sync contacts sendgrid', async () => {
		const { debug, getByTestId } = render(
			<>
				<GlobalStyles />
				<Home />
			</>
		)

		const button = getByTestId('button-sendgrid')

		fireEvent.click(button)

		await waitFor(() =>
			expect(getByTestId('message-sendgrid')).toHaveTextContent(
				'Error On Sendgrid!'
			)
		)
		debug()
	})

	it('Success request sync contacts firebase', async () => {
		const { debug, getByTestId } = render(
			<>
				<GlobalStyles />
				<Home />
			</>
		)

		const button = getByTestId('button-firebase')

		fireEvent.click(button)

		await waitFor(() =>
			expect(getByTestId('message-firebase')).toHaveTextContent(
				'5 contacts were synced! on firebase'
			)
		)
		debug()
	})

	it('Reject request sync contacts firebase', async () => {
		const { debug, getByTestId } = render(
			<>
				<GlobalStyles />
				<Home />
			</>
		)

		const button = getByTestId('button-firebase')

		fireEvent.click(button)

		await waitFor(() =>
			expect(getByTestId('message-firebase')).toHaveTextContent(
				'Error On Firebase!'
			)
		)
		debug()
	})
})
