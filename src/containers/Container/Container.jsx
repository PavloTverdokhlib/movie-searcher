import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

class Container extends Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        // user: state.user
    };
};

const mapDispatchToProps = {
    // getData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
