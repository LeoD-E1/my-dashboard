import CardTemplate from "components/Card";

const TasksProgress = () => (
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

export default TasksProgress;
