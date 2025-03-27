/**
 * Snaps an angle if needed
 * @param angle - The angle to snap
 * @param snap - The snapping to use
 * @returns The snapped angle
 */
const snapAngle = (angle: number, snap: number = 0): number => {
  const module = angle % snap;

  if (module === 0) {
    return angle;
  }

  const snappingAddition = module > snap / 2 ? snap - module : -1 * module;
  return angle + snappingAddition;
};

export default snapAngle; 