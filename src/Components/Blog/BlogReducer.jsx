// Reducer function for managing state related to blog posts
export function BlogReducer(state, action) {
	// Switch statement to handle different types of actions
	switch (action.type) {
		// Case for initializing state with initial data
		case 'INITIAL_LOAD':
			return action.payload; // Set the state to the payload received from the action
		// Case for adding a new blog post
		case 'CREATE_POST':
			return [...state, action.payload]; // Add the new post to the existing state using spread operator
		// Case for updating an existing blog post
		case 'UPDATE_POST':
			// Map through the state and replace the post with the matching ID with the updated post from the payload
			return state.map(post => (post.id === action.payload.id ? action.payload : post));
		// Case for deleting a blog post
		case 'DELETE_POST':
			// Filter out the post with the matching ID from the state
			return state.filter(post => post.id !== action.payload.id);
		// Default case: return the current state if the action type is unknown
		default:
			return state;
	}
}
