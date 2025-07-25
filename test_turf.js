import * as turf from "@turf/turf";
// 3D lines (with Z coordinates)
const line1 = turf.lineString([
  [0, 0, 10], // [x, y, z]
  [2, 2, 20],
]);

const line2 = turf.lineString([
  [0, 2, 15],
  [2, 0, 25],
]);

// Turf will ignore Z and find 2D intersection
const intersection = turf.lineIntersect(line1, line2);

if (intersection.features.length > 0) {
  console.log(
    "2D Intersection point:",
    intersection.features[0].geometry.coordinates
  );
  // Note: This will only give you [x, y], not the Z coordinate
}

var line = turf.lineString([
  [-77.031669, 38.878605],
  [-77.029609, 38.881946],
  [-77.020339, 38.884084],
  [-77.025661, 38.885821],
  [-77.021884, 38.889563],
  [-77.019824, 38.892368],
]);
var pt = turf.point([-77.027076, 38.884017]);

var snapped = turf.nearestPointOnLine(line, pt, { units: "miles" });
console.log(snapped);
