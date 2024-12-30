import { SafeAreaView, View, Text, Image, StyleSheet, Platform } from 'react-native';
import React from 'react';

const getTypeDetails=(type)=>{
    switch(type.toLowerCase()){
        case "electric":
            return{ borderColor:"#FFD700" , emoji:"⚡⚡" };
        case "Water":
            return{ borderColor:"#6493EA" , emoji:"💧" };
        case "fire":
            return{ borderColor:"#FF5733" , emoji:"🔥" };
        case "grass":
            return{ borderColor:"#66CC66" , emoji:"🥬" };
        default:
            return{ borderColor:"#A0A0A0" , emoji:"❓" };
    }
};


export default function PokemonCard({
  name ,
  image,
  type ,
  hp ,
  moves = [],
  Weaknesses = [],
}) {
    const {borderColor,emoji}=getTypeDetails(type);
  return (
    <View style={styles.card}>
      <View style={styles.nameContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️: {hp}</Text>
      </View>
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} Pokemon`}
      />
      <View style={styles.typeContainer}>
      <View style={[styles.badgeI,{borderColor}]}>
        <Text style={styles.emoji}> {emoji}</Text>

        <Text style={styles.type}> {type}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.moves}>
          Moves: {moves.length ? moves.join(", ") : 'No moves'}
        </Text>
      </View>
      <View>
        <Text style={styles.weaknesses}>
          weaknesses: {Weaknesses.length ? Weaknesses.join(", ") : 'None'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    alignItems:'center',
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
      },
    }),
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 16,
    color: 'gray',
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  type: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  moves: {
    fontSize: 24,
    marginTop: 10,
  },
  weaknesses: {
    fontSize: 24,
    marginTop: 5,
    color: 'red',
  },
  nameContent:{
    flexDirection:"column",
    justifyContent:"space-between",
    marginBottom:32,
  },
  typeContainer:{
    alignItems:'center',
    marginBottom:40,
  },
  badgeI:{
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:12,
    paddingVertical:6,
    borderRadius:20,
    borderWidth:4
  },
  emoji:{
    marginRight:12,
  }
});
