"use client";
import axiosInstance from "@/service/axiosInstance";
import React, { useEffect, useState } from "react";

export default function Create() {
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    title: "",
    desc: "",
    createdAt: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    const getAxborot = async () => {
      try {
        const res = await axiosInstance.get("/axborot");
        setNews(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getAxborot();
  }, []);

  const createNews = async () => {
    try {
      await axiosInstance.post("/axborot", form);
      setForm({
        name: "",
        title: "",
        desc: "",
        createdAt: "",
        category: "",
        image: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-screen pl-64 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Create New Item
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Fill in the details below
          </p>
        </div>

        <div className="p-10 bg-white rounded-3xl shadow-xl space-y-6">
          <div className="flex flex-col">
            <label className="block text-lg font-semibold mb-2">Yangilik</label>
            <input
              type="text"
              placeholder="Yangilikni kiriting"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full py-4 px-5 text-lg border rounded-xl focus:ring-2 focus:ring-indigo-500 bg-gray-100"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-lg font-semibold mb-2">Created At</label>
            <input
              type="date"
              value={form.createdAt}
              onChange={(e) =>
                setForm({ ...form, createdAt: e.target.value })
              }
              className="w-full py-4 px-5 text-lg border rounded-xl bg-gray-100"
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-lg font-semibold mb-2">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full py-4 px-5 text-lg border rounded-xl bg-gray-100"
            >
              <option value="">Select Category</option>
              <option value="new">New</option>
              <option value="axborot">Axborot</option>
              <option value="cards">Cards</option>
              <option value="Laptop">Laptop</option>
              <option value="Headphones">Headphones</option>
            </select>
          </div>

          {/* Описание */}
          <div className="flex flex-col">
            <label className="block text-lg font-semibold mb-2">Description</label>
            <textarea
              placeholder="Описание новости"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              className="w-full py-4 px-5 text-lg border rounded-xl bg-gray-100 h-24"
            />
          </div>

          {/* Картинка */}
          <div className="flex flex-col">
            <label className="block text-lg font-semibold mb-2">Image</label>
            <input
              type="text"
              placeholder="Rasimni URL kiriting"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full py-4 px-5 text-lg border rounded-xl bg-gray-100"
            />
          </div>

          <button
            onClick={createNews}
            className="w-full py-4 text-lg font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Create Item
          </button>
        </div>
      </div>
    </div>
  );
}