import { useSignInMutation } from "../services/authService";
import { Pressable, StyleSheet, Text, View ,Platform} from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../global/colors";
import { useDB } from "../hooks/useDB"; 
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { setUser } from "../features/User/UserSlice";
import { useDispatch } from "react-redux";




const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch()

  const [triggerSignIn, result] = useSignInMutation()
  
  const { insertSession } = useDB();  

 useEffect(() => {
   if (result?.data && result.isSuccess) {
     (async () => {
       try {
         if (Platform.OS !== "web") {
           const response = await insertSession({
             email: result.data.email,
             localId: result.data.localId,
             token: result.data.idToken,
           });
         }
         dispatch(
           setUser({
             email: result.data.email,
             idToken: result.data.idToken,
             localId: result.data.localId,
           })
         );
       } catch (error) {
         console.log(error);
       }
     })();
   }
 }, [result]);

  const onSubmit = ()=> {
    triggerSignIn({email, password, returnSecureToken: true})
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Inicia sesión</Text>
        <InputForm label={"Correo"} onChange={setEmail} error={""} />
        <InputForm
          label={"Contraseña"}
          onChange={setPassword}
          error={""}
          isSecure={true}
        />
        <SubmitButton onPress={onSubmit} title="Enviar" />
        <Text style={styles.sub}>No tienes una cuenta?</Text>

        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Registrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main:{
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray100,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Josefin",
  },
  sub: {
    fontSize: 14,
    color: "black",
  },
  subLink: {
    fontSize: 14,
    color: "blue",
  },
});
