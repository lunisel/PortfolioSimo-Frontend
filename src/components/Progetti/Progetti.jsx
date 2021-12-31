import { useEffect, useState } from "react";
import { fetchAll, fetchOne } from "./progettiLogic.js";
import {
  MdOutlineKeyboardArrowDown,
  MdClose,
  MdArrowForwardIos,
  MdArrowBackIos,
} from "react-icons/md";
import "./progetti.css";

const Progetti = (props) => {
  const [seenFiles, setSeenFiles] = useState(null);
  const [allFiles, setAllFiles] = useState(0);
  const [allFilesIds, setAllFilesIds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedImgId, setSelectedImgId] = useState(null);
  const [seenIds, setSeenIds] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchNine = async () => {
      let files = await fetchAll(null);
      if (files) {
        let totalLength = files.allFilesLength;
        let nineFiles = files.nineFiles;
        console.log(nineFiles);
        let allIds = files.allFilesIds;
        let ids = [];
        if (totalLength) setAllFiles(totalLength);
        if (nineFiles) setSeenFiles(nineFiles);
        if (allIds) setAllFilesIds(allIds);

        for (let i = 0; i < 9; i++) {
          let id = nineFiles[i]._id;
          ids.push(id);
        }

        if (ids.length === 9) {
          setSeenIds(ids);
        }

        setLoading(false);
      }
    };
    fetchNine();
  }, []);

  const loadMore = async () => {
    setLoading(true);

    let files = await fetchAll(seenIds);
    if (files) {
      let nineFiles = [...seenFiles];
      nineFiles.push(...files.nineFiles);
      let ids = seenIds;
      setSeenFiles(nineFiles);
      console.log(nineFiles);
      if (seenFiles) {
        setLoading(false);
        for (let i = 0; i < 9; i++) {
          let id = seenFiles[i]._id;
          ids.push(id);
          setSeenIds(ids);
        }
      }
    }
  };

  useEffect(() => {
    const fetchWithId = async () => {
      let single = await fetchOne(selectedImgId);
      if (single) {
        setSelectedImg(single);
        console.log(single);

        setModal(true);
      }
    };
    fetchWithId();
  }, [selectedImgId]);

  const nextPhoto = () => {
    let indexOfSelectedImg = allFilesIds.indexOf(selectedImgId);
    if (indexOfSelectedImg === allFiles - 1) {
      let next = allFilesIds[0];
      let nextId = next._id;
      setSelectedImgId(nextId);
    } else {
      let next = allFilesIds[indexOfSelectedImg + 1];
      let nextId = next._id;
      setSelectedImgId(nextId);
    }
  };

  const prevPhoto = () => {
    let indexOfSelectedImg = allFilesIds.indexOf(selectedImgId);
    if (indexOfSelectedImg === 0) {
      let prev = allFilesIds[allFiles - 1];
      let prevId = prev._id;
      setSelectedImgId(prevId);
    } else {
      let prev = allFilesIds[indexOfSelectedImg - 1];
      let prevId = prev._id;
      setSelectedImgId(prevId);
    }
  };

  return (
    <div className="progetti-big-container">
      {modal ? (
        <div className={selectedImg !== null ? "modal open" : "modal"}>
          {selectedImg !== null && (
            <>
              <img src={selectedImg.url} alt="render" />
              <MdClose onClick={() => setModal(false)} id="close" />
              <MdArrowForwardIos
                onClick={() => {
                  nextPhoto();
                }}
                id="next"
              />
              <MdArrowBackIos
                onClick={() => {
                  prevPhoto();
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
            {seenFiles &&
              seenFiles.map((f, i) => (
                <div
                  className="img-container-progetto"
                  onClick={() => {
                    setSelectedImgId(f._id);
                  }}
                  key={i}
                >
                  <img src={f.url} alt="render" />
                </div>
              ))}
          </div>
          {loading ? (
            <div class="loader">Loading...</div>
          ) : seenFiles !== null && allFiles >= seenFiles.length ? (
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
