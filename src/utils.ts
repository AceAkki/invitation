export async function checkImagesLoaded(
  containerRef: React.RefObject<HTMLDivElement>,
): Promise<boolean[]> {
  if (!containerRef.current) return [];

  const promises: Promise<boolean>[] = Array.from(
    containerRef.current.querySelectorAll("img"),
  ).map((img): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        if (img.complete) {
          resolve(true);
        } else {
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        }
      });
    });
  });

  return Promise.all(promises);
}

export const getParams = () => {
  let urlParams = new URLSearchParams(window.location.search);
  let currentParam = urlParams.get("guest");
  // console.log(urlParams, currentParam);
  return currentParam;
};

export const handleScroll = ({
  elemFocus,
  elemRemove,
  shouldRemove,
}: {
  elemFocus: React.RefObject<HTMLDivElement | null>;
  elemRemove: React.RefObject<HTMLDivElement | null>;
  shouldRemove: boolean;
}) => {
  if (document.body.classList.contains("scrollBlock"))
    document.body.classList.remove("scrollBlock");
  scrollToMain(elemFocus);
  if (shouldRemove) {
    setTimeout(() => {
      elemRemove.current?.remove();
    }, 1000);
  }
};

export const scrollToMain = (elem: React.RefObject<HTMLDivElement | null>) => {
  elem.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};
