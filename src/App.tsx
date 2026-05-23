import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useShallow } from "zustand/react/shallow";
import { useGlobalStore } from "./hooks/useGlobalStore";

import Loader from "./components/Loader";
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
  const isDirect = currentParam === "direct";
  const { imgStatus } = useGlobalStore(
    useShallow((state) => ({
      imgStatus: state.imgStatus,
    })),
  );

  const handleScroll = () => {
    if (document.body.classList.contains("scrollBlock"))
      document.body.classList.remove("scrollBlock");
    scrollToMain();
    setTimeout(() => {
      bufferRef.current?.remove();
    }, 1000);
  };

  const scrollToMain = () => {
    mainRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    document.body.classList.add("scrollBlock");
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
        {currentParam !== null ? (
          <>
            {
              <section ref={bufferRef}>
                {!isDirect ? (
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
                ) : (
                  <Loader />
                )}
              </section>
            }
            {/* its direct and imgStatus is cleared then scroll to elem */}
            {isDirect && imgStatus && handleScroll()}

            <>
              <section ref={mainRef}>
                <IntroFlowers />
              </section>
              <section style={{ paddingTop: "20vh" }}>
                <InviteContent />
              </section>
            </>
          </>
        ) : (
          <section>
            <div className="invite-intro">
              <p>Something went wrong. Please try again.</p>
            </div>
          </section>
        )}
      </main>
    </ReactLenis>
  );
}

export default App;
