import { ItemsLayout } from '@/components/Layout/ItemsLayout/ItemsLayout'
import { Layout } from '@/components/Layout/Layout'
import { HomeWrapper } from './homeComponents/HomeWrapper'
import { InfoSubtitle } from './homeComponents/InfoSubtitle'
import { InfoTitle } from './homeComponents/InfoTitle'

export const Home = () => {
	return (
		<Layout>
			<ItemsLayout>
				<HomeWrapper>
					<InfoTitle title='H!, I`m M@x Kutsenko' />
					<InfoSubtitle title='React | Vue software engineer' />
				</HomeWrapper>
			</ItemsLayout>
		</Layout>
	)
}
