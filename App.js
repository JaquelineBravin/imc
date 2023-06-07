import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(0);
  const [botaoClicado, setBotaoClicado] = useState(false);

  const calcular = () => {
    const alt = parseFloat(altura / 100, 2);
    const pes = parseFloat(peso);

    const res = pes / (alt * alt);
    console.log("peso", pes);
    return setResultado(res.toFixed(2));
  };

  const handleClick = () => {
    setBotaoClicado(true);
    calcular();
  };

  return (
    <View className="flex-1 items-center bg-whithe justify-center">
      <View>{!!setBotaoClicado && <Text>Seu IMC é {resultado}</Text>}</View>
      <Text className="text-lg font-bold">Wellcome to my App!</Text>
      <Text className="text-lg font-bold">Calcule seu IMC</Text>
      <Text>- By: Jaque</Text>
      <StatusBar style="auto" />
      <Text>Altura:</Text>
      <TextInput
        className="bg-blue-200 w-3/6 m-5 p-5 rounded"
        keyboardType="number-pad"
        value={altura}
        onChangeText={(tex) => setAltura(tex)}
        placeholder="altura (cm)"
      />
      <Text>Peso:</Text>
      <TextInput
        className="bg-blue-200 w-3/6 m-5 p-5 rounded"
        keyboardType="number-pad"
        value={peso}
        onChangeText={(tex) => setPeso(tex)}
        placeholder="peso"
      />
      <TouchableOpacity
        className="bg-blue-400 p-10 border-fuchsia-50 text-zinc-950 rounded"
        onPress={handleClick}
      >
        <Text>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}
