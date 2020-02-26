import React, { Component } from 'react';

class Posts extends Component {
    state = {
        posts: [],
    }
    render() {
        return (
            <section className="Posts">
                {this.state.posts}
            </section>
        );
    }
}

export default Posts;