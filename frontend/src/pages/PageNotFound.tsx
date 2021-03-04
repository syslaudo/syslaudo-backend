import notFound from '../assets/undraw_not_found_60pq.svg';

export default function PageNotFound() {
  return (
    <div className="PageNotFound">

      <div className="conteinerCentralizado">
        <img src={notFound} alt="Erro 404 - Página Não Encontrada" />
      </div>
      <br />
      <br />
      <br />
      <p className="centeredText boldText bigText">
        Erro 404 - Página não encontrada
      </p>
    </div>
  );
}
