import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import "./App.css";
import Para from "./Para";
import ScrollTriggered from "./Scroll";
import { ImageCircles } from "./ImageCircle";
import Rotate from "./Test";

import Frame from "./assets/frame.png";

import ResponsiveWeddingScene from "./components/IntroFlower";
import InviteContent from "./components/InviteContent";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <main>
        <section>
          <ResponsiveWeddingScene />
        </section>
        <section style={{ paddingTop: "20vh" }}>
          <InviteContent />
        </section>

        {/* <section>
          <ImageCircles />
        </section>
        <section>
          <ScrollTriggered />
        </section>
        <section>
          <Para />
        </section> */}
      </main>
    </ReactLenis>
  );
}

export default App;
