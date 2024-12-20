"use client";

import { useQuery } from "@tanstack/react-query";
import DropboxImage from "./dropbox-image";
import { searchFiles } from "./../app/actions/storageActions";
import { Spinner } from "@material-tailwind/react";

export default function DropboxImageList({ searchInput }) {
  const searchImagesQuery = useQuery({
    queryKey: ["images", searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  return (
    <section className="gap-4 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 xl:grid-cols-6">
      {searchImagesQuery.isLoading && (
        <Spinner
          className="h-8 w-8 text-blue-500"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      )}
      {searchImagesQuery.data &&
        searchImagesQuery.data.map((image) => (
          <DropboxImage key={image.id} image={image} />
        ))}
    </section>
  );
}
