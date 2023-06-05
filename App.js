import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const altura = parseFloat(altura / 100, 2);
    const peso = parseFloat(peso);

    const resultado = peso / (altura * altura)
    setResultado(`Seu IMC é ${resultado.toFixed(2)}`)

    return (
      <View className="flex-1 items-center bg-red-500 justify-center">
        <Text className="text-lg font-bold">Wellcome to my App!</Text>
        <Text className="text-lg font-bold">Calcule seu IMC</Text>
        <Text>- By: Jaque</Text>
        <StatusBar style="auto" />
        <Text>Altura:</Text>
        <TextInput
          className="bg-blue-500 w-3/6 m-5 p-5"
          keyboardType="number-pad"
          value={altura}
          onChangeText={(tex) => setAltura(tex)}
          placeholder="altura (cm)"
        />
        <Text>Peso:</Text>
        <TextInput
          className="bg-blue-500 w-3/6 m-5 p-5"
          keyboardType="number-pad"
          value={peso}
          onChangeText={(tex) => setPeso(tex)}
          placeholder="peso"
        />
        +
        <TouchableOpacity
          className="bg-blue-500 p-10 border-fuchsia-50 text-zinc-950"
          onPress={calcular}
        >
          <Text>Calcular</Text>
        </TouchableOpacity>
      </View>
    );
  };
}

/*
const IMC = () => {
    const calculoIMC = () => {
      if (peso && altura) {
        const IMC = peso / Math.pow(altura / 100, 2);
        setResultado(`Seu IMC é ${bmi.toFixed(2)}`);
      } else {
        setResultado("Preencha os campos corretamente!");
      }
    };
  };

  */
