"use client";

import { IconButton } from "@material-tailwind/react";
import { getImageUrl } from "app/utils/supabase/storage";

// TypeScript로 props 타입을 명시합니다.
type DropboxImageProps = {
  image: {
    name: string;
  };
};

export default function DropboxImage({ image }: DropboxImageProps) {
  return (
    <div className="relative w-full flex flex-col p-4 border gap-2 border-gray-100 rounded-2xl shadow-md">
      {/* 이미지 출력 */}
      <div className="w-full aspect-square overflow-hidden rounded-2xl">
        <img
          src={getImageUrl(image.name)}
          alt={image.name || "Uploaded Image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 이미지 이름 */}
      <div>{image.name}</div>

      {/* 삭제 버튼 */}
      <div className="absolute top-5 right-5 w-7 h-7">
        <IconButton
          onClick={() => console.log("Delete", image.name)}
          color="red"
          className="w-full h-full"
          placeholder="Delete Button" // 필수 props 추가
        >
          <i className="fas fa-trash text-base" />
        </IconButton>
      </div>
    </div>
  );
}
