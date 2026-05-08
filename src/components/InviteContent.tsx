import { motion } from "framer-motion";
import GaneshaImg from "../assets/ganesha.png";
import ArchBG from "../assets/rose-arc.png";
import FrameSquare from "../assets/frameSquare.png";
import ProCountdown from "../Countdown";
import useResponsiveValues from "../hooks/useResponsiveValues";

const InviteContent = () => {
  const { width, height } = useResponsiveValues();
  let isMobile = width < 1080;
  let isDesktop = width > 1080;
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

      <div className="couple-wrap">
        <h1 className="name-title gold-text"> Akshay </h1>
        <h3 className="name-sub-title gold-text">And</h3>
        <h1 className="name-title gold-text"> Divyani </h1>
        <img src={ArchBG} className="frame" alt="" />
      </div>

      <hr className="gold-divide" />

      <div className="date-wrap">
        <p className="date-title">Saturday, 27th June, 2026</p>
        <p className="time-title">12:30PM : 04:30PM</p>
      </div>

      <hr className="gold-divide" />

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
    </div>
  );
};

export default InviteContent;
