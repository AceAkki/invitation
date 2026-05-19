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
