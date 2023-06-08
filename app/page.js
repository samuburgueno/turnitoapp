import dayjs from "dayjs";
import db from "../utils/registros.json";
import "dayjs/locale/es";

dayjs.locale("es");

export default async function Home() {
  return (
    <main className="text-white flex-1 container m-auto pt-8 h-100">
      <header className="text-center">
        <h1 className="font-bold text-2xl">Turnito APP</h1>
        <h2 className="font-semibold text-xl">Selecciona el registro</h2>
      </header>

      <div className="md:w-8/12 m-auto mt-8">
        <div className="m-2 mb-4 wrapper-day bg-slate-100 bg-opacity-90 rounded-2xl p-4 shadow-lg">
          <ul className="md:flex gap-2 flex-wrap mt-2">
            {db.map((registro) => (
              <li className="bg-white rounded-2xl text-slate-600 p-1 px-3 my-2 md:my-0">
                <a href={`office/${registro.officeCode}`}>
                  {registro.officeName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
