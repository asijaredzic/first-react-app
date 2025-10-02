import React from "react";
import { Text,StyleSheet, View, FlatList } from "react-native";

const hobbys=[
    {activity: "judo", time: "everyday evening"},
    {activity: "volleyball", time: "monday, friday"},
];

const marks=[
    {subject: "biology", grade:"7"},
    {subject: "chemistry", grade: "8"},
    {subject: "math", grade: "7"},
];

const payments=[
    {category:"university", date:"30.09.2025", price:"800$"},
    {category:"insurance", date:"brmbrmpatapim", price:"10$"},
];

const StudentScreen =()=>{
    return (
        <View style={style.container}>
            <Text style={style.title}>student info</Text>
            <Text style={style.info}>ime: Asija</Text>
            <Text style={style.info}>prezime: Redzic</Text>
            <Text style={style.info}>datum rodjenja: 05.17.2012.</Text>
            <Text style={style.info}>broj indexa: 6</Text>

            <Text style={style.title}>hobbies</Text>

            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={hobby=>hobby.activity}
                data={hobbys}
                renderItem={({item})=>{
                        return (
                            <View style={style.itemBox}>
                            <Text style={style.itemText}>{item.activity} - {item.time}</Text>
                            </View>
                        );
                            } 
                        }
            />

            <Text style={style.title}>grades</Text>

             <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={mark=>mark.subject}
                data={marks}
                renderItem={({item})=>{
                        return (
                            <View style={style.itemBox}>
                            <Text style={style.itemText}>{item.subject} - {item.grade}</Text>
                            </View>
                        )
                            } 
                        }
            />

            <Text style={style.title}>Payments</Text>
            
             <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={payment=>payment.category}
                data={payments}
                renderItem={({item})=>{
                        return (
                            <View style={style.itemBox}>
                            <Text style={style.itemText}>{item.category} - {item.date} - {item.price}</Text>
                            </View>
                        )
                            } 
                        }
            />


        </View>
    
)};

const style= StyleSheet.create({
     container: {
        flex:1,
        backgroundColor:"#7ca6bbff",
        padding:20,
     },
     title:{
        fontSize:26,
        fontWeight:"bold",
        textAlign:"center",

     },
     info:{
        fontSize:18,
        textAlign:"left",
        marginBottom:5,
     },
     itemBox: {
        backgroundColor: "#3e7dc6ff",
        borderRadius:20,
        margin:5,
        height:80,
        width:350,
     },
     itemText:{
        fontSize:16,
        textAlign:"center",
        
     },

});

export default StudentScreen;