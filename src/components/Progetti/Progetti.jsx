import { useEffect, useState } from "react";
import { fetchAll } from "./progettiLogic.js";
import { MdClose, MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "./progetti.css";

const Progetti = (props) => {
  const [allFiles, setAllFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchAllFiles = async () => {
      let allFiles = await fetchAll();
      setAllFiles(allFiles);

      if (allFiles) setLoading(false);
    };
    fetchAllFiles();
  }, []);

  return (
    <div className="progetti-big-container">
      {modal ? (
        <div className={selectedImg !== null ? "modal open" : "modal"}>
          {selectedImg !== null && (
            <>
              <img src={allFiles[selectedImg].url} alt="render" />
              <MdClose onClick={() => setModal(false)} id="close" />
              <MdArrowForwardIos
                onClick={() => {
                  console.log(selectedImg);
                  if (selectedImg < allFiles.length - 1) {
                    setSelectedImg(selectedImg + 1);
                  } else {
                    setSelectedImg(0);
                  }
                }}
                id="next"
              />
              <MdArrowBackIos
                onClick={() => {
                  console.log(selectedImg);
                  if (selectedImg === 0) {
                    setSelectedImg(allFiles.length - 1);
                  } else {
                    setSelectedImg(selectedImg - 1);
                  }
                }}
                id="prev"
              />
            </>
          )}
        </div>
      ) : (
        <>
          <h1 className="portfolio-titolo">Risi Graph Render</h1>
          <div className="container progetti">
            {loading ? (
              <div class="loader">Loading...</div>
            ) : (
              allFiles.map((f, i) => (
                <div
                  className="img-container-progetto"
                  onClick={() => {
                    setSelectedImg(i);
                    setModal(true);
                  }}
                  key={i}
                >
                  <img src={f.url} alt="render" />
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Progetti;
