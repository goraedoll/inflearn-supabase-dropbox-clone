"use client";

export default function DropboxImage() {
  return (
    <div className="w-full flex flex-col p-4 border gap-2 border-gray-100 rounded-2xl shadow-md">
      <div className="w-full aspect-square overflow-hidden rounded-2xl">
        <img
          src="/images/cutedog.jpeg"
          className="w-full h-full object-cover"
        />
      </div>

      <div>cutedog.jpeg</div>
    </div>
  );
}
