export const ADD_BLOG = 'ADD_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';
export const EDIT_BLOG = 'EDIT_BLOG';
export const VIEW_BLOG = 'VIEW_BLOG';
export const LIKE_BLOG = 'LIKE_BLOG';
export const FETCH_DATA = 'FETCH_DATA';

export const fetchInitialData = () => async (dispatch) => {
    const dataFromStorage = localStorage.getItem('blogs');
    const data = dataFromStorage ? JSON.parse(dataFromStorage) : [];
  
    dispatch({ type: FETCH_DATA, payload: data });
};
  
export const addBlog = (blog) => {
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    existingBlogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));
    return {
      type: ADD_BLOG,
      payload: blog,
    };
};

export const deleteBlog = (blogId) => {
    return (dispatch, getState) => {
        dispatch({
            type: DELETE_BLOG,
            payload: blogId,
        });

        const existingBlogs = getState().blogs.blogs; 
        const updatedBlogs = existingBlogs.filter((blog) => blog.id !== blogId);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };
};

export const editBlog = (updatedBlog) => {
    return (dispatch, getState) => {
        const state = getState();
        const updatedBlogs = state.blogs.blogs.map((blog) => {
            if (blog.id === updatedBlog.id) {
                return updatedBlog;
            }
            return blog;
        });

        dispatch({
            type: EDIT_BLOG,
            payload: updatedBlogs,
        });

        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };
};


export const viewBlog = (blogId) => {
    return {
      type: VIEW_BLOG,
      payload: blogId,
    };
};

 export const likeBlog = (blogId) => {
    return (dispatch, getState) => {
        const state = getState();
        const updatedBlogs = state.blogs.blogs.map((blog) => {
            if (blog.id === blogId) {
                return { ...blog, likes: blog.likes + 1 };
            }
            return blog;
        });

        dispatch({
            type: LIKE_BLOG,
            payload: updatedBlogs,
        });

        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };
};

