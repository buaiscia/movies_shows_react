import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                <h1>Layout</h1>
                <main>
                    {this.props.children}
                </main>
            </div>

        )
    }
}

export default Layout;