import { motion } from "framer-motion";
import GaneshaImg from "../../assets/ganesha.png";
import FrameSquare from "../../assets/frameSquare.webp";
import ProCountdown from "../introSection/Countdown";
import useResponsiveValues from "../../hooks/useResponsiveValues";
import CoupleWrap from "../introSection/CoupleWrap";

const InviteContent = () => {
  const { width } = useResponsiveValues();
  let isMobile = width < 1080;
  // let isDesktop = width > 1080;
  let newDate = new Date("2026-06-27");
  return (
    <div className="card-layout">
      <motion.div
        className="ganesha-wrap"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.9 }}
      >
        <p className="gold-text">ॐ श्री गणेशाय नम</p>
        <img src={GaneshaImg} className="ganesha-img" />
      </motion.div>
      <motion.div
        className="parents-wrap"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        <h5 className="parent-name">Smt. Sonali & Shri Ramdas Patil </h5>
        <p>along with</p>
        <h5 className="parent-name">Smt. Rekha Sudhakar Bhadrige</h5>
        <p>
          together with their families ask you to join them for the wedding of
        </p>
      </motion.div>

      <CoupleWrap />
      {/* <div className="couple-wrap">
        <h1 className="name-title gold-text"> Akshay </h1>
        <h3 className="name-sub-title gold-text">And</h3>
        <h1 className="name-title gold-text"> Divyani </h1>
        <img src={ArchBG} className="frame" alt="" />
      </div> */}

      <motion.hr
        className="gold-divide"
        initial={{ width: 0, opacity: 0, filter: "blur(10px)" }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
          width: "40%",
          transition: { duration: 0.9, ease: "easeInOut", delay: 1.2 },
        }}
        transition={{ duration: 0.9 }}
      />

      <motion.div
        className="date-wrap"
        initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
        whileInView={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: 3,
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        }}
        transition={{ duration: 1.6 }}
      >
        <p className="date-title">Saturday, 27th June, 2026</p>
        <p className="time-title">12:30PM : 04:30PM</p>
      </motion.div>

      <motion.hr
        className="gold-divide"
        initial={{ width: 0, opacity: 0, filter: "blur(10px)" }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
          width: "40%",
          transition: { duration: 0.9, ease: "easeInOut", delay: 1.2 },
        }}
        transition={{ duration: 0.9 }}
      />

      <div className="add-wrap">
        <div className="frame-content">
          <div>
            <br />
            <strong>Central Railway Officers Hall</strong>
            <p>
              D/14, Dada Saheb Phalke Marg, Gautam Nagar, Dadar, Mumbai,
              Maharashtra 400014
            </p>
          </div>
          <div className="btn-wrapper">
            <a
              href="https://maps.app.goo.gl/unBYU8ysRFNPwEL69"
              className="action-btn gold-bg"
              target="_blank"
            >
              Get Directions
            </a>
          </div>
        </div>
        <img src={FrameSquare} className="frame" alt="" />
      </div>

      <div className="countdown-wrapper">
        <ProCountdown
          targetDate={newDate}
          tint="#FFFFFF"
          labelColor="#888888"
          fontSize={isMobile ? 25 : 60}
          gap={isMobile ? 10 : 30}
          showSeparators={false}
          fontFamily="Inter"
          fontWeight={700}
        />
      </div>

      <hr className="gold-divide" />

      {/* <div className="date-wrap">
        <p>
          <strong>Contact</strong> <br />
          Rutik : 91 98988 87988
        </p>
      </div> */}
    </div>
  );
};

export default InviteContent;
