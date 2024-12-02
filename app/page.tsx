import FileDragDropZone from "components/file-dragdropzone";
import UI from "./ui";
import DropboxImageList from "./../components/dropbox-image-list";

export const metadata = {
  title: "Minibox",
  description: "A minimalistic Dropbox clone",
};

export default function Home() {
  return (
    <>
      <UI />
      <FileDragDropZone />
      <DropboxImageList />
    </>
  );
}
