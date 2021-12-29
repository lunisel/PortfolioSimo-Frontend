import { useEffect, useState } from "react";
import { fetchAll } from "../logic/progettiLogic";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Progetti = (props) => {
  const [seenFiles, setSeenFiles] = useState([]);
  const [allFiles, setAllFiles] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setTimeout(fetchNine, 1000);
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
      <h1 className="portfolio-titolo">Risi Graph Render</h1>
      <div className="container progetti">
        {seenFiles &&
          seenFiles.map((f) => (
            <div className="img-container-progetto">
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
    </div>
  );
};

export default Progetti;
