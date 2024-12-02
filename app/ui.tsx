"use client";

import DropboxImageList from "components/dropbox-image-list";
import Logo from "components/logo";
import SearchComponent from "components/search-component";
import Image from "next/image";
import { useState } from "react";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className="flex w-full p-2 flex-col gap-4">
      <Logo />
      <SearchComponent />
    </main>
  );
}
