import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { meta: 2000, consumido: 0, status: "Ruim", porcentagem: 0 };

    this.beber = this.beber.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }

  atualizar() {
    let s = this.state;

    s.porcentagem = Math.floor((s.consumido / s.meta) * 100);

    if (s.porcentagem >= 150) {
      s.status = "Calma lá";
    } else if (s.porcentagem >= 100) {
      s.status = "Muito bom";
    } else if (s.porcentagem >= 80) {
      s.status = "Quase lá";
    } else if (s.porcentagem >= 50) {
      s.status = "Regular";
    } else s.status = "Ruim";

    this.setState(s);
  }

  beber() {
    let s = this.state;

    s.consumido += 200;

    this.setState(s);
    this.atualizar();
  }

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground
          style={styles.imgBg}
          source={require("./images/agua.png")}
        >
          <View style={styles.infos}>
            <View style={styles.dados}>
              <Text style={styles.titulo}>Meta</Text>
              <Text style={styles.dadosItem}>{`${this.state.meta}ml`}</Text>
            </View>

            <View style={styles.dados}>
              <Text style={styles.titulo}>Consumido</Text>
              <Text
                style={styles.dadosItem}
              >{`${this.state.consumido}ml`}</Text>
            </View>

            <View style={styles.dados}>
              <Text style={styles.titulo}>Estado</Text>
              <Text style={styles.dadosItem}>{this.state.status}</Text>
            </View>
          </View>

          <View style={styles.porcentagem}>
            <Text
              style={styles.porcentagemTexto}
            >{`${this.state.porcentagem}%`}</Text>
          </View>

          <View style={styles.botaoBeber}>
            <TouchableOpacity style={styles.botao} onPress={this.beber}>
              <Text style={styles.textoBotao}>Beber</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20
  },
  imgBg: {
    flex: 1,
    width: null
  },
  infos: {
    flex: 1,
    flexDirection: "row",
    marginTop: 70
  },
  dados: {
    flex: 1,
    alignItems: "center"
  },
  titulo: {
    color: "#3498db",
    fontSize: 18
  },
  dadosItem: {
    color: "#2980b9",
    fontSize: 20,
    fontWeight: "bold"
  },
  porcentagem: {
    flex: 1,
    alignItems: "center",
    marginBottom: -150
  },
  porcentagemTexto: {
    fontSize: 80,
    color: "#130f40"
  },
  botaoBeber: {
    marginBottom: 40,
    marginHorizontal: 40
  },
  botao: {
    backgroundColor: "#0984e3",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    height: 50
  },
  textoBotao: {
    color: "#FFF"
  }
});
