import "./presentacion2.css"
import { Mails, Phone, MapPinned, Github, Linkedin } from "lucide-react";


export const Presentacion2 = () => {
  return (
    <div className="Presentacion2">
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
    </div>
  )
}
