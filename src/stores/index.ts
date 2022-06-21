import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'index',
	state: () => ({
		// light || dark
		mode: ''
	})
})