import React from "react";

import { styled } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";
import Text from "../Components/Text";
import TransactionHistory from "../Constants/Transactions";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Screen from "../Components/Screen";
import AppTextInput from "../Components/AppTextInput";
const HomeScreen = () => {
  const { width } = Dimensions.get("window");

  const renderTransaction = ({ item }) => (
    <Transaction>
      <TransactionInfo>
        <Text heavy>{item.product}</Text>
        <Text>{item.store}</Text>
      </TransactionInfo>
      <Text heavy>${item.price.toLocaleString()}</Text>
    </Transaction>
  );

  const totalPrice = TransactionHistory.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <Screen>
      <Contaier>
        <Header>
          <ProfilePhoto
            source={require("../../assets/images/driver-icon.png")}
          />
          <Welcome>
            <Text heavy medium>
              Welcome,
            </Text>
            <Text>Eddy,</Text>
          </Welcome>
          <FontAwesome5 name="cog" size={24} color="#565656" />
        </Header>
        <Text center title black>
          ${totalPrice.toLocaleString()}
        </Text>
        <Text center heavy color="#727479">
          current Balance
        </Text>

        <Chart>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#1e1e1e",
              backgroundGradientFrom: "#1e1e1e",
              backgroundGradientTo: "#1e1e1e",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            withVerticalLines={false}
            withHorizontalLines={false}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </Chart>

        <Transactions
          ListHeaderComponent={
            <>
              <TransactionHeader>
                <Text>Recent Transactions</Text>
                <MaterialIcons name="sort" size={24} color="#5196f4" />
              </TransactionHeader>
              <SearchContainer>
                <AntDesign name="search1" size={18} color={"#fff"} />
                <Search
                  placeholder="Search Transactions"
                  placeholderTextColor={"#fff"}
                />
              </SearchContainer>
            </>
          }
          data={TransactionHistory}
          renderItem={renderTransaction}
          showsVerticalScrollIndicator={false}
        />
      </Contaier>
    </Screen>
  );
};

export default HomeScreen;

const Contaier = styled.SafeAreaView`
  flex: 1;
  background-color: #1e1e1e;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 16px 32px 32px;
`;

const ProfilePhoto = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Welcome = styled.View`
  flex: 1;
  padding: 0 16px;
`;

const Transactions = styled.FlatList`
  background-color: #2c2c2c;
  padding: 16px;
  border-radius: 22px 22px 0 0;
  margin-top: 20px;
`;

const Search = styled.TextInput`
  flex: 1;
  padding: 8px 16px;
  color: #dbdbdb;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #3d3d3d;
  padding: 0 8px;
  border-radius: 6px;
  margin: 16px 0;
`;

const TransactionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Transaction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #3 d3d3d;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;

const Chart = styled.View``;

const TransactionInfo = styled.View``;
