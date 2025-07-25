import "./presentacion.css";

export const Presentacion = () => {
  return (
    <div className="Presentacion">
      <article className="presentacion">
        <p className="h3">C:/User/Portafolio</p>
        <p style={{ color: "white", fontSize: "25px", letterSpacing: ".2rem" }}>
          Ordogen A. Garcia
        </p>
        <p className="h3">Full Stack Developer</p>
        <br />
        <p style={{ color: "white", fontSize: "12px" }}>
          {" "}
          +1 year of experience in web development and design with a focus on
          user experience
        </p>
        <p style={{ color: "white", fontSize: "12px" }}>
          Software Analyst and Developer interested in creating effective and
          efficient solutions. I have experience in{" "}
          <span style={{ color: "yellow" }}>JavaScript</span>,
          <span style={{ color: "aqua" }}> TypeScript</span>,
          <span style={{ color: "blue" }}> React.js</span>,
          <span style={{ color: "yellow" }}> Pyt</span>
          <span style={{ color: "blue" }}>hon</span>, and backend technologies
          such as <span style={{ color: "green" }}>Node.js </span>
          and{" "}
          <span style={{ color: "black", background: "white" }}>Express</span>
        </p>
        <br />
      </article>
    </div>
  );
};
