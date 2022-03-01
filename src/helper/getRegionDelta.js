export function getRegionDelta(root, points) {
  // points should be an array of { latitude: X, longitude: Y }
  let maxLat, maxLng;

  // init first point
  maxLat = 0.043;
  maxLng = 0.034;

  // calculate rect
  points.map((point) => {
    maxLat = Math.max(maxLat, Math.abs(root.latitude - point.latitude));
    maxLng = Math.max(maxLng, Math.abs(root.longitude - point.longitude));
  });

  return {
    latitude: root.latitude,
    longitude: root.longitude,
    latitudeDelta: maxLat * 2.1,
    longitudeDelta: maxLng * 2.1
  };
}