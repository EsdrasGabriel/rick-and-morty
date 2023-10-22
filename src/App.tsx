import { useEffect, useState } from "react";
import { Characters } from "./components/Home/Characters";
import { Form } from "./components/Home/Form";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export type DataInfos = {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
};
interface DataFetch {
  name: string;
  status: string;
  gender: string;
}

function App() {
  const [dataFetch, setDataFetch] = useState<DataFetch>({
    name: "",
    status: "",
    gender: "",
  });

  const { data, isLoading, refetch, isError } = useQuery<DataInfos[]>({
    queryKey: ["rickAndMortyApi"],
    queryFn: async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=1&name=${dataFetch.name}&status=${dataFetch.status}&gender=${dataFetch.gender}`
      );

      return response.data.results;
    },
  });

  useEffect(() => {
    refetch();
  }, [dataFetch, refetch]);

  return (
    <>
      <Form setDataFetch={setDataFetch} />
      <Characters
        name={dataFetch.name}
        status={dataFetch.status}
        gender={dataFetch.gender}
        data={data}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default App;
