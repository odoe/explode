/// <reference types="cypress" />
import Point from '@arcgis/core/geometry/Point';
import Polygon from '@arcgis/core/geometry/Polygon';
import Polyline from '@arcgis/core/geometry/Polyline';
import Multipoint from '@arcgis/core/geometry/Multipoint';
import { explode } from '../../src/index';

describe('explode geometries', () => {
  it('will explode polygon geometry', () => {
    const polygon = new Polygon({
      rings: [
        [
          [-64.78, 32.3],
          [-66.07, 18.45],
          [-80.21, 25.78],
          [-64.78, 32.3],
        ],
      ],
    });
    const lines = explode(polygon);
    expect(lines.length).to.equal(3);
  });

  it('will explode line geometry', () => {
    const polyline = new Polyline({
      paths: [
        [
          [-64.78, 32.3],
          [-66.07, 18.45],
        ],
        [
          [-66.07, 18.45],
          [-80.21, 25.78],
        ],
        [
          [-80.21, 25.78],
          [-64.78, 32.3],
        ],
      ],
    });
    const points = explode(polyline) as Point[];
    expect(points.length).to.equal(6);
  });

  it('will explode multipoint geometry', () => {
    const multipoint = new Multipoint({
      points: [
        [-64.78, 32.3],
        [-66.07, 18.45],
        [-80.21, 25.78],
      ],
    });
    const points = explode(multipoint) as Point[];
    expect(points.length).to.equal(3);
    for (let i = 0; i < points.length; i++) {
      expect(points[i].x).to.equal(multipoint.points[i][0]);
      expect(points[i].y).to.equal(multipoint.points[i][1]);
    }
  });
});
