
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';

export default function Cadastro() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');

    async function cadastrar() {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((value) => {
                navigation.navigate('Home', { user: value.user.email })
                firebase.database().ref('Cadastros').child(value.user.uid).set({
                    nome: nome,
                    telefone: telefone,
                    idade: idade,
                    sexo: sexo,
                })
            })
            .catch((error) => {
                alert('Ops algo deu errado!');
                console.log(error);
                return;
            })

        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CADASTRAR</Text>

            <Text style={styles.texto}>Nome</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setNome(texto)}
                value={nome}
            />

            <Text style={styles.texto}>Email</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setEmail(texto)}
                value={email}
            />

            <Text style={styles.texto}>Senha</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setPassword(texto)}
                secureTextEntry={true}
                value={password}
            />

            <Text style={styles.texto}>Telefone</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setTelefone(texto)}
                value={telefone}
            />

            <Text style={styles.texto}>Idade</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setIdade(texto)}
                value={idade}
            />

            <Text style={styles.texto}>Sexo</Text>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(texto) => setSexo(texto)}
                value={sexo}
            />

            <Button
                title="Cadastrar"
                onPress={cadastrar}
            />

            <TouchableOpacity style={{ marginTop: 25 }} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.conta}>Já tenho uma conta</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0'
    },
    title: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginBottom: 20
    },
    texto: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333'
    },
    input: {
        marginBottom: 10,
        padding: 12,
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 8,
        width: '100%',
        fontSize: 16,
        backgroundColor: 'white',
        color: '#000'
    },
    conta: {
        color: '#1E90FF',
    },
});