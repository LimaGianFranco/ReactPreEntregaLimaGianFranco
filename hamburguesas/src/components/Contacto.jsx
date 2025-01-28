const Contacto = () => {
    return (
      <div className="container">
        <h1>Contacto</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>Encuéntranos</h3>
            <p>Dirección: Calle 123, Ciudad, País</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Ubicación del local"
            ></iframe>
          </div>
          <div className="col-md-6">
            <h3>Escríbenos</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  export default Contacto;
  