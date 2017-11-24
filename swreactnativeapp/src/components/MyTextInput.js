import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from 'react-redux';

class MyTextInput extends Component {
    render() {
        return (
            <TextInput
                style={{
                    padding: this.props.padding,
                    borderBottomWidth: this.props.borderBottomWidth,
                    fontSize: this.props.fontSize
                }}
                placeholder={this.props.title}
            />
        );
    }
}

const mapStateToProps = state => ({
    lang: state.TranslateReducer.lang
});

export default connect(mapStateToProps, {})(MyTextInput);