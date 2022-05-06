
import CardTemplate from "components/Card";

const TotalProfitCard = () => (
  <CardTemplate
    icon={"AttachMoney"}
    title={"Total profit"}
    quantity={{ number: 23, unit: "K" }}
    // situation={{
    //   move: "down",
    //   percentage: "12%",
    //   description: "Since Last month",
    // }}
  />
);

export default TotalProfitCard;
