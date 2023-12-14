import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home({ blogs }) {
    console.log(blogs);
    return (
        <div className="container-fluid" style={{ height: '90vh', display: 'flex', justifyContent: 'center', background: 'linear-gradient(90deg, rgba(109,121,9,1) 0%, rgba(0,255,170,1) 0%' }}>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Blog Posts</h2>
                <table className="table table-bordered table-striped">
                    <tbody>
                        {blogs.map((blog) => (
                            <tr key={blog.id} style={{ height: '60px' }}>
                                <td className="align-middle">
                                    <Link to={`/blog/${blog.id}`} className="text-decoration-none fw-bold text-dark p-0" data-abc="true">
                                        {blog.title}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs.blogs,
    };
};

export default connect(mapStateToProps)(Home);
