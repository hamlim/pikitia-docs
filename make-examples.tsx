/// <reference types="bun" />
import { generateImage } from "pikitia";

let pngBuffer = await generateImage(
  <div
    style={{
      display: "flex",
      padding: "40px",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      fontSize: 40,
      flexDirection: "column",
      color: "black",
      backgroundColor: "white",
      textAlign: "center",
      // Inter regular font is loaded by default
      fontFamily: "Inter",
    }}
  >
    <h1>Hello World 👋</h1>
    <p
      style={{
        textDecoration: "underline",
        color: "dodgerblue",
      }}
    >
      Other styles work too!
    </p>
  </div>,
  {
    width: 1200,
    height: 600,
    // Other options are supported here too
    // Check out Satori docs for more details!
  },
);

// write the file
await Bun.write("./public/simple-example.png", pngBuffer);

// og image for docs site

let geistMonoBuffer = await Bun.file(
  "./public/geist-mono-regular.otf",
).arrayBuffer();

let geistMono = {
  name: "GeistMono",
  data: geistMonoBuffer,
  weight: 400,
  style: "normal",
} as const;

let ogBuffer = await generateImage(
  <div
    style={{
      display: "flex",
      padding: "40px",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      flexDirection: "column",
      color: "black",
      backgroundColor: "white",
      textAlign: "center",
      // Inter regular font is loaded by default
      fontFamily: "Inter",
      fontSize: 40,
    }}
  >
    <h1 style={{ fontSize: 100, color: "dodgerblue" }}>Pikitia</h1>
    <p style={{ fontFamily: "GeistMono" }}>`bun i pikitia`</p>
    <p
      style={{
        color: "#4b5563",
      }}
    >
      A minimal React based image generator!
    </p>
  </div>,
  {
    width: 1200,
    height: 600,
    fonts: [geistMono],
  },
);

await Bun.write("./public/og.png", ogBuffer);
