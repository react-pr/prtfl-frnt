import { Layout } from '@/components/Layout/Layout'
import { HomeWrapper } from './homeComponents/HomeWrapper'
import { InfoSubtitle } from './homeComponents/InfoSubtitle'
import { InfoTitle } from './homeComponents/InfoTitle'

export const Home = () => {
	return (
		<Layout>
			<HomeWrapper>
				<InfoTitle title='H!, I`m M@x Kutsenko' />
				<InfoSubtitle title='React | Vue software engineer' />
			</HomeWrapper>
		</Layout>
	)
}
