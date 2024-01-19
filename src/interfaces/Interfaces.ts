import { ReactNode } from 'react'

export interface MenuPart {
	id: number
	name: string
	link: string
	component: string
}

export interface IProjects {
	id?: number
	name: string
	description: string
	github_link: string
	demo_link: string
	image_link: string
	tags: ITags[]
}

export interface ITags {
	id: number
	tag_name: string
	docs_link: string
}

export interface IFormData {
	name: string
	email: string
	message: string
}

export interface LayoutProps {
	children: ReactNode
}
