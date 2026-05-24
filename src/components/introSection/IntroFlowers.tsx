import { useRef } from "react";
import { useShallow } from "zustand/react/shallow";

import RoyalWeddingReveal from "./TitleReveal";
import { FlyingFlower, SwayFlower } from "./FlowerAnimation";
import { useGlobalStore } from "../../hooks/useGlobalStore";
import useResponsiveValues from "../../hooks/useResponsiveValues";
import useImageLoadStatus from "../../hooks/useImageLoadStatus";

import FlowerImg from "../../assets/flower.webp";
import FlowerImg1 from "../../assets/flower1.webp";
import FlowerImg2 from "../../assets/flower2.webp";
import FlowerImg3 from "../../assets/flower3.webp";
import FlowerImg4 from "../../assets/flower4.webp";
import FlowerImg5 from "../../assets/flower5.webp";
import FlowerImg6 from "../../assets/flower6.webp";
import FlowerImg7 from "../../assets/flower7.webp";
import FlowerImg8 from "../../assets/flower8.webp";
import FlowerImg9 from "../../assets/flower9.webp";
// import leafImg from "../../assets/leaf.webp";
import leafImgA from "../../assets/leafImg.webp";
import leafImgB from "../../assets/leafImg0.webp";

export default function IntroFlowers() {
  const { width, height } = useResponsiveValues();
  let isMobile = width < 1080;
  let isDesktop = width > 1080;

  const swayFlowerRef = useRef<HTMLDivElement | null>(null);
  const { imgStatus, setImgStatus } = useGlobalStore(
    useShallow((state) => ({
      imgStatus: state.imgStatus,
      setImgStatus: state.setImgStatus,
    })),
  );

  const imageStatus = useImageLoadStatus({
    ref: swayFlowerRef,
    imgStatus: imgStatus,
    setImgStatus: setImgStatus,
  });
  console.log(imageStatus);

  /*
  useEffect(() => {
    console.log(swayFlowerRef.current);
    if (swayFlowerRef.current !== null) {
      const container: React.RefObject<HTMLDivElement> = swayFlowerRef.current;
      Promise.all(
        Array.from(container.querySelectorAll("img")).map(
          (img): Promise<boolean> => {
            return new Promise((resolve) => {
              if (img.complete) {
                resolve(true);
              } else {
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
              }
              // setTimeout(() => {
              // }, 2000);
            });
          },
        ),
      ).then((values) => {
        console.log(values);
        !values.includes(false) ? setImgStatus(true) : setImgStatus(false);
      });
    }
  }, [swayFlowerRef, imgStatus]);
  */
  return (
    <>
      <section
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          overflowX: "hidden",
          visibility: imgStatus ? "visible" : "hidden",
        }}
        ref={swayFlowerRef}
      >
        {/* --- EXISTING GROUPS (Top & Mid-Top) --- */}
        <SwayFlower
          src={FlowerImg1}
          xPos="3vh"
          speed={-800}
          yOffset={height * -0.15}
        />
        <SwayFlower src={FlowerImg7} xPos="94%" speed={-1100} yOffset={-50} />
        <SwayFlower src={leafImgA} xPos="18%" speed={-1400} yOffset={100} />
        <SwayFlower src={FlowerImg4} xPos="82%" speed={-950} yOffset={-250} />
        <SwayFlower src={FlowerImg2} xPos="12%" speed={-1200} yOffset={400} />
        <SwayFlower src={FlowerImg5} xPos="25%" speed={-1600} yOffset={250} />
        <SwayFlower src={leafImgB} xPos="70%" speed={-1000} yOffset={350} />
        <SwayFlower src={FlowerImg8} xPos="88%" speed={-1300} yOffset={600} />

        {/* --- NEW Group 5: The "Empty Middle" Fill (Center Viewport) --- */}
        {/* These fill the void around the 400px - 600px vertical mark */}
        <SwayFlower src={FlowerImg6} xPos="15%" speed={-1100} yOffset={550} />
        <SwayFlower src={FlowerImg3} xPos="30%" speed={-1450} yOffset={480} />
        <SwayFlower
          src={leafImgA}
          xPos={isMobile ? "55%" : "8%"}
          speed={-900}
          yOffset={520}
        />
        <SwayFlower src={FlowerImg1} xPos="75%" speed={-1300} yOffset={580} />
        <SwayFlower
          src={FlowerImg5}
          xPos="40%"
          speed={-1050}
          yOffset={isMobile ? 550 : 350}
        />

        {/* --- NEW Group 6: The "Bottom Depth" (Coming from way down) --- */}
        {/* These ensure that as the user scrolls, new flowers keep appearing from the bottom */}
        <SwayFlower src={FlowerImg7} xPos="10%" speed={-1600} yOffset={900} />
        <SwayFlower
          src={FlowerImg2}
          xPos="22%"
          speed={-1200}
          yOffset={isMobile ? 500 : 1100}
        />
        <SwayFlower src={leafImgB} xPos="45%" speed={-1800} yOffset={950} />
        <SwayFlower
          src={FlowerImg8}
          xPos={isMobile ? "60%" : "70%"}
          speed={-1350}
          yOffset={isMobile ? 750 : 1200}
        />
        <SwayFlower src={FlowerImg4} xPos="80%" speed={-1500} yOffset={1050} />
        <SwayFlower src={FlowerImg1} xPos="92%" speed={-1100} yOffset={980} />

        {/* Group 3 & 4 (Your previous center/low scatter) */}
        <SwayFlower src={FlowerImg3} xPos="35%" speed={-1500} yOffset={-300} />
        <SwayFlower
          src={FlowerImg8}
          xPos="42%"
          speed={-850}
          yOffset={isMobile ? 500 : 350}
        />
        <SwayFlower src={FlowerImg6} xPos="58%" speed={-1700} yOffset={-100} />
        <SwayFlower src={FlowerImg1} xPos="65%" speed={-1150} yOffset={450} />
        <SwayFlower src={FlowerImg4} xPos="48%" speed={-1400} yOffset={400} />
        <SwayFlower
          src={FlowerImg2}
          xPos="5%"
          speed={-900}
          yOffset={isMobile ? 500 : 700}
        />
        <SwayFlower src={leafImgA} xPos="90%" speed={-1200} yOffset={850} />

        <SwayFlower src={FlowerImg1} xPos="2%" speed={-1100} yOffset={1600} />
        <SwayFlower src={leafImgB} xPos="5%" speed={-1400} yOffset={1750} />
        <SwayFlower src={FlowerImg4} xPos="8%" speed={-900} yOffset={1650} />
        <SwayFlower src={FlowerImg2} xPos="12%" speed={-1250} yOffset={1900} />
        <SwayFlower src={FlowerImg7} xPos="15%" speed={-1500} yOffset={1800} />

        {/* Group B: Mid Left (Dense Cluster) */}
        <SwayFlower src={FlowerImg5} xPos="22%" speed={-1000} yOffset={1700} />
        <SwayFlower src={FlowerImg8} xPos="26%" speed={-1350} yOffset={1950} />
        <SwayFlower src={FlowerImg6} xPos="30%" speed={-1150} yOffset={1620} />
        <SwayFlower
          src={FlowerImg3}
          xPos={isMobile ? "34%" : "80%"}
          speed={-1600}
          yOffset={1850}
        />

        {/* Group C: Center-Left (Dense Cluster) */}
        <SwayFlower src={FlowerImg6} xPos="38%" speed={-900} yOffset={2000} />
        <SwayFlower src={FlowerImg1} xPos="42%" speed={-1450} yOffset={2100} />
        <SwayFlower src={leafImgA} xPos="45%" speed={-1100} yOffset={1750} />
        <SwayFlower src={FlowerImg5} xPos="49%" speed={-1300} yOffset={2250} />

        {/* Group D: Center-Right (Dense Cluster) */}
        <SwayFlower src={FlowerImg2} xPos="53%" speed={-1200} yOffset={1950} />
        <SwayFlower
          src={FlowerImg8}
          xPos={isMobile ? "80%" : "57%"}
          speed={-1550}
          yOffset={isMobile ? 1600 : 2200}
        />
        <SwayFlower src={leafImgB} xPos="62%" speed={-950} yOffset={2150} />
        <SwayFlower
          src={FlowerImg4}
          xPos="66%"
          speed={-1400}
          yOffset={isMobile ? 1850 : 1650}
        />

        {/* Group E: Mid Right (Dense Cluster) */}
        <SwayFlower src={FlowerImg7} xPos="72%" speed={-1050} yOffset={2300} />
        <SwayFlower src={FlowerImg1} xPos="76%" speed={-1300} yOffset={1900} />
        <SwayFlower src={leafImgA} xPos="80%" speed={-1500} yOffset={2050} />
        <SwayFlower src={FlowerImg3} xPos="84%" speed={-1100} yOffset={1750} />

        <RoyalWeddingReveal />
      </section>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          visibility: imgStatus ? "visible" : "hidden",
        }}
      >
        {/* --- Section 1: Far Left (0% - 20%) --- */}
        <FlyingFlower src={FlowerImg} xPos="1%" speed={-750} />
        <FlyingFlower src={FlowerImg5} xPos="1.5%" speed={-1300} />
        <FlyingFlower src={FlowerImg3} xPos="6%" speed={-1150} />
        <FlyingFlower src={FlowerImg7} xPos="8.5%" speed={-850} />
        <FlyingFlower src={FlowerImg2} xPos="11%" speed={-500} />
        <FlyingFlower src={FlowerImg8} xPos="13.5%" speed={-1100} />
        <FlyingFlower src={FlowerImg4} xPos="16%" speed={-980} />
        <FlyingFlower src={FlowerImg9} xPos="18.5%" speed={-600} />

        {/* --- Section 2: Mid Left (21% - 40%) --- */}
        <FlyingFlower src={leafImgA} xPos="21%" speed={-850} />
        <FlyingFlower src={FlowerImg6} xPos="23.5%" speed={-1100} />
        <FlyingFlower src={FlowerImg3} xPos="26%" speed={-1250} />
        <FlyingFlower src={FlowerImg5} xPos="28.5%" speed={-650} />
        <FlyingFlower src={FlowerImg4} xPos="31%" speed={-1400} />
        <FlyingFlower src={FlowerImg7} xPos="33.5%" speed={-1300} />
        <FlyingFlower src={FlowerImg6} xPos="36%" speed={-780} />
        <FlyingFlower src={FlowerImg2} xPos="38.5%" speed={-600} />

        {/* --- Section 3: Center (41% - 60%) --- */}
        <FlyingFlower src={FlowerImg8} xPos="41%" speed={-950} />
        <FlyingFlower src={FlowerImg5} xPos="43.5%" speed={-1150} />
        <FlyingFlower src={FlowerImg1} xPos="46%" speed={-400} />
        <FlyingFlower src={FlowerImg3} xPos="48.5%" speed={-1300} />
        <FlyingFlower src={FlowerImg9} xPos="51%" speed={-1100} />
        <FlyingFlower src={FlowerImg2} xPos="53.5%" speed={-820} />
        <FlyingFlower src={FlowerImg3} xPos="56%" speed={-900} />
        <FlyingFlower src={FlowerImg4} xPos="58.5%" speed={-720} />

        {/* --- Section 4: Mid Right (61% - 80%) --- */}
        <FlyingFlower src={leafImgB} xPos="61%" speed={-1200} />
        <FlyingFlower src={FlowerImg7} xPos="63.5%" speed={-1400} />
        <FlyingFlower src={FlowerImg1} xPos="66%" speed={-1050} />
        <FlyingFlower src={FlowerImg6} xPos="68.5%" speed={-990} />
        <FlyingFlower src={FlowerImg8} xPos="71%" speed={-1300} />
        <FlyingFlower src={FlowerImg2} xPos="73.5%" speed={-450} />
        <FlyingFlower src={FlowerImg5} xPos="76%" speed={-1050} />

        {/* --- Section 5: Far Right (81% - 100%) --- */}
        {isDesktop && (
          <>
            <FlyingFlower src={FlowerImg4} xPos="78.5%" speed={-680} />
            <FlyingFlower src={FlowerImg} xPos="81%" speed={-550} />
            <FlyingFlower src={FlowerImg1} xPos="83.5%" speed={-880} />
            <FlyingFlower src={FlowerImg7} xPos="86%" speed={-1050} />
            <FlyingFlower src={FlowerImg3} xPos="88.5%" speed={-1250} />
            <FlyingFlower src={FlowerImg5} xPos="80%" speed={-900} />
          </>
        )}
        {/* <FlyingFlower src={FlowerImg4} xPos="93.5%" speed={-750} />
        <FlyingFlower src={FlowerImg1} xPos="96%" speed={-1200} />
        <FlyingFlower src={FlowerImg6} xPos="98.5%" speed={-990} /> */}
      </div>
    </>
  );
}
