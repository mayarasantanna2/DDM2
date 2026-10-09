
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  const [pessoas, setPessoas] = useState([
    'Lorena',
    'Guilherme Gimenes',
  ]);

  function adicionarPessoa() {
    if (nome.trim() === '') {
      Alert.alert('Ops!', 'Digite um nome primeiro!');
      return;
    }

    setPessoas([...pessoas, nome.trim()]);
    setNome('');
  }

  function removerPessoa(index) {
    setPessoas(pessoas.filter((_, i) => i !== index));
  }

  function exterminar() {
    Alert.alert(
      '☠️ EXTERMINAR',
      'Tem certeza que deseja limpar a lista inteira?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'EXTERMINAR!',
          style: 'destructive',
          onPress: () => setPessoas([]),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.emoji}>💀 🩸 💀</Text>

      <Text style={styles.titulo}>
        LISTA NEGRA
      </Text>

      <Text style={styles.subtitulo}>
        Arquivo oficial de desafetos
      </Text>

      <View style={styles.card}>

        <View style={styles.cabecalho}>
          <Text style={styles.cardTitulo}>
            ☠️ Pessoas registradas
          </Text>

          <View style={styles.badge}>
            <Text style={styles.contador}>
              {pessoas.length}
            </Text>
          </View>
        </View>

        <ScrollView
          style={styles.lista}
          showsVerticalScrollIndicator={false}
        >
          {pessoas.length === 0 ? (
            <View style={styles.vazio}>
              <Text style={styles.vazioEmoji}>🕊️</Text>

              <Text style={styles.vazioTitulo}>
                Lista limpa!
              </Text>

              <Text style={styles.vazioTexto}>
                Não há ninguém por aqui... por enquanto.
              </Text>
            </View>
          ) : (
            pessoas.map((pessoa, index) => (
              <View style={styles.item} key={index}>

                <Text style={styles.numero}>
                  {String(index + 1).padStart(2, '0')}
                </Text>

                <Text style={styles.nome}>
                  {pessoa}
                </Text>

                <TouchableOpacity
                  style={styles.botaoRemover}
                  onPress={() => removerPessoa(index)}
                >
                  <Text style={styles.x}>
                    ✕
                  </Text>
                </TouchableOpacity>

              </View>
            ))
          )}
        </ScrollView>

      </View>

      <Text style={styles.label}>
        Adicionar novo nome
      </Text>

      <View style={styles.linhaInput}>
        <TextInput
          style={styles.input}
          placeholder="Quem entrou na lista?"
          placeholderTextColor="#bd9292"
          value={nome}
          onChangeText={setNome}
          onSubmitEditing={adicionarPessoa}
          returnKeyType="done"
        />

        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarPessoa}
        >
          <Text style={styles.mais}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.botaoExterminar}
        onPress={exterminar}
        activeOpacity={0.7}
      >
        <Text style={styles.iconeExterminar}>
          ☠
        </Text>

        <Text style={styles.textoExterminar}>
          EXTERMINAR
        </Text>

        <Text style={styles.iconeExterminar}>
          ☠
        </Text>
      </TouchableOpacity>

      <Text style={styles.rodape}>
        ✦ Apenas drama e rancor fictício ✦
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#250000',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 15,
  },

  emoji: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 8,
  },

  titulo: {
    color: '#ffcccc',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 3,
  },

  subtitulo: {
    color: '#c98c8c',
    textAlign: 'center',
    fontSize: 13,
    marginTop: 8,
    marginBottom: 25,
  },

  card: {
    flex: 1,
    backgroundColor: '#470909',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#812020',
    padding: 16,
    marginBottom: 20,
  },

  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  cardTitulo: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  badge: {
    backgroundColor: '#a91e1e',
    minWidth: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },

  contador: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  lista: {
    flex: 1,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#631313',
    padding: 13,
    borderRadius: 12,
    marginBottom: 10,
  },

  numero: {
    color: '#ffaaaa',
    fontSize: 13,
    fontWeight: 'bold',
    marginRight: 12,
  },

  nome: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    flex: 1,
  },

  botaoRemover: {
    backgroundColor: '#8f2020',
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  x: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  vazio: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 45,
  },

  vazioEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },

  vazioTitulo: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: 'bold',
  },

  vazioTexto: {
    color: '#d3aaaa',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
  },

  label: {
    color: '#ffcccc',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 9,
  },

  linhaInput: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#470909',
    borderWidth: 1,
    borderColor: '#812020',
    borderRadius: 12,
    paddingHorizontal: 14,
    color: '#ffffff',
  },

  botaoAdicionar: {
    width: 48,
    height: 48,
    backgroundColor: '#a91e1e',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mais: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '300',
  },

  botaoExterminar: {
    backgroundColor: '#160000',
    borderWidth: 2,
    borderColor: '#ff2020',
    borderRadius: 14,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#ff0000',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },

  textoExterminar: {
    color: '#ff3030',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 3,
  },

  iconeExterminar: {
    color: '#ff3030',
    fontSize: 20,
  },

  rodape: {
    color: '#a66a6a',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 15,
  },
});
