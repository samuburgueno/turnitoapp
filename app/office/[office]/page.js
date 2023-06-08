import dayjs from "dayjs";
import db from "@/utils/registros.json";
import "dayjs/locale/es";

dayjs.locale("es");

export default async function Office({ params }) {
  const registro = db.find((a) => a.officeCode === params.office);

  if (!registro) {
    return (
      <main className="text-white justify-center items-center flex-1 container m-auto pt-8 h-100">
        <div className="w-8/12 m-auto mt-8">
          <p>Registro no encontrado</p>
        </div>
      </main>
    );
  }

  const request = await fetch(
    `https://www2.jus.gov.ar/dnrpa-site/api/turnos/${registro.officeCode}/false/1`
  );
  const data = await request.json();

  return (
    <main className="text-white justify-center items-center flex-1 container m-auto pt-8 h-100">
      <header className="text-center">
        <h1 className="font-bold text-2xl">Turnito APP</h1>
        <h2 className="font-semibold text-xl">
          Turnos disponibles {registro.officeName}
        </h2>
      </header>
      <div className="md:w-8/12 m-auto mt-8">
        {data?.dias.length > 0 && data.dias[0]?.Horarios.length > 0 ? (
          data.dias.map((dia, index) => (
            <div
              key={index}
              className="m-2 mb-4 wrapper-day bg-slate-100 bg-opacity-90 rounded-2xl p-4 shadow-lg"
            >
              <h3 className="text-slate-600 font-semibold">
                Turnos para el {dayjs(dia.Fecha).format("dddd DD [de] MMMM")}
              </h3>
              <ul className="flex gap-2 flex-wrap mt-2">
                {dia.Horarios.map((horario, index) => (
                  <li
                    key={index}
                    className="bg-white rounded-2xl text-slate-600 p-1 px-3"
                  >
                    {horario}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No hay turnos disponibles</p>
        )}

        {/* Button to go back */}
        <div className="flex justify-center mt-8">
          <a href="/" className="text-slate-600 bg-white p-2 px-3 rounded-3xl">
            Volver
          </a>
        </div>
      </div>
    </main>
  );
}
