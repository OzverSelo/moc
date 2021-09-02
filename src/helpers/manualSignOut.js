//import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native"
export function manualSignOut(){
  const navigation=useNavigation()
   // try {
   //  auth()
   //  .signOut()
   // } catch (error) {
     
 navigation.navigate({
        index: 0,
        routes: [{ name: 'WelcomeScreen' }],
      })
   
   
}