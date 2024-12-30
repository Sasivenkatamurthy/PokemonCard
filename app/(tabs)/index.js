// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


import { SafeAreaView,StatusBar,StyleSheet,Platform, ScrollView} from 'react-native'
import React from 'react'
import PokemonCard from '../../components/PokomonCards/PokemonCard'
import greenScreen from './greenScreen';
export default function HomeScreen() {
     const data={
            name:"Charmander",
            image:require("../../assets/images/p2.png"),
            type:"Fire",
            hp:39,
            moves:["Scratch","Ember","Growl","Leer"],
            Weaknesses:["Water","Rock"]
        };
        const squirtleData = {
    name: "Squirtle",
    image:require( "../../assets/images/p3.png"),
    type: "Water",
    hp: 44,
    moves: [
        { name: "Tackle", power: 40, type: "Normal" },
        { name: "Water Gun", power: 40, type: "Water" }
    ],
    Weaknesses: ["Electric", "Grass"]
};

const bulbasaurData = {
    name: "Bulbasaur",
    image:require ("../../assets/images/p4.jpg"),
    type: "Grass/Poison",
    hp: 45,
    moves: [
        { name: "Tackle", power: 40, type: "Normal" },
        { name: "Vine Whip", power: 45, type: "Grass" }
    ],
    Weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
};

const pikachuData = {
    name: "Pikachu",
    image:require( "../../assets/images/p1.png"), 
    type: "Electric",
    hp: 35,
    moves: [
        { name: "Thunder Shock", power: 40, type: "Electric" },
        { name: "Quick Attack", power: 40, type: "Normal" }
    ],
    Weaknesses: ["Ground"]
};

  return (

    <SafeAreaView style={Styles.Container}>
    <StatusBar style={{backgroundColor:'blue'}}/>
    <ScrollView>
    <PokemonCard {...data}/>
    <PokemonCard {...squirtleData}/>
    <PokemonCard {...bulbasaurData}/>
    <PokemonCard {...pikachuData}/>
    <greenScreen />
    </ScrollView>
    </SafeAreaView>
  )
}

const Styles=StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    marginTop:Platform.OS==='android'?45:0,
  },
})