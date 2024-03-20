import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { PostCard, Container } from "../components/index";

function AllPosts() {
    const [posts, setPosts] = useEffect([]);
    useEffect(() => {}, []);
    appwriteService.getPosts([]).them((posts) => {
        if (posts) {
            setPosts(posts.documents);
        }
    });
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => {
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard post={post} />
                        </div>;
                    })}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
