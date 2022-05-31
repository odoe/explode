import Polyline from '@arcgis/core/geometry/Polyline';
import Point from '@arcgis/core/geometry/Point';

/**
 * Explode Polyline geometries
 * @param geometry Poilyline
 * @returns geomgetries Point[]
 */
export function explodePolyline(geometry: Polyline): Point[] {
  const geometries: Point[] = [];
  for (let i = 0; i < geometry.paths?.length; i++) {
    const paths = geometry.paths[i];
    for (let x = 0; x < paths?.length; x++) {
      const path = paths[x];
      if (path) {
        const point = new Point({
          x: path[0],
          y: path[1],
        });
        geometries.push(point);
      }
    }
  }
  return geometries;
}
