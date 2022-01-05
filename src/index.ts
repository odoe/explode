import Polygon from '@arcgis/core/geometry/Polygon';
import Polyline from '@arcgis/core/geometry/Polyline';
import Point from '@arcgis/core/geometry/Point';
import Multipoint from '@arcgis/core/geometry/Multipoint';

export type Explodable = Polygon | Polyline | Multipoint;
export type Exploded = Polyline | Point;

/**
 * Utility to explode ArcGIS geometries into individual, component geometries.
 * @param geometry Explodable
 * @returns geometries Exploded[]
 */
export function explode(geometry: Explodable): Exploded[] {
  if (geometry.type === 'polygon') {
    return explodePolygon(geometry);
  } else if (geometry.type === 'polyline') {
    return explodePolyline(geometry);
  } else if (geometry.type === 'multipoint') {
    return explodeMultipoint(geometry);
  } else {
    throw new Error(
      'explode: Only geomtries of type Polygon | Polyline | Multipoint can be exploded.'
    );
  }
}

/**
 * Explode Polygon geometries
 * @param geometry Polygon
 * @returns geomgetries Polyline[]
 */
function explodePolygon(geometry: Polygon): Polyline[] {
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

/**
 * Explode Polyline geometries
 * @param geometry Poilyline
 * @returns geomgetries Point[]
 */
function explodePolyline(geometry: Polyline): Point[] {
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

/**
 * Explode Multipoint geometries
 * @param geometry Multipoint
 * @returns geomgetries Point[]
 */
function explodeMultipoint(geometry: Multipoint): Point[] {
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
