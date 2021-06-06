import { Font } from "@react-pdf/renderer";
var path = require("path");

Font.register({
  family: "Raleway",
  fonts: [
    {
      src: path.join(__dirname, "../../Raleway/static/Raleway-Regular.ttf"),
      fontWeight: 400,
    },
    {
      src: path.join(__dirname, "../../Raleway/static/Raleway-Bold.ttf"),
      fontWeight: 700,
    },
    {
      src: path.join(__dirname, "../../Raleway/static/Raleway-Black.ttf"),
      fontWeight: 900,
    },
  ],
});
