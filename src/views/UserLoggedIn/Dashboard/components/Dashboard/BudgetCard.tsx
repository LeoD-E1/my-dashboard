
import CardTemplate from "components/Card";

const BudgetCard = () => (
  <CardTemplate
    icon={"Money"}
    title={"budget"}
    quantity={{ number: 24, unit: "K" }}
    situation={{
      move: "down",
      percentage: "12%",
      description: "Since Last month",
    }}
  />
);

export default BudgetCard;
