import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'index',
	state: () => ({
		mode: 'light'
	})
})