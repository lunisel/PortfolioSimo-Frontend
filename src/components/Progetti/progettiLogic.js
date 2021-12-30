const baseUrl =
  /* "https://risigraph-backend.herokuapp.com/files" */ "http://localhost:3005/files";

export const fetchAll = async (seenIds) => {
  try {
    let response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seenIds: seenIds }),
    });
    if (response.ok) {
      let files = await response.json();
      console.log(files);
      if (files) return files;
    } else {
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchOne = async (id) => {
  try {
    let response = await fetch(baseUrl, `/${id}`);
    if (response.ok) {
      let singleFile = await response.json();
      return singleFile;
    }
  } catch (err) {
    console.log(err);
  }
};
