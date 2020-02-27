import React, { Component } from 'react';

const asyncComponent = () => {
    return class extends Component {
        render() {
            return <div>COMPONENT</div>
        }
    }
}

export default asyncComponent;