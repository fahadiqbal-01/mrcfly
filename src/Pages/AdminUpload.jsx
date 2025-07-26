import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function AdminUpload() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = "/login";
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/login";
    } catch (err) {
      alert("Error signing out: " + err.message);
    }
  };

  const [form, setForm] = useState({
    id: "",
    name: "",
    status: "",
    serviceType: "",
    shortNote: "",
    date: "",
    image: null,
    driveLink: "", // <-- add this
  });

  const [entries, setEntries] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    status: "",
    serviceType: "",
    shortNote: "",
    date: "",
    driveLink: "", // <-- add this
  });

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "client_img_upload");

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

  useEffect(() => {
    const fetchEntries = async () => {
      const querySnapshot = await getDocs(collection(db, "entries"));
      setEntries(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };
    fetchEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.id ||
      !form.name ||
      !form.status ||
      !form.serviceType ||
      !form.shortNote ||
      !form.date ||
      !form.image
    ) {
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
        serviceType: form.serviceType,
        shortNote: form.shortNote,
        date: form.date,
        imageUrl: imageUrl,
        driveLink: form.driveLink || "", // <-- add this
      });

      alert("Successfully saved!");
      setForm({
        id: "",
        name: "",
        status: "",
        serviceType: "",
        shortNote: "",
        date: "",
        image: null,
      });
      const querySnapshot = await getDocs(collection(db, "entries"));
      setEntries(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (error) {
      console.error("Firestore error:", error);
      alert("Failed to save data.");
    }
  };

  const startEdit = (entry) => {
    setEditId(entry.id);
    setEditForm({
      name: entry.name,
      status: entry.status,
      serviceType: entry.serviceType,
      shortNote: entry.shortNote,
      date: entry.date,
      driveLink: entry.driveLink || "",
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    await updateDoc(doc(db, "entries", editId), editForm);
    setEditId(null);
    const querySnapshot = await getDocs(collection(db, "entries"));
    setEntries(
      querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "entries", id));
    const querySnapshot = await getDocs(collection(db, "entries"));
    setEntries(
      querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#F0FDF4]">
        <div className="text-lg font-bold text-gray-600">
          Checking authentication...
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F0FDF4] pt-[40px] pb-[24px] px-2 sm:px-4">
      <div className="max-w-4xl mx-auto bg-[#707071] border-2 border-[#BBF7D0] rounded-2xl shadow-lg p-4 sm:p-8 md:p-[40px]">
        <h2 className="font-G-Sans-bold text-[24px] sm:text-[30px] leading-[32px] sm:leading-[36px] text-black text-center mb-6">
          Admin Upload Panel
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center mb-8"
        >
          <input
            type="text"
            placeholder="ID"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            className="bg-[#F0FDF4] px-4 py-3 w-full sm:w-[220px] border-2 border-[#9CA3AF] rounded-[8px] focus:outline-none focus:border-green placeholder:text-[16px] placeholder:font-Gambetta"
          />
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="bg-[#F0FDF4] px-4 py-3 w-full sm:w-[220px] border-2 border-[#9CA3AF] rounded-[8px] focus:outline-none focus:border-green placeholder:text-[16px] placeholder:font-Gambetta"
          />
          <input
            type="text"
            placeholder="Status"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="bg-[#F0FDF4] px-4 py-3 w-full sm:w-[220px] border-2 border-[#9CA3AF] rounded-[8px] focus:outline-none focus:border-green placeholder:text-[16px] placeholder:font-Gambetta"
          />
          <input
            type="text"
            placeholder="Service Type"
            value={form.serviceType}
            onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
            className="bg-[#F0FDF4] px-4 py-3 w-full sm:w-[220px] border-2 border-[#9CA3AF] rounded-[8px] focus:outline-none focus:border-green placeholder:text-[16px] placeholder:font-Gambetta"
          />
          <input
            type="text"
            placeholder="Short Note"
            value={form.shortNote}
            onChange={(e) => setForm({ ...form, shortNote: e.target.value })}
            className="bg-[#F0FDF4] px-4 py-3 w-full sm:w-[220px] border-2 border-[#9CA3AF] rounded-[8px] focus:outline-none focus:border-green placeholder:text-[16px] placeholder:font-Gambetta"
          />
          <input
            type="date"
            placeholder="Date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="bg-[#F0FDF4] px-4 py-3 w-full sm:w-[220px] border-2 border-[#9CA3AF] rounded-[8px] focus:outline-none focus:border-green placeholder:text-[16px] placeholder:font-Gambetta"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
            className="bg-[#F0FDF4] px-4 py-3 w-full sm:w-[220px] border-2 border-[#9CA3AF] rounded-[8px] focus:outline-none focus:border-green"
          />
          <button
            type="submit"
            className="bg-[#16A34A] text-white font-G-Sans px-8 py-3 rounded-[8px] hover:bg-[#15803d] duration-300 ease-out select-none cursor-pointer w-full sm:w-auto"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-end mb-8">
          <button
            onClick={handleLogout}
            className="bg-[#DBEAFE] text-[#1E40AF] px-6 py-2 rounded-xl font-Gambetta hover:bg-[#bfdbfe] duration-300 ease-out mx-auto select-none cursor-pointer"
          >
            Sign Out
          </button>
        </div>

        <div className="mt-12">
          <h2 className="font-G-Sans-bold text-[20px] sm:text-[22px] mb-4 text-center">
            Uploaded Entries
          </h2>
          {entries.length === 0 && (
            <div className="text-center text-gray-500 font-Gambetta">
              No entries uploaded yet.
            </div>
          )}
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-[#F0FDF4] border-2 border-[#BBF7D0] rounded-xl p-4 sm:p-6 mb-6 shadow flex flex-col md:flex-row items-center justify-between"
            >
              {editId === entry.id ? (
                <div className="flex flex-wrap gap-2 sm:gap-4 items-center w-full">
                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleEditChange}
                    placeholder="Name"
                    className="bg-white px-4 py-2 border-2 border-[#9CA3AF] rounded-[8px] w-full sm:w-[180px]"
                  />
                  <input
                    type="text"
                    name="status"
                    value={editForm.status}
                    onChange={handleEditChange}
                    placeholder="Status"
                    className="bg-white px-4 py-2 border-2 border-[#9CA3AF] rounded-[8px] w-full sm:w-[120px]"
                  />
                  <input
                    type="text"
                    name="serviceType"
                    value={editForm.serviceType}
                    onChange={handleEditChange}
                    placeholder="Service Type"
                    className="bg-white px-4 py-2 border-2 border-[#9CA3AF] rounded-[8px] w-full sm:w-[140px]"
                  />
                  <input
                    type="text"
                    name="shortNote"
                    value={editForm.shortNote}
                    onChange={handleEditChange}
                    placeholder="Short Note"
                    className="bg-white px-4 py-2 border-2 border-[#9CA3AF] rounded-[8px] w-full sm:w-[180px]"
                  />
                  <input
                    type="date"
                    name="date"
                    value={editForm.date}
                    onChange={handleEditChange}
                    placeholder="Date"
                    className="bg-white px-4 py-2 border-2 border-[#9CA3AF] rounded-[8px] w-full sm:w-[140px]"
                  />
                  <input
                    type="text"
                    name="driveLink"
                    value={editForm.driveLink || ""}
                    onChange={handleEditChange}
                    placeholder="Google Drive Link"
                    className="bg-white px-4 py-2 border-2 border-[#9CA3AF] rounded-[8px] w-full sm:w-[180px]"
                  />
                  <button
                    onClick={saveEdit}
                    className="bg-[#16A34A] text-white px-4 py-2 rounded-[8px] ml-0 sm:ml-2 hover:bg-[#15803d] duration-300 ease-out w-full sm:w-auto"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditId(null)}
                    className="bg-[#DBEAFE] text-[#1E40AF] px-4 py-2 rounded-xl ml-0 sm:ml-2 hover:bg-[#bfdbfe] duration-300 ease-out w-full sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row items-center w-full justify-between">
                  <div className="flex flex-col gap-1 font-Gambetta text-gray-700 w-full md:w-auto">
                    <span>
                      <b>ID:</b> {entry.id}
                    </span>
                    <span>
                      <b>Name:</b> {entry.name}
                    </span>
                    <span>
                      <b>Status:</b> {entry.status}
                    </span>
                    <span>
                      <b>Service Type:</b> {entry.serviceType}
                    </span>
                    <span>
                      <b>Short Note:</b> {entry.shortNote}
                    </span>
                    <span>
                      <b>Date:</b> {entry.date}
                    </span>
                    <span>
                      <b>Drive Link:</b>{" "}
                      {entry.driveLink ? (
                        <a
                          href={entry.driveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          Google Drive
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end">
                    <button
                      onClick={() => startEdit(entry)}
                      className="bg-[#16A34A] text-white px-4 py-2 rounded-[8px] hover:bg-[#15803d] duration-300 ease-out w-full md:w-auto"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="bg-[#DC2626] text-white px-4 py-2 rounded-[8px] hover:bg-[#b91c1c] duration-300 ease-out w-full md:w-auto"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
