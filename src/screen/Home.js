import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator} from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { screens } from '../constants'
import { setUser } from '../redux/reducer/homeReducer'
import { selectCurrentUser, selectDataUser, selectLoading } from '../redux/selector/homeSelector';
import { fetchUsers } from '../redux/action/homeActions'
// import { getState } from '../redux/store/store'

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(selectCurrentUser);
    const isFetching = useSelector(selectLoading);
    const data = useSelector(selectDataUser);

    console.log("isFetching", isFetching)
    console.log("currentUser", currentUser)
    console.log("data", data)
    const [text, setText] = React.useState('');

    useEffect(() => {
        console.log("useEffect")
        dispatch(fetchUsers())
    }, []);

    const onChangeText = (value) => {
        setText(value)
        dispatch(setUser(value));
    }

    const handlePress = () => {
        // console.log("onpress"),
        dispatch(fetchUsers())
    }

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                placeholder='Enter your Name'
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={text}
            />
            <Text>{currentUser}</Text>
            <Button
                title="Go to Counter Screen"
                onPress={() => navigation.navigate(screens.COUNTER_SCREEN)}
            />
            {isFetching ? <ActivityIndicator size="large" style={styles.loader} /> :
            <View>
                <Button title={'Reload'} onPress={handlePress} />
                {data?.map((user) => {
                    return (
                        <View style={styles.container} key={user.id}>
                            <View>
                                <View style={styles.dataContainer}>
                                    <Text>
                                        {user.first_name} {user.last_name}
                                    </Text>
                                </View>
                                <View style={styles.dataContainer}>
                                    <Text>{user.email}</Text>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View> }
        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    loader: {
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    container: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    dataContainer: {
        flexDirection: 'row',
    },
})