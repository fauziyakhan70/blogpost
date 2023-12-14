import React, { createContext, useContext, useEffect, useReducer } from 'react';

const LikeContext = createContext();

export const useLikeContext = () => {
  return useContext(LikeContext);
};

export const LikeProvider = ({ children }) => {
  const initialLikes = JSON.parse(localStorage.getItem('likes')) || {};

  const [likeState, likeDispatch] = useReducer(likeReducer, {
    likes: initialLikes,
  });

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likeState.likes));
  }, [likeState.likes]);

  return (
    <LikeContext.Provider value={{ likeState, likeDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};

const likeReducer = (state, action) => {
  switch (action.type) {
    case 'LIKE':
      const blogId = action.payload;
      const updatedLikes = { ...state.likes };
      updatedLikes[blogId] = (updatedLikes[blogId] || 0) + 1;
      return { ...state, likes: updatedLikes };
    default:
      return state;
  }
};
