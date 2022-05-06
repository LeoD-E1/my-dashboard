import CardTemplate from "components/Card";

const TasksProgressCard = () => (
  <CardTemplate
    icon={"InsertChart"}
    title={"Tasks Progress"}
    quantity={{ number: 75.5, unit: "%" }}
    situation={{
      move: "",
      percentage: "",
      description: "",
    }}
  />
);

export default TasksProgressCard;
