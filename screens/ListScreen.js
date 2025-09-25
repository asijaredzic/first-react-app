// import React from "react";
// import { Text, StyleSheet, FlatList, View } from "react-native";

// const students=[
//     {name:'Asija',surname:'Redžić',age:'25'},
//     {name:'Hena', surname:'Smajić',age:'25'},
//     {name:'Farah',surname:'Kurtović',age:'25'},
// ];

// const ListScreen=()=>{
//     return (
//         <View>
//             <Text>ListScreen</Text>
//             <FlatList
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={student=>student.surname}
//             data={students}
//             renderItem={({item})=>{
//                 return <Text styles={styles.studentWrapper}>{item.name}-{item.surname}-{item.age}</Text>
//             }
//         }
//             />

//         </View>
//     )
// }

// const style=StyleSheet.create({})

// export default ListScreen;

import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

const students=[
    {word1:'fish',word2:'pear',word3:'25'},
    {word1:'apple', word2:'sheep',word3:'25'},
    {word1:'banana',word2:'coral',word3:'25'},
];

const ListScreen=()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ListScreen</Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={student=>student.surname}
            data={students}
            renderItem={({item})=>{
                return (
                     <Text styles={styles.studentWrapper}>
                        {item.word1}-{item.word2}-{item.word3}
                     </Text>
                );
            }
        }
            />

        </View>
    );
};

const style=StyleSheet.create({
    container
})

export default ListScreen;