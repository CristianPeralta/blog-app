import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentWillMount() {
            importComponent()
                .then(cmp => {
                    this.setState({ component: cmp.default });
                });
        }
        render() {
            return this.state.component
        }
    }
}

export default asyncComponent;