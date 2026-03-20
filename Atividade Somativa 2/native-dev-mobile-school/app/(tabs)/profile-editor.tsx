import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';

export default function ProfileEditorScreen() {
  const [name, setName] = useState('');
  const profileImageUrl = 'https://avatars.githubusercontent.com/u/1?v=4';

  const handleSave = () => {
    if (name.trim() === '') {
      Alert.alert('Erro', 'Por favor, digite um nome válido!');
      return;
    }
    Alert.alert('Perfil Salvo', `Bem-vindo, ${name}!`);
    setName(''); // Limpa o input após salvar
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        {/* Título */}
        <Text style={styles.title}>Editar Perfil</Text>

        {/* Foto de Perfil Circular */}
        <Image 
          source={{ uri: profileImageUrl }}
          style={styles.profileImage}
        />

        {/* TextInput para Nome */}
        <TextInput
          style={styles.textInput}
          placeholder="Digite seu nome"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />

        {/* Botão Salvar */}
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={handleSave}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Salvar Alterações</Text>
        </TouchableOpacity>

        {/* Display do Nome (opcional, para feedback visual) */}
        {name.trim() !== '' && (
          <View style={styles.feedbackContainer}>
            <Text style={styles.feedbackLabel}>Nome inserido:</Text>
            <Text style={styles.feedbackText}>{name}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },

  content: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular (width/2)
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 24,
    borderWidth: 3,
    borderColor: '#007AFF',
  },

  textInput: {
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    backgroundColor: '#fafafa',
  },

  saveButton: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  feedbackContainer: {
    backgroundColor: '#e8f5e9',
    borderLeftWidth: 4,
    borderLeftColor: '#4caf50',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
  },

  feedbackLabel: {
    fontSize: 12,
    color: '#666',
    textTransform: 'uppercase',
    fontWeight: '600',
    marginBottom: 4,
  },

  feedbackText: {
    fontSize: 16,
    color: '#2e7d32',
    fontWeight: '600',
  },
});
