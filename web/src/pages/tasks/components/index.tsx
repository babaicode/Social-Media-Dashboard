import { TasksListBox } from "../styles";
import { useGetMyTasks } from "../hooks/useGetMyTasks";
import { OneTaskComponent } from "./OneTaskComponent";
import { CreateTaskComponent } from "./CreateTask";
import { useEffect, useState } from "react";
import { Task } from "../../../gql/graphql";

const MytasksPage = () => {
  const { dataSource, refetch } = useGetMyTasks();

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(dataSource);
  }, [dataSource]);

  return (
    <>
      <CreateTaskComponent />
      <TasksListBox>
        {tasks &&
          tasks.map((task: Task) => (
            <OneTaskComponent task={task} key={task.id} />
          ))}
      </TasksListBox>
    </>
  );
};

export default MytasksPage;
