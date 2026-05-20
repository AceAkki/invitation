import { useEffect } from "react";

const useImageLoadStatus = ({
  ref,
  imgStatus,
  setImgStatus,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  imgStatus: boolean;
  setImgStatus: (v: boolean) => void;
}) => {
  useEffect(() => {
    if (ref.current !== null) {
      Promise.all(
        Array.from(ref.current.querySelectorAll("img")).map(
          (img: HTMLImageElement): Promise<boolean> => {
            return new Promise((resolve) => {
              setTimeout(() => {
                if (img.complete) {
                  resolve(true);
                } else {
                  img.onload = () => resolve(true);
                  img.onerror = () => resolve(false);
                }
              }, 2000);
            });
          },
        ),
      ).then((values) => {
        console.log(values);
        !values.includes(false) ? setImgStatus(true) : setImgStatus(false);
      });
    }
  }, [ref, imgStatus]);
};

export default useImageLoadStatus;
