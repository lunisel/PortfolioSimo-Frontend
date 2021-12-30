import { useEffect, useState } from "react";
import { fetchAll } from "./progettiLogic.js";
import {
  MdOutlineKeyboardArrowDown,
  MdClose,
  MdArrowForwardIos,
  MdArrowBackIos,
} from "react-icons/md";
import "./progetti.css";

const Progetti = (props) => {
  const [seenFiles, setSeenFiles] = useState([]);
  const [allFiles, setAllFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchNine = async () => {
      let allFiles = await fetchAll();
      setAllFiles(allFiles);
      let nineFilesArray = [];
      for (let i = 0; i < 9; i++) {
        nineFilesArray.push(allFiles[i]);
      }
      setSeenFiles(nineFilesArray);
      if (seenFiles) setLoading(false);
    };
    fetchNine();
  }, []);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      let fileArray = [...seenFiles];
      for (let i = 0; i < 9; i++) {
        if (allFiles[i + seenFiles.length] !== undefined) {
          fileArray.push(allFiles[i + seenFiles.length]);
        }
      }

      setSeenFiles(fileArray);

      setLoading(false);
    }, 1000);
  };

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
              {}
            </>
          )}
        </div>
      ) : (
        <>
          <h1 className="portfolio-titolo">Risi Graph Render</h1>
          <div className="container progetti">
            {seenFiles &&
              seenFiles.map((f, i) => (
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
              ))}
          </div>
          {loading ? (
            <div class="loader">Loading...</div>
          ) : allFiles.length !== seenFiles.length ? (
            <div className="see-more" onClick={() => loadMore()}>
              <MdOutlineKeyboardArrowDown /> See more
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Progetti;
