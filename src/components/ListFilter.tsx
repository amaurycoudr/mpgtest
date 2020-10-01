import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const ListFilter = ({ list, filter, title, convert, selected }) => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.filterStyle}>
                <Text style={styles.titleStyle}>{title}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={list}
                    keyExtractor={(index) => index}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => filter(item)}>
                            <Text
                                style={[
                                    styles.elementStyle,
                                    selected === item && styles.selected,
                                ]}
                            >
                                {convert(item)}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

export default ListFilter;

const styles = StyleSheet.create({
    viewStyle: { marginLeft: 20, marginRight: 20 },
    filterStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    titleStyle: {
        fontWeight: 'bold',
        color: '#405BC5',
        fontSize: 20,
        paddingRight: 5,
    },
    listStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    elementStyle: {
        fontSize: 20,
        color: 'black',
        marginLeft: 25,
    },
    selected: {
        color: '#405BC5',
        fontWeight: 'bold',
    },
});
