import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import {CHANGE_SOMETHING} from '../actions/FirstPageActions';
class FirstPage extends PureComponent {
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        tabBarLabel: '页面1',
        tabBarIcon:({ tintColor }) => (
            <Image
                source={require('../resources/labelIcon/photo.png')}
                style={[{width: 26,height:26},{tintColor:tintColor}]}
            />
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.dispatch(CHANGE_SOMETHING());
                    }}
                >
                    <Text style={styles.welcome}>
                        {this.props.status == 'CHANGE_SOMETHING' ? 'You touched me,redux work successfully!' : 'This is First Page!\nTouch me to test redux'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textView: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
        color:'red'
    },
});
const mapStateToProps = (store)=>({
    status: store.FirstPageReducer.status
});
export default connect(mapStateToProps)(FirstPage);

