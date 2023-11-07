import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firebase from '../../services/firebaseConnection';

export default function Cadastro() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    async function cadastrar() {
        try {
            await firebase.database().ref('clientes').push({
                nome: nome,
                email: email,
                telefone: telefone,
            });
            setNome('');
            setEmail('');
            setTelefone('');
            alert('CADASTRO DE CLIENTE EFETUADO COM SUCESSO!');

        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seja bem-vindo aos clientes</Text>

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

            <Text style={styles.texto}>Telefone</Text>
            <TextInput
                style={styles.input}
                onChangeText={(texto) => setTelefone(texto)}
                value={telefone}
            />

            <Button title="Cadastrar" onPress={cadastrar} />
            <br></br>
            <Button
                title="VOLTAR"
                style={styles.voltar}
                onPress={() => navigation.navigate('Home')}
            >VOLTAR PARA A HOME</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginBottom: 20,
    },
    texto: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
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
        color: '#000',
    },
    voltar: {
        backgroundColor: 'red',

    }
});
