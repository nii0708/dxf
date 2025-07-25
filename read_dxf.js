const fs = require("fs");
const DxfParser = require("dxf-parser");

const parser = new DxfParser();
const filePath = "dgn_pit.dxf";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading DXF file:", err);
    return;
  }

  try {
    const dxf = parser.parseSync(data);
    console.log("Parsed DXF data:", dxf);
  } catch (parseErr) {
    console.error("Error parsing DXF file:", parseErr.message);
  }
});
