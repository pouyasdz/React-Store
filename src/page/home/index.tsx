import { Box } from '@mui/material'
import HomeSlider from '../../components/HomeSlider'
import SuggestBox from '../../components/suggestionBox'
import CategoryBox from '../../components/categoryBox'

function Home() {
  return (
    <Box>
      <HomeSlider/>
      <SuggestBox/>
      <CategoryBox/>
    </Box>
  )
}

export default Home