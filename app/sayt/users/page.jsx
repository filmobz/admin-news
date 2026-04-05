import React from 'react'

export default function Users() {
  return (
    <div className="w-screen pl-64">
      
      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        {/* Card */}
        <div className="bg-sky-800 rounded-2xl shadow-lg p-5 flex justify-between items-center">
          <h3 className="text-white text-2xl font-semibold">Shoxmalik</h3>

          <div className="flex gap-6 text-white text-sm">
            <p>Backend</p>
            <p>Frontend</p>
            <p>Admin-panel</p>
          </div>

          <input type="checkbox" className="w-5 h-5" />
        </div>

        {/* Card */}
        <div className="bg-sky-800 rounded-2xl shadow-lg p-5 flex justify-between items-center">
          <h3 className="text-white text-2xl font-semibold">Laziz</h3>

          <div className="flex gap-6 text-white text-sm">
            <p>Backend</p>
            <p>Frontend</p>
            <p>Admin-panel</p>
          </div>

          <input type="checkbox" className="w-5 h-5" />
        </div>

        {/* Card */}
        <div className="bg-sky-800 rounded-2xl shadow-lg p-5 flex justify-between items-center">
          <h3 className="text-white text-2xl font-semibold">Sherzod</h3>

          <div className="flex gap-6 text-white text-sm">
            <p>Backend</p>
            <p>Frontend</p>
            <p>Admin-panel</p>
          </div>

          <input type="checkbox" className="w-5 h-5" />
        </div>

      </div>
    </div>
  )
}