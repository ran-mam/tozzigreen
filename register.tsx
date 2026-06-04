import { useState } from 'react';
import { router } from 'expo-router'; 
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Register() {
    const [identifier, setIdentifier] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        console.log('Identifiant:', identifier);
        console.log('Téléphone:', phone);
        console.log('Nom:', name);
        console.log('Mot de passe:', password);
        console.log('Confirmation:', confirmPassword);
        alert('Inscription en cours...');
    };

    return (
        <View style={styles.container}>

            {/* Header noir avec Register à gauche */}
            <SafeAreaView edges={['top']} style={styles.headerSafeArea}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Register</Text>
                </View>
            </SafeAreaView>

            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >

                    {/* Logo */}
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('@/assets/images/logo-tozzigreen.png')}
                            style={styles.logoImage}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Champ Identifiant */}
                    <Text style={styles.label}>Votre identifiant</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#999"
                            value={identifier}
                            onChangeText={setIdentifier}
                            keyboardType="default"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Champ Numéro de téléphone */}
                    <Text style={styles.label}>Votre numéro de téléphone</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#999"
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />
                    </View>

                    {/* Champ Nom */}
                    <Text style={styles.label}>Votre nom</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#999"
                            value={name}
                            onChangeText={setName}
                            keyboardType="default"
                        />
                    </View>

                    {/* Champ Mot de passe */}
                    <Text style={styles.label}>Mot de passe</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#999"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                    {/* Champ Confirmer mot de passe */}
                    <Text style={styles.label}>Confirmez votre mot de passe</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#999"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                    </View>

                    {/* Bouton S'inscrire */}
                    <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                        <Text style={styles.registerButtonText}>S&apos;inscrire</Text>
                    </TouchableOpacity>

                    {/* Séparateur */}
                    <View style={styles.separator}>
                        <View style={styles.separatorLine} />
                        <Text style={styles.separatorText}>ou</Text>
                        <View style={styles.separatorLine} />
                    </View>

                    {/* Bouton Se connecter */}
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => router.back()}
                    >
                        <Text style={styles.loginButtonText}>Se connecter</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // Header noir
    headerSafeArea: {
        backgroundColor: '#000',
    },
    header: {
        backgroundColor: '#000',
        paddingVertical: 6,
        paddingHorizontal: 24,
        alignItems: 'flex-start',
    },
    headerText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
    },

    // Contenu principal
    flex: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 40,
    },

    // Logo
    logoContainer: {
        alignItems: 'center',
        marginBottom: 4,
    },
    logoImage: {
        width: 250,
        height: 250,
    },

    // Labels
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginBottom: 8,
    },

    // Inputs
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 0,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#000',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },

    // Bouton S'inscrire
    registerButton: {
        backgroundColor: '#9CC22E',
        borderRadius: 0,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 24,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

    // Séparateur
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E0E0E0',
    },
    separatorText: {
        marginHorizontal: 16,
        color: '#999',
        fontSize: 14,
    },

    // Bouton Se connecter
    loginButton: {
        backgroundColor: '#fff',
        borderRadius: 0,
        paddingVertical: 16,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#9CC22E',
    },
    loginButtonText: {
        color: '#9CC22E',
        fontSize: 16,
        fontWeight: '600',
    },
});