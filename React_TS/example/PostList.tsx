import React from 'react';
import PostCard from './PostCard';
import type {PostProps} from '@types/types';

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

const PostList = async() => {

    const data:PostProps[] = await getData();


    return (
       <div className="postList">
              {data.map((post:PostProps) => {
                 <PostCard key={post.id} title={post.title} body={post.body} />
              })}
         </div>
    );
}

export default PostList;