import React from 'react';
import Post from './Post';

class Posts extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                const posts = data.map(post => new Post(post.id, post.title, post.body));

                this.setState({
                    posts: posts
                });
            })
            .catch(error => {
                alert(error);
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert(error);
    }

    render() {
        return ( <
            div >
            <
            h1 > Blog Posts < /h1>

            {
                this.state.posts.map(post => ( <
                    div key = { post.id } >
                    <
                    h3 > { post.title } < /h3> <
                    p > { post.body } < /p> <
                    hr / >
                    <
                    /div>
                ))
            } <
            /div>
        );
    }
}

export default Posts;