import styled from 'styled-components'

interface ArrowProps {
	color: string
	orientation: string
}

export const BlobContainer = styled.div`
	background: url('/assets/blob.svg');
	margin: 0 auto;
	margin-top: 88px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 522px;
	height: 539px;
	column-gap: 40px;
`

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const ElipseContainer = styled.div`
	background: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 132px;
	height: 133px;
	border-radius: 100%;
`

export const Arrow = styled.div<ArrowProps>`
	background: ${e => (e.color === 'black' ? '#002050' : '#F3785B')};
	transform: rotateY(${e => (e.orientation === 'left' ? '0deg' : '180deg')});
	width: 66.71px;
	height: 25.47px;
	border-radius: 1px;
	mask: url('/assets/arrow.svg');
	mask-size: contain;
	mask-repeat: no-repeat;
	object-fit: contain;
`

export const SyncMessage = styled.p`
	width: 154px;
	height: 24px;

	font-family: Noto Sans;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 25px;
	text-align: center;

	color: #374a5e;

	margin-top: 10px;
`
