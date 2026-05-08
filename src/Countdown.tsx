import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
// import { addPropertyControls, ControlType } from "framer";
import { motion, AnimatePresence } from "framer-motion";

export default function ProCountdown(props) {
  const {
    targetDate,
    tint,
    labelColor,
    fontSize,
    gap,
    showSeparators,
    fontFamily,
    fontWeight,
  } = props; // 1. DYNAMIC FONT LOADER
  // This injects the font from Google into your page automatically
  console.log(props, fontFamily);
  React.useEffect(() => {
    if (!fontFamily) return;
    const linkId = `font-${fontFamily.replace(/\s+/g, "-")}`;
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.href = `https://fonts.googleapis.com/css?family=${fontFamily.replace(
        /\s+/g,
        "+",
      )}:300,400,500,600,700,800,900&display=swap`;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, [fontFamily]); // 2. TIMER LOGIC
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft(targetDate));
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1e3);
    return () => clearInterval(timer);
  }, [targetDate]);
  const time = timeLeft || { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const style = {
    ...containerStyle,
    gap: gap,
    color: tint,
    fontFamily: `"${fontFamily}", sans-serif`,
    fontWeight: fontWeight,
  };
  return /*#__PURE__*/ _jsxs("div", {
    style: style,
    children: [
      /*#__PURE__*/ _jsx(NumberGroup, {
        value: time.days,
        label: "DAYS",
        ...props,
      }),
      showSeparators &&
        /*#__PURE__*/ _jsx(Separator, {
          fontSize: fontSize,
          tint: tint,
          fontFamily: fontFamily,
        }),
      /*#__PURE__*/ _jsx(NumberGroup, {
        value: time.hours,
        label: "HOURS",
        ...props,
      }),
      showSeparators &&
        /*#__PURE__*/ _jsx(Separator, {
          fontSize: fontSize,
          tint: tint,
          fontFamily: fontFamily,
        }),
      /*#__PURE__*/ _jsx(NumberGroup, {
        value: time.minutes,
        label: "MINUTES",
        ...props,
      }),
      showSeparators &&
        /*#__PURE__*/ _jsx(Separator, {
          fontSize: fontSize,
          tint: tint,
          fontFamily: fontFamily,
        }),
      /*#__PURE__*/ _jsx(NumberGroup, {
        value: time.seconds,
        label: "SECONDS",
        ...props,
      }),
    ],
  });
}

function Separator({ fontSize, tint, fontFamily }) {
  return /*#__PURE__*/ _jsx("div", {
    style: {
      ...separatorStyle,
      fontSize: fontSize,
      color: tint,
      fontFamily: `"${fontFamily}", sans-serif`,
    },
    children: ":",
  });
}
function NumberGroup({ value, label, tint, labelColor, fontSize, fontFamily }) {
  const digits = (value < 10 ? `0${value}` : `${value}`).split("");
  return /*#__PURE__*/ _jsxs("div", {
    style: groupContainerStyle,
    children: [
      /*#__PURE__*/ _jsx("div", {
        style: digitsRowStyle,
        children: digits.map((digit, index) =>
          /*#__PURE__*/ _jsx(
            Digit,
            {
              value: digit,
              fontSize: fontSize,
              tint: tint,
              fontFamily: fontFamily,
            },
            index,
          ),
        ),
      }),
      /*#__PURE__*/ _jsx("div", {
        style: {
          ...labelStyle,
          color: labelColor,
          fontFamily: `"${fontFamily}", sans-serif`,
        },
        children: label,
      }),
    ],
  });
}
function Digit({ value, fontSize, tint, fontFamily }) {
  return /*#__PURE__*/ _jsx("div", {
    style: {
      position: "relative",
      height: fontSize * 1.1,
      width: fontSize * 0.65,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
    },
    class: "gold-text",
    children: /*#__PURE__*/ _jsx(AnimatePresence, {
      mode: "popLayout",
      initial: false,
      children: /*#__PURE__*/ _jsx(
        motion.span,
        {
          style: {
            fontSize: fontSize,
            lineHeight: 1,
            color: tint,
            // position: "absolute",
            fontFamily: `"${fontFamily}", sans-serif`,
            fontWeight: "inherit",
          },
          initial: { y: "-60%", opacity: 0, filter: "blur(6px)" },
          animate: { y: "0%", opacity: 1, filter: "blur(0px)" },
          exit: { y: "60%", opacity: 0, filter: "blur(6px)" },
          transition: { type: "spring", stiffness: 450, damping: 35, mass: 1 },
          children: value,
        },
        value,
      ),
    }),
  });
}
/* --- LOGIC --- */ const calculateTimeLeft = (targetDate) => {
  const difference = +new Date(targetDate) - +new Date();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1e3 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1e3 / 60) % 60),
      seconds: Math.floor((difference / 1e3) % 60),
    };
  }
  return null;
};
/* --- STYLES --- */
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "auto",
};
const groupContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const digitsRowStyle = { display: "flex", justifyContent: "center" };
const separatorStyle = {
  fontWeight: "bold",
  lineHeight: 1,
  opacity: 0.2,
  marginTop: "-2px",
};
const labelStyle = {
  fontWeight: 600,
  fontSize: "0.8rem",
  letterSpacing: "1px",
  textTransform: "uppercase",
  marginTop: "6px",
  textAlign: "center",
}; /* --- PROPERTY CONTROLS --- */ // The curated list of Google Fonts

// addPropertyControls(ProCountdown, {
//   targetDate: {
//     type: ControlType.Date,
//     title: "Target Date",
//     defaultValue: new Date(Date.now() + 864e5),
//   },
//   fontFamily: {
//     type: ControlType.Enum,
//     title: "Font",
//     defaultValue: "Inter",
//     options: fontOptions,
//   },
//   fontWeight: {
//     type: ControlType.Enum,
//     title: "Weight",
//     defaultValue: 700,
//     options: [100, 300, 400, 500, 700, 900],
//     optionTitles: ["Thin", "Light", "Regular", "Medium", "Bold", "Black"],
//   },
//   fontSize: {
//     type: ControlType.Number,
//     title: "Size",
//     defaultValue: 60,
//     min: 20,
//     max: 200,
//   },
//   gap: {
//     type: ControlType.Number,
//     title: "Spacing",
//     defaultValue: 30,
//     min: 0,
//     max: 100,
//   },
//   showSeparators: {
//     type: ControlType.Boolean,
//     title: "Separators",
//     defaultValue: false,
//   },
//   tint: {
//     type: ControlType.Color,
//     title: "Text Color",
//     defaultValue: "#FFFFFF",
//   },
//   labelColor: {
//     type: ControlType.Color,
//     title: "Label Color",
//     defaultValue: "#888888",
//   },
// });
