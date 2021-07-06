import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Web3 from "web3";

const App = () => {
  const [data, setData] = useState({
    manager: "",
    players: [],
    balance: "",
  });
  const [entryValue, setEntryValue] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // SANITY CHECK
  useEffect(() => {
    console.log(data);
  }, [data]);

  //only run on first render
  const fetchData = async () => {
    console.log("fetching data");
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/025cc9bab8f8425fb1799bf13f16054f"
      )
    );

    web3.eth.getBlock("latest").then(console.log);
    // const [manager, players, balance] = await Promise.all([
    //   chainlinkLottery.methods.manager().call(),
    //   chainlinkLottery.methods.getPlayers().call(),
    //   await web3.eth.getBalance(chainlinkLottery.options.address),
    // ]);
    // console.log(manager, players, balance);
    // setData({
    //   manager,
    //   players,
    //   balance,
    // });
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>This is new and seems to work hurrah \\\</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
