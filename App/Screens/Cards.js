import { styled } from "styled-components/native";
import Text from "../Components/Text";
import Screen from "../Components/Screen";

const Cards = () => {
  const wallets = [
    {
      id: "1",
      color: "#5750f0",
      number: "1234",
      exp: "10/2020",
      logo: require("../../assets/images/card1.png"),
    },
    {
      id: "2",
      color: "#5750f0",
      number: "9876",
      exp: "10/2020",
      logo: require("../../assets/images/card2.png"),
    },
    {
      id: "3",
      color: "#c84ff1",
      number: "7890",
      exp: "10/2020",
      logo: require("../../assets/images/card3.png"),
    },
    {
      id: "4",
      color: "#5750f0",
      number: "5431",
      exp: "10/2020",
      logo: require("../../assets/images/card4.png"),
    },
    {
      id: "5",
      color: "#5298f7",
      number: "7689",
      exp: "10/2020",
      logo: require("../../assets/images/card2.png"),
    },
    {
      id: "6",
      color: "#974ff2",
      number: "1989",
      exp: "10/2020",
      logo: require("../../assets/images/card1.png"),
    },
  ];

  const renderCard = ({ item }) => (
    <CardContainer>
      <CardInfo>
        <CardLogoContainer color={item.color}>
          <CardLogo source={item.logo} resizeMode="contain" />
        </CardLogoContainer>
        <CardDetails>
          <Text heavy>
            &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;
            &bull;&bull;&bull;&bull;{" "}
            <Text medium heavy>
              {item.number}
            </Text>
          </Text>
          <Text small heavy color="#727479">
            {item.exp}
          </Text>
        </CardDetails>
      </CardInfo>
      <CardActions>
        <Remove>
          <Text heavy color="#727479">
            Remove
          </Text>
        </Remove>
        <Update>
          <Text heavy>Update</Text>
        </Update>
      </CardActions>
    </CardContainer>
  );

  return (
    <Screen>
      <Container>
        <Text center large heavy>
          My Wallet
        </Text>
        <CardList data={wallets} renderItem={renderCard} />
      </Container>
    </Screen>
  );
};

export default Cards;

const Container = styled.View`
  flex: 1;
  background-color: #1e1e1e;
  padding-top: 20px;
`;

const CardList = styled.FlatList`
  padding: 0 8px;
  margin-top: 32px;
`;

const CardContainer = styled.View`
  background-color: #292929;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
`;

const CardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #393939;
  padding-bottom: 12px;
  margin-bottom: 12px;
`;
const CardLogoContainer = styled.View`
  width: 64px;
  height: 64px;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  border-radius: 32px;
`;

const CardLogo = styled.Image`
  width: 45px;
  height: 45px;
`;

const CardDetails = styled.View`
  flex: 1;
  align-items: flex-end;
  gap: 5px;
`;

const Remove = styled.View`
  margin-right: 32px;
`;

const CardActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Update = styled.TouchableOpacity`
  background-color: #3d3d3d;
  padding: 8px 16px;
  border-radius: 6px;
`;
