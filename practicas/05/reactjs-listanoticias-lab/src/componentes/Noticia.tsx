const Noticia = ({ noticia }) => {
  return (
    <div>
      <h2>{noticia.titulo}</h2>
      <p>{noticia.contenido}</p>
    </div>
  );
};

export default Noticia;
