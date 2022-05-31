import type Polygon from '@arcgis/core/geometry/Polygon';
import type Polyline from '@arcgis/core/geometry/Polyline';
import type Point from '@arcgis/core/geometry/Point';
import type Multipoint from '@arcgis/core/geometry/Multipoint';

import { explodePolygon } from './explodePolygon';
import { explodePolyline } from './explodePolyline';
import { explodeMultipoint } from './explodeMultipoint';

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
