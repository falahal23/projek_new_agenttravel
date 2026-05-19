import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-8 py-6 border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} TravelS4. All rights reserved.
      </div>
    </footer>
  )
}
