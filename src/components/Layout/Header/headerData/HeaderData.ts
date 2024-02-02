import { MenuPart } from '@/interfaces/Interfaces'

export const HeaderData: MenuPart[] = [
	{
		id: 1,
		name: 'Home',
		link: '/',
		component: 'home',
	},
	{
		id: 2,
		name: 'About',
		link: '/about/',
		component: 'about',
	},
	{
		id: 3,
		name: 'Projects',
		link: '/projects/',
		component: 'projects',
	},
	{
		id: 4,
		name: 'Contact',
		link: '/contact/',
		component: 'contact',
	},
]
