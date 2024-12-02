import FileDragDropZone from "components/file-dragdropzone";
import UI from "./ui";
import DropboxImageList from "./../components/dropbox-image-list";
import { ClassNames } from "@emotion/react";

export const metadata = {
  title: "Minibox",
  description: "A minimalistic Dropbox clone",
};

export default function Home() {
  return (
    <div className="m-4 p-4 border border-gray-300 rounded-lg">
      <UI />
    </div>
  );
}
