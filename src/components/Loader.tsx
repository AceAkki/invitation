import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Circles
        height="100"
        width="100"
        color="#fee499"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </section>
  );
}
