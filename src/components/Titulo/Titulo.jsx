import "./Titulo.css";
const Titulo = (props) => {
  let { saludo } = props;
  return (
    <div>
      <h1 className="titulo">CompumundoHyperMegaRed</h1>
      <p className="bodypar">{saludo}</p>
    </div>
  );
};
export default Titulo;
