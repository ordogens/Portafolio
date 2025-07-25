import "./projects.css";

const projectos = [
  {
    titulo: "Projecto 1",
    descripcion: "descripción 1",
    lenguajes: ["javascript", "HMTL"],
  },
  {
    titulo: "Projecto 2",
    descripcion: "descripción 2",
    lenguajes: ["css", "java"],
  },
  {
    titulo: "Projecto 3",
    descripcion: "descripción 3",
    lenguajes: ["css", "java"],
  },
  {
    titulo: "Projecto 4",
    descripcion: "descripción 4",
    lenguajes: ["css", "java"],
  },
];

export const Projecst = () => {
  return (
    <div className="Projecst">
      <p style={{ color: "aqua", fontSize: "12px", paddingBottom: "1rem" }}>
        C:/User/Projecst
      </p>
      <section className="cards customScrollBar">
        {projectos.map((item, idx) => (
          <article className="card" key={idx}>
            <p
              style={{
                color: "aqua",
                fontSize: "12px",
                paddingBottom: ".5rem",
              }}
            >
              {item.titulo}
            </p>
            <p
              style={{
                color: "white",
                fontSize: "12px",
                paddingBottom: ".5rem",
              }}
            >
              {item.descripcion}
            </p>
            <div>
              {item.lenguajes.map((leng, i) => (
                <span
                  key={i}
                  style={{
                    color: "aqua",
                    fontSize: "12px",
                    marginRight: "8px",
                  }}
                >
                  {leng}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
