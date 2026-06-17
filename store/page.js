export const state = () => ({
	content: {},
	children: {},
})

export const mutations = {
	setPageContent(state, data) {
		state.content = data
	},
	setPageChildren(state, data) {
		state.children[data.key] = data.value
	},
}
