import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { editBlog } from '../redux/actions';

const predefinedCategories = [
    'Food',
    'Travel',
    'Personal Blogs',
    'Business',
    'Technology',
    'Fashion',
    'Finance',
    'Lifestyle',
    'Fitness',
    'Sports'
];

function EditBlog() {
    const { blogId } = useParams();
    const selectedBlog = useSelector((state) =>
        state.blogs.blogs.find((blog) => blog.id === blogId)
    );

    const dispatch = useDispatch();

    const [title, setTitle] = useState(selectedBlog.title);
    const [content, setContent] = useState(selectedBlog.content);
    const [selectedCategory, setSelectedCategory] = useState(selectedBlog.categories);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() !== '' && content.trim() !== '' && selectedCategory !== '') {
            const updatedBlog = {
                id: blogId,
                title,
                content,
                categories: selectedCategory,
                likes: selectedBlog.likes,
            };

            dispatch(editBlog(updatedBlog));

            // Redirect back to the view page after editing
            window.location.href = `/blog/${blogId}`;
        }
    };

    return (
        <div className="container-fluid" style={{ height: '90vh', display: 'flex', justifyContent: 'center', background: 'linear-gradient(90deg, rgba(109,121,9,1) 0%, rgba(0,255,170,1) 0%' }}>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Edit Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select
                            className="form-select"
                            id="category"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            {predefinedCategories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="content" className="form-label">Content</label>
                        <textarea
                            className="form-control"
                            id="content"
                            rows="5"
                            value={content}
                            onChange={handleContentChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to={`/blog/${blogId}`} className="btn btn-secondary ms-2">Cancel</Link>
                </form>
            </div>
        </div>
    );
}

export default EditBlog;
