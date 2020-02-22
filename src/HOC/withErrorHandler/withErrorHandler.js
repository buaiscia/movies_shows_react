import React, { Component } from 'react';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        state = {
            error: null
        }

        componentWillUnmount() {
            // console.log('will unmount', this.reqInterceptor, this.resInterceptor);

            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <>
                    <WrappedComponent {...this.props} />
                </>

            );
        }
    }

}

export default withErrorHandler;