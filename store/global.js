export const state = () => ({
	content: {},
	offscreenState: false,
})

export const mutations = {
	setGlobalContent(state, data) {
		console.log("setting state", data);
		state.content = data
	},
	setOffscreenState(state) {
		state.offscreenState = !state.offscreenState
	}
}
