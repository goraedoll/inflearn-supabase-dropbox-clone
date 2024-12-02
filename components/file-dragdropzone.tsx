"use client";

import { Button } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "app/actions/storageActions";
import { queryClient } from "config/ReactQueryClientProvider";
import { useRef } from "react";

export default function FileDragDropZone() {
  const fileRef = useRef(null);
  const uploadImageMutation = useMutation({
    mutationFn: uploadFile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["images"],
      });
    },
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const file = fileRef.current?.files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          const result = await uploadImageMutation.mutateAsync(formData); // mutate 대신 mutateAsync
          console.log(result);
        }
      }}
      className="w-full py-20 gap-5 rounded-xl border-4 border-dotted border-indigo-600 flex flex-col items-center justify-center"
    >
      <input ref={fileRef} type="file" className="" aria-label="Upload files" />
      <p>파일을 여기에 끌어다 놓거나 클릭하여 업로드하세요.</p>
      <Button
        loading={uploadImageMutation.isLoading} // 수정된 부분
        type="submit"
        {...({} as any)} // 타입 강제 무시
      >
        파일 업로드
      </Button>
    </form>
  );
}
