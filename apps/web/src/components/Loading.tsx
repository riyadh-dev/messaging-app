import { Box, CircularProgress } from '@mui/material'

const Loading = () => (
	<Box
		display='flex'
		justifyContent='center'
		alignItems='center'
		height='100vh'
		sx={{ m: '2rem' }}
	>
		<CircularProgress size='4rem' />
	</Box>
)

export default Loading
