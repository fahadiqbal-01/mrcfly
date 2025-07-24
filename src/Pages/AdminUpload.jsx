import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function AdminUpload() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    status: "",
    image: null,
  });

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "client_img_upload"); // ✅ make sure this exists in Cloudinary

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpwfwn2dq/image/upload",
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Upload to Cloudinary failed:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent page reload

    if (!form.id || !form.name || !form.status || !form.image) {
      alert("Please fill all fields");
      return;
    }

    const imageUrl = await uploadToCloudinary(form.image);
    if (!imageUrl) {
      alert("Image upload failed");
      return;
    }

    try {
      await setDoc(doc(db, "entries", form.id), {
        name: form.name,
        status: form.status,
        imageUrl: imageUrl,
      });

      alert("Successfully saved!");
    } catch (error) {
      console.error("Firestore error:", error);
      alert("Failed to save data.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ID"
        onChange={(e) => setForm({ ...form, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Status"
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
      />
      <button type="submit" className=" cursor-pointer ">
        Submit
      </button>
    </form>
  );
}
