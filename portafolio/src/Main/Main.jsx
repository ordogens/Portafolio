import "./Main.css";
import { Mails, Phone, MapPinned, Github, Linkedin } from "lucide-react";

export const Main = () => {
  return (
    <div className="Main">
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
      <article className="presentacion2">
        <p className="h3">C:/User/Contacts</p>
        <br />
        <section className="contactos">
          <div className="email">
            <Mails
              style={{ color: "aqua", width: "15px", marginInline: "0.3rem" }}
            />
            <p style={{ color: "aqua" }}>oarcilagarcia@gmail.com</p>
          </div>
          <div className="phone">
            <Phone
              style={{ color: "aqua", width: "15px", marginInline: "0.3rem" }}
            />
            <p style={{ color: "aqua" }}>323 525 1372</p>
          </div>
          <div className="ubicacion">
            <MapPinned
              style={{ color: "aqua", width: "15px", marginInline: "0.3rem" }}
            />
            <p style={{ color: "aqua" }}>Armenia Quindio, Colombia</p>
          </div>
        </section>
        <section className="botones">
          <a className="button" href="">
            <Github style={{ color: "aqua", width: "15px" }} />
            <p style={{ color: "aqua", fontSize: "12px" }}>GitHud</p>
          </a>
          <a className="button" href="">
            <Linkedin style={{ color: "aqua", width: "15px" }} />
            <p style={{ color: "aqua", fontSize: "12px" }}>Linkedin</p>
          </a>
        </section>
        <br />
      </article>
      <br />
      <article className="presentacion3">
          <p style={{ color: "aqua", fontSize: "12px" }}>C:User/Experience</p>
          <br />
        <section className="experience">
          <p style={{ color: "white", fontSize: "12px" }}>
            {" "}
            Software Developer
          </p>
          <p style={{ color: "aqua", fontSize: "12px" }}>
            En preoceso de aprendizaje
          </p>
          <p style={{ color: "gray", fontSize: "12px" }}>
            Planning, Structuring, Design and software development
          </p>
        </section>
      </article>
    </div>
  );
};
