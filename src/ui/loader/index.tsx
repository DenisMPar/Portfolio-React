import "./index.css";

//componente que muestra un spinner de carga
function LoaderComp() {
  return (
    <div className="wrapper">
      <div className="lds-dual-ring"></div>
    </div>
  );
}

export { LoaderComp };
