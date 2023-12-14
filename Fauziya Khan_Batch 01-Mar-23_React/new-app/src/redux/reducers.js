import {
    FETCH_DATA,
    ADD_BLOG,
    DELETE_BLOG,
    EDIT_BLOG,
    VIEW_BLOG,
    LIKE_BLOG,
} from './actions';

const initialState = {
    blogs: [],
    selectedBlog: null,
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                blogs: action.payload,
            };
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
            };
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter((blog) => blog.id !== action.payload),
            };
        case EDIT_BLOG:
            return {
                ...state,
                blogs: action.payload,
            };
        case VIEW_BLOG:
            return {
                ...state,
                selectedBlog: action.payload,
            };
        case LIKE_BLOG:
            return {
                ...state,
                blogs: action.payload,
            };
        default:
            return state;
    }
};

export default blogReducer;
