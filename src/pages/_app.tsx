import GlobalStyles from '@/styles/GlobalStyles'

// just to get reports
// export function reportWebVitals(metric) {
// 	switch (metric.name) {
// 		case 'FCP':
// 			console.log('FCP')
// 			console.log(metric)
// 			break
// 		case 'LCP':
// 			console.log('LCP')
// 			console.log(metric)
// 			break
// 		case 'CLS':
// 			console.log('CLS')
// 			console.log(metric)
// 			break
// 		case 'FID':
// 			console.log('FID')
// 			console.log(metric)
// 			break
// 		case 'TTFB':
// 			console.log('TTFB')
// 			console.log(metric)
// 			break
// 		case 'Next.js-hydration':
// 			console.log('hydration')
// 			console.log(metric)
// 			break
// 		case 'Next.js-route-change-to-render':
// 			console.log('route-change-to-render')
// 			console.log(metric)
// 			break
// 		case 'Next.js-render':
// 			console.log('js-render')
// 			console.log(metric)
// 			break
// 		default:
// 			break
// 	}
// }

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
