export const clamp = (value, min, max) =>
  value >= max ? max : value <= min ? min : value;
