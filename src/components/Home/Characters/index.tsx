import { Link } from "react-router-dom";
import { DataInfos } from "../../../App";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

interface FormProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  status: string;
  gender: string;
  data: DataInfos[] | undefined;
  isError: boolean;
  isFetching: boolean;
}

export const Characters = (props: FormProps) => {
  function handleNextPage() {
    if (props.page < 42) {
      props.setPage(props.page + 1);
    }
  }
  function handleBeforePage() {
    if (props.page > 1) {
      props.setPage(props.page - 1);
    }
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-1 mt-10">
        <div className="flex items-center justify-center gap-2 text-3xl font-semibold">
          <button
            className="px-1 bg-green-400 rounded-lg"
            onClick={handleBeforePage}
          >
            <MdNavigateBefore />
          </button>
          <span>{props.page}</span>
          <button
            className="px-1 bg-green-400 rounded-lg"
            onClick={handleNextPage}
          >
            <MdNavigateNext />
          </button>
        </div>
        {props.isError && (
          <span className="text-3xl font-bold">No Characters Found</span>
        )}
        {props.isFetching && <span className="text-xl font-semibold">Buscando...</span>}
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
