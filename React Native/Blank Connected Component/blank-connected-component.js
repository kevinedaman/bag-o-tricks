/**
 * Used in Abuzz project for Hypercolor
 */

import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';

class ComponentName extends React.Component {

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentName);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})