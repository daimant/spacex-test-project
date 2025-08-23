export interface SpaceObject {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  type: 'star' | 'planet' | 'asteroid'
  rotation: number
  rotationSpeed: number
}
