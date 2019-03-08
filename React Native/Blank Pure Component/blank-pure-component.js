import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

import STYLES from '../../styles';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';

class ComponentName extends React.PureComponent {
    static propTypes = {
        
    }
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});