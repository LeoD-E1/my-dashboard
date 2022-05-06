
import CardTemplate from "components/Card";

const TotalCustomersCard = () => (
  <CardTemplate
    icon={"PeopleOutlined"}
    title={"Total Customers"}
    quantity={{ number: 1.6, unit: "K" }}
    situation={{
      move: "up",
      percentage: "16%",
      description: "Since Last month",
    }}
  />
);

export default TotalCustomersCard;
