import Point from '@arcgis/core/geometry/Point';
import Multipoint from '@arcgis/core/geometry/Multipoint';

/**
 * Explode Multipoint geometries
 * @param geometry Multipoint
 * @returns geomgetries Point[]
 */
export function explodeMultipoint(geometry: Multipoint): Point[] {
  const geometries: Point[] = [];
  for (let i = 0; i < geometry.points?.length; i++) {
    const points = geometry.points[i];
    const point = new Point({
      x: points[0],
      y: points[1],
    });
    geometries.push(point);
  }
  return geometries;
}
