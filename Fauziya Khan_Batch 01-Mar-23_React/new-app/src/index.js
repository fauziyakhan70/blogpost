import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import blogReducer from './redux/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchInitialData } from './redux/actions';
import { v4 as uuidv4 } from 'uuid';


const store = configureStore({
    reducer: {
        blogs: blogReducer,
    },
});

const newBlogId = uuidv4();

const initialData = [
    {
        id: newBlogId,
        title: 'Test',
        categories: 'Test',
        content: 'This is a test file for my app.',
        likes: 3,
    }
];

if (!localStorage.getItem('blogs')) {
    localStorage.setItem('blogs', JSON.stringify(initialData));
}

store.dispatch(fetchInitialData());


const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);


