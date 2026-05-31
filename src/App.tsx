import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";
import { useShallow } from "zustand/react/shallow";

import Loader from "./components/Loader";
import IntroFlowers from "./components/introSection/IntroFlowers";
import InviteContent from "./components/mainSection/InviteContent";
import { InvitationMessage } from "./components/introSection/InvitationMessage";

import { useGlobalStore } from "./hooks/useGlobalStore";
import { getParams, handleScroll, scrollToMain } from "./utils";
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
                    <button
                      onClick={() =>
                        handleScroll({
                          elemFocus: mainRef,
                          elemRemove: bufferRef,
                          shouldRemove: true,
                        })
                      }
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
            {isDirect &&
              imgStatus &&
              handleScroll({
                elemFocus: mainRef,
                elemRemove: bufferRef,
                shouldRemove: true,
              })}

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
