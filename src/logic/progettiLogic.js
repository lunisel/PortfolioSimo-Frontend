const baseUrl = "https://risigraph-backend.herokuapp.com/files";

export const fetchAll = async () => {
  try {
    let response = await fetch(baseUrl);
    if (response.ok) {
      let files = await response.json();
      if (files) return files;
    } else {
      console.log(response);
    }
  } catch (err) {
    console.log(err);
  }
};
