import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBlog } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

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

function AddBlog({ addBlog }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

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
            const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
            
            
            const newBlogId = uuidv4();
    
            
            const newBlog = {
                id: newBlogId,
                title,
                content,
                categories: selectedCategory,
                likes: 0, 
            };
    
            addBlog(newBlog);
    
            const updatedBlogs = [...existingBlogs, newBlog];
            localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    
            setTitle('');
            setContent('');
            setSelectedCategory('');
        }
        
        window.location.href = '/';
    };
    

    return (
        <div className="container-fluid" style={{ height: '90vh', display: 'flex', justifyContent: 'center', background: 'linear-gradient(90deg, rgba(109,121,9,1) 0%, rgba(0,255,170,1) 0%' }}>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Add Blog</h2>
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
                            <option value="" disabled>Select a category</option>
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
                    <button type="submit" className="btn btn-primary">Add Blog</button>
                    <Link to="/" className="btn btn-secondary ms-2">Cancel</Link>
                </form>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    addBlog,
};

export default connect(null, mapDispatchToProps)(AddBlog);
