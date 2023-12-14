import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { deleteBlog } from '../redux/actions';
import { likeBlog } from '../redux/actions';

const ViewBlog = () => {
    const { blogId } = useParams();
    const selectedBlog = useSelector((state) =>
        state.blogs.blogs.find((blog) => blog.id === blogId)
    );

    const dispatch = useDispatch();

    if (!selectedBlog) {
        return <div>Blog not found</div>;
    }

    const handleDelete = () => {
        dispatch(deleteBlog(blogId));
        window.location.href = '/';
    };

    const handleLike = () => {
        dispatch(likeBlog(blogId));
    };

    return (
        <div className="container-fluid" style={{ height: '90vh', display: 'flex', justifyContent: 'center', background: 'linear-gradient(90deg, rgba(109,121,9,1) 0%, rgba(0,255,170,1) 0%' }}>
            <div className="container mt-4">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th colSpan="4">
                                <div className="d-flex justify-content-between">
                                    <Link to="/">Back to Home</Link>
                                    <div>
                                        <button className="btn btn-success me-2" onClick={handleLike}>
                                            Like {selectedBlog.likes}
                                        </button>
                                        
                                        <button className="btn btn-danger me-2" onClick={handleDelete}>
                                            Delete
                                        </button>
                                        <Link to={`/edit-blog/${blogId}`} className="btn btn-warning">
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{selectedBlog.content}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewBlog;
