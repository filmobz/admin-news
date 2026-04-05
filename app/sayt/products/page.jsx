"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/service/axiosInstance";

export default function Products() {
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axiosInstance.get("/axborot");
        setNews(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNews();
  }, []);

  const filteredData = news.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (item) => {
    setEditingItem({ ...item });
  };

  const saveEdit = async () => {
    try {
      await axiosInstance.put(`/axborot/${editingItem.id}`, editingItem);
      setNews(news.map(n => n.id === editingItem.id ? editingItem : n));
      setEditingItem(null);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axiosInstance.delete(`/axborot/${id}`);
      setNews(news.filter(n => n.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="ml-64 w-6xl p-6 min-h-screen bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">News</h1>

        <input
          type="text"
          placeholder="🔍 Qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm px-4 py-2 mb-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
        />

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm table-auto">
            <thead className="bg-gray-100 text-left">
              <tr>
                {['Title', 'Desc', 'Created', 'Category', 'Image', 'Actions'].map(h => (
                  <th key={h} className="px-2 py-2 text-gray-600 font-semibold truncate">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => (
                <tr key={item.id} className="border-t hover:bg-gray-50 transition duration-150">
                  <td className="px-2 py-1 max-w-28 truncate">{item.title}</td>
                  <td className="px-2 py-1 max-w-32 truncate">{item.desc}</td>
                  <td className="px-2 py-1 w-20">{item.createdAt}</td>
                  <td className="px-2 py-1 w-24">{item.category}</td>
                  <td className="px-2 py-1 w-16 h-16">
                    {item.image && <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />}
                  </td>
                  <td className="px-2 py-1 space-x-1">
                    <button onClick={() => handleEdit(item)} className="px-2 py-1 bg-blue-500 text-white rounded-sm hover:bg-blue-600 text-xs">Edit</button>
                    <button onClick={() => deleteItem(item.id)} className="px-2 py-1 bg-red-500 text-white rounded-sm hover:bg-red-600 text-xs">Delete</button>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-gray-400">😢 Hech narsa topilmadi</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {editingItem && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 relative">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Edit News</h2>

            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                value={editingItem.title}
                onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                placeholder="Title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
              />

              <textarea
                value={editingItem.desc}
                onChange={(e) => setEditingItem({ ...editingItem, desc: e.target.value })}
                placeholder="Description"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition h-24"
              />

              <input
                type="date"
                value={editingItem.createdAt}
                onChange={(e) => setEditingItem({ ...editingItem, createdAt: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
              />

              <select
                value={editingItem.category}
                onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
              >
                <option value="">Select Category</option>
                <option value="Tablet">Tablet</option>
                <option value="Phone">Phone</option>
                <option value="Clothes">Clothes</option>
                <option value="Laptop">Laptop</option>
                <option value="Headphones">Headphones</option>
              </select>

              <input
                type="text"
                value={editingItem.image}
                onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                placeholder="Image URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition"
              />
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button onClick={() => setEditingItem(null)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">Cancel</button>
              <button onClick={saveEdit} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}