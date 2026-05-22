import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useShallow } from "zustand/react/shallow";
import { useGlobalStore } from "./hooks/useGlobalStore";

import IntroFlowers from "./features/introSection/IntroFlowers";
import InviteContent from "./features/mainSection/InviteContent";
import { getParams } from "./utils";
import { InvitationMessage } from "./features/introSection/InvitationMessage";
import "./App.css";

function App() {
  const lenisRef = useRef<LenisRef>(null);
  let bufferRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const currentParam = getParams();

  const { imgStatus } = useGlobalStore(
    useShallow((state) => ({
      imgStatus: state.imgStatus,
    })),
  );

  const handleScroll = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      bufferRef.current?.remove();
    }, 1000);
  };

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
        <section ref={bufferRef}>
          {
            <div className="invite-intro">
              <InvitationMessage currentParam={currentParam} />
              {/* <motion.p className="invite-into-msg">
                Dear {currentParam},<br />
                You've been an important part of our journey, and we'd be
                honored to have you witness our union and celebrate this joyful
                new chapter with us.
              </motion.p> */}
              <button
                onClick={handleScroll}
                disabled={!imgStatus}
                className="action-btn"
              >
                View Invitation
              </button>
            </div>
          }
        </section>
        <section ref={mainRef}>
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
