import { TasksListBox } from "../styles/styles";
import { useGetMyTasks } from "../hooks/useGetMyTasks";
import { OneTaskComponent } from "./OneTaskComponent";
import { CreateTaskComponent } from "./CreateTask";
import { useEffect, useState } from "react";
import { Task } from "../../../gql/graphql";
import DescriptionLine from "./DescriptionLine";

const MytasksPage = () => {
  const { dataSource } = useGetMyTasks();

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(dataSource);
  }, [dataSource]);

  return (
    <>
      <CreateTaskComponent />
      {tasks.length > 0 ? (
        <>
          <TasksListBox>
            <DescriptionLine />
            {tasks.map((task: Task) => (
              <OneTaskComponent task={task} key={task.id} />
            ))}
          </TasksListBox>
        </>
      ) : (
        <>create new task</>
      )}
    </>
  );
};

export default MytasksPage;
