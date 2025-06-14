"use client";
import { useState } from "react";
import { getSimpson } from "../actions/getSimpson";
import Image from "next/image";

import { showLoading, hideLoading } from "loading-request";

export default function ApiSimpson() {
  const [data, setData] = useState(null);

  const handleGetSimpson = async () => {
    showLoading({ message: "Cargando API...", textLoadingSize: "25px" });
    try {
      const data = await getSimpson();
      setData(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      hideLoading();
    }
  };

  return (
    <>
      <button className="my-4" onClick={handleGetSimpson}>
        Obtener personajes
      </button>

      {data && (
        <div className="cards">
          {data.map((personaje, index) => (
            <div key={index} className="card">
              <div>{personaje.character}</div>
              <Image width={200} height={200} src={personaje.image} alt={personaje.character} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
