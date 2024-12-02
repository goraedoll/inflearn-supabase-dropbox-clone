"use client";

import { IconButton } from "@material-tailwind/react";
import { getImageUrl } from "app/utils/supabase/storage";

export default function DropboxImage({ image }) {
  return (
    <div className="relative w-full flex flex-col p-4 border gap-2 border-gray-100 rounded-2xl shadow-md">
      <div className="w-full aspect-square overflow-hidden rounded-2xl">
        <img
          src={getImageUrl(image.name)}
          className="w-full h-full object-cover"
        />
      </div>

      <div>{image.name}</div>
      <div className="absolute top-5 right-5 w-7 h-7">
        <IconButton onClick={() => {}} color="red" className="w-full h-full">
          <i className="fas fa-trash text-base" />
        </IconButton>
      </div>
    </div>
  );
}
