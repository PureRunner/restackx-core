import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class CustomLink extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onLink}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: "center",
                    width: this.props.width,
                    height: this.props.height
                }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: ('bold'),
                            color: this.props.color
                        }}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

CustomLink.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    onLink: PropTypes.func,
};

export default CustomLink;