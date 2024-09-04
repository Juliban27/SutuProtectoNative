import { Pressable, Text, StyleSheet, View, Image } from 'react-native';

export const CustomButton = ({ onPress, title, source }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Image
                source={{ uri: source }}  
                style={styles.buttonImage}  
                resizeMode="contain"
            />
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        flex: 1,
        gap: 10,
        backgroundColor: '#43009c',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonImage: {
        width: 20,   // Tamaño de la imagen
        height: 20,
    },
});