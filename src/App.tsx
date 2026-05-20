import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useShallow } from "zustand/react/shallow";
import { useGlobalStore } from "./hooks/useGlobalStore";

import IntroFlowers from "./features/introSection/IntroFlowers";
import InviteContent from "./features/mainSection/InviteContent";

import "./App.css";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  const { imgStatus } = useGlobalStore(
    useShallow((state) => ({
      imgStatus: state.imgStatus,
    })),
  );

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
        {!imgStatus && <section> Waiting </section>}
        <section>
          <IntroFlowers />
        </section>
        <section style={{ paddingTop: "20vh" }}>
          <InviteContent />
        </section>
      </main>
    </ReactLenis>
  );
}

export default App;
