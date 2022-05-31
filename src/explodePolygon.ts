import Polygon from '@arcgis/core/geometry/Polygon';
import Polyline from '@arcgis/core/geometry/Polyline';

/**
 * Explode Polygon geometries
 * @param geometry Polygon
 * @returns geomgetries Polyline[]
 */
export function explodePolygon(geometry: Polygon): Polyline[] {
  const geometries: Polyline[] = [];
  for (let i = 0; i < geometry.rings?.length; i++) {
    const rings = geometry.rings[i];
    for (let j = 0; j < rings?.length; j++) {
      const start = rings[j];
      const end = rings[j + 1];
      if (start && end) {
        const line = new Polyline({
          paths: [[start, end]],
        });
        geometries.push(line);
      }
    }
  }
  return geometries;
}
