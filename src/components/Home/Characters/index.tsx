import { Link } from "react-router-dom";
import { DataInfos } from "../../../App";

interface FormProps {
  name: string;
  status: string;
  gender: string;
  data: DataInfos[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const Characters = (props: FormProps) => {

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-1 mt-10">
        {props.isError && <span className="text-3xl font-bold">Nenhum personagem encontrado</span>}
        <div>{props.isLoading && <p>Carregando...</p>}</div>
        <div className="flex flex-wrap items-center justify-center w-screen h-full gap-10">
          {props.data?.map((data) => {
            return (
              <div
                key={data.id}
                className="border-4 border-green-500 rounded-xl"
              >
                <Link
                  to={`/characterInfos/${data.id}`}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <img
                    src={data.image}
                    alt="Imagem do Personagem"
                    className="rounded-lg "
                  />
                  <h2 className="text-2xl font-bold text-zinc-900">
                    {data.name}
                  </h2>
                  <div className="flex justify-center w-full gap-10">
                    <span className="text-lg font-medium text-zinc-700">
                      {data.status}
                    </span>
                    <span className="text-lg font-medium text-zinc-700">
                      {data.gender}
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
