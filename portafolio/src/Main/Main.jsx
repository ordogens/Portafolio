import "./Main.css";

export const Main = () => {
  return (
    <div className="Main">
      <article className="presentacion">
        <h3>C:/User/Portafolio</h3>
        <h1 style={{ color: "white" }}>Ordogen A. Garcia</h1>
        <h3>Full Stack Developer</h3>
        <br />
        <p style={{ color: "white" }}>
          {" "}
          +1 year of experience in web development and design with a focus on
          user experience
        </p>
        <p style={{ color: "white" }}>
          Software Analyst and Developer interested in creating effective and
          efficient solutions. I have experience in{" "}
          <span style={{ color: "yellow" }}>JavaScript</span>,
          <span style={{ color: "aqua" }}> TypeScript</span>,
          <span style={{color: "blue"}}> React.js </span>, 
          <span style={{color:"yellow"}}>Pyt</span><span style={{color:"blue"}}>hon</span>,
          and backend technologies such as <span style={{color: "green"}}>Node.js</span>
          and <span style={{color:"black", background:"white"}}>Express</span>
        </p>
      </article>
    </div>
  );
};
