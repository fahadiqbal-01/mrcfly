// src/pages/SearchStatus.jsx
import { useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Toastify from "toastify-js";

export default function TrackServices() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setImageLoaded(false);
    const docRef = doc(db, "entries", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
      setLoading(false);
    } else {
      setData(null);
      setLoading(false);
      alert("ID not found.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter ID"
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <div>Loading...</div>}

      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>{data.status}</p>
          {!imageLoaded && <div>Loading image...</div>}
          <img
            src={data.imageUrl}
            alt="Uploaded"
            style={{ width: "200px", display: imageLoaded ? "block" : "none" }}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      )}
    </div>
  );
}
