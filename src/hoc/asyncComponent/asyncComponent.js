import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }
        render() {
            return this.state.component
        }
    }
}

export default asyncComponent;