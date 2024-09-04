import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {useEffect} from 'react'
import HomeStackNavigator from './HomeStackNavigator'
import BottomTapNavigator from './BottomTapNavigator'
import AuthStackNavigator from './AuthStackNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../features/User/UserSlice' 
import { useDB } from '../hooks/useDB' 


const Navigator =() => {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth.value)
  const {getSession} = useDB() 


  useEffect(() => {
    (async () => {
      try {
        const response = await getSession(); 
        
        if (response) {
          const user = response;
          
          dispatch(
            setUser({
              email: user.email,
              localId: user.localId,
              idToken: user.token,
            })
          );
        }
        //console.log(response)
      } catch (error) {
        console.log(error);
      }
    })();
  });
  
  return (
    <NavigationContainer>
      {user ? <BottomTapNavigator /> : <AuthStackNavigator />}

    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})
