import styled, { createGlobalStyle } from 'styled-components'

interface LoaderContainerProps {
	isLoading: boolean
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  html {
    min-height: 100vh;
  }
`

export const LoaderContainer = styled.div<LoaderContainerProps>`
	background-color: rgba(0, 0, 0, 0.6);
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	display: ${e => (e.isLoading ? 'flex' : 'none')};
	z-index: 1;
	/* height: 100vh; */
`
