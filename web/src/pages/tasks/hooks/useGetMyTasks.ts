import { useQuery } from "@apollo/client";
import { GetAllTasksDocument, GetAllTasksQuery } from "../../../gql/graphql";

export const useGetMyTasks = () => {
  const { error, data, loading } =
    useQuery<GetAllTasksQuery>(GetAllTasksDocument);

  if (error) {
    console.log(error.message);
  }
  if (loading) {
    console.log("loading...");
  }
  if (data) {
    const dataSource = data.getAllTasks.map((task) => task);
    console.log(dataSource);
    return { dataSource };
  }

  return { dataSource: [] };
};
