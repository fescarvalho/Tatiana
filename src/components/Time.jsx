import React, { useState, useEffect } from "react";
import "./Time.css";
function ContadorTempoPassado({ dataPassada }) {
  const [tempoPassado, setTempoPassado] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  function calcularTempoPassado(data) {
    const agora = new Date();
    const passada = new Date(data);

    if (passada > agora) {
      return "A data informada ainda não chegou.";
    }

    let diferenca = agora - passada;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    diferenca -= anos * 1000 * 60 * 60 * 24 * 365;

    const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30));
    diferenca -= meses * 1000 * 60 * 60 * 24 * 30;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    diferenca -= dias * 1000 * 60 * 60 * 24;

    const horas = Math.floor(diferenca / (1000 * 60 * 60));
    diferenca -= horas * 1000 * 60 * 60;

    const minutos = Math.floor(diferenca / (1000 * 60));
    diferenca -= minutos * 1000 * 60;

    const segundos = Math.floor(diferenca / 1000);

    return {
      anos,
      meses,
      dias,
      horas,
      minutos,
      segundos,
    };
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoPassado(calcularTempoPassado(dataPassada));
    }, 1000);

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, [dataPassada]);

  if (typeof tempoPassado === "string") {
    return <div>{tempoPassado}</div>; // Exibe mensagem se a data ainda não chegou
  }

  return (
    <div>
      <div className="time">
        {tempoPassado.anos} anos, {tempoPassado.meses} meses, {tempoPassado.dias} dias,{" "}
        {tempoPassado.horas} horas, {tempoPassado.minutos} minutos,{" "}
        {tempoPassado.segundos} segundos.
      </div>
    </div>
  );
}

export default ContadorTempoPassado;
