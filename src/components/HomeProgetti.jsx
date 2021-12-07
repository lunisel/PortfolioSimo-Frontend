
const HomeProgetti = ({props}) => {
  return (
    <div className="progetti-home-big-container">
      <div className="progetto-singolo-cont">
        <img
          src="https://3dvisdesign.com/wp-content/uploads/2020/11/Living-room-rendering-3-600x600.jpg"
          alt=""
          id="progetto-singolo-interno"
        />
        <span className="progetto-singolo-descript">
          Fai un tour 3D all'interno del tuo progetto
        </span>
        <h6 className="progetto-home-titolo">Rendering di Interni</h6>
        <input type="button" value="ALTRO" className="progetto-singolo-btn" onClick={()=> props.history.push("/progetti")} />
        <div className="nero-cont-singolo-progetto"></div>
      </div>

      <div className="progetto-singolo-cont esterno">
        <img
          src="https://www.ronenbekerman.com/wp-content/uploads/2019/06/3d-rendering-for-country-house-project-View-900x1080.jpg"
          alt=""
          id="progetto-singolo-esterno"
        />
        <span className="progetto-singolo-descript">
          Rendi il tuo design la star della presentazione
        </span>
        <h6 className="progetto-home-titolo">Rendering di Esterni</h6>
        <input type="button" value="ALTRO" className="progetto-singolo-btn" onClick={()=> props.history.push("/progetti")} />
        <div className="nero-cont-singolo-progetto"></div>
      </div>

      <div className="progetto-singolo-cont video">
      <img
          src="https://i.pinimg.com/originals/96/ea/1e/96ea1e90555e4d2c48d6dcfc6050baba.jpg"
          alt=""
          id="progetto-singolo-esterno"
        />
        <span className="progetto-singolo-descript">
          Permetti al pubblico di immergersi nel tuo progetto
        </span>
        <h6 className="progetto-home-titolo">Animazione Architettonica</h6>
        <input type="button" value="ALTRO" className="progetto-singolo-btn" onClick={()=> props.history.push("/progetti")}/>
        <div className="nero-cont-singolo-progetto"></div>
      </div>
    </div>
  );
};

export default HomeProgetti;
