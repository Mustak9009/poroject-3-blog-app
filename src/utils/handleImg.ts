import { ChangeEvent } from "react";

export const handlePrivewImg = ({event}: {event: ChangeEvent<HTMLInputElement>;}) => {
  return new Promise<{ resolve: boolean; srcOrError: string }>(async (resolve) => {
      const fileInput = event.target;
      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = async (readerEvent) => {
          if (typeof readerEvent.target?.result === "string") {
            const img = new window.Image();
            img.src = readerEvent.target.result;
            img.onload = () => {
              let width = 1200,
                height = 200;
              if (img.width >= width && img.height >= height) {
                resolve({
                  resolve: true,
                  srcOrError: img.src,
                });
              } else {
                resolve({
                  resolve: false,
                  srcOrError: `Image width must be: ${
                    img.width + " >= " + width
                  } and ${img.height + " >= " + height}`,
                });
              }
            };
          }
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    }
  );
};
export const uploadImgCloudnary = async ({event,}: {event: ChangeEvent<HTMLInputElement>;}) => {
  return new Promise<{ imgUrl:string }>(async (resolve) => {
    const fileInput = event.target;
    const formData = new FormData();
    if (fileInput.files && fileInput.files[0]) {
      formData.append("file", fileInput.files[0]);
      formData.append("upload_preset", "fsukmx5h");
      try {
        const response = await fetch("https://api.cloudinary.com/v1_1/da89yu0dg/image/upload",{
            method: "POST",
            body: formData,
          }
        );
        const uploadedImg = await response.json();
        resolve({
          imgUrl:uploadedImg.secure_url
        });
      } catch (err) {
        console.log(err);
      }
    }
  });
};
