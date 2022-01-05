# @odoe/explode

A small utility to explode ArcGIS geometries into individual, component geometries.

* Inspired by the [Explode utility of ArcGIS Desktop](https://desktop.arcgis.com/en/arcmap/latest/manage-data/creating-new-features/separating-a-multipart-feature.htm)
* Polygon -> Polylines
* Polyline -> Points
* Multipoint -> Points

## Usage

```sh
npm install @odoe/explode
```

```js
import { explode } from '@odoe/explode';

// Polygon -> Polylines
const lines = explode(polygon);
// Polyline -> Points
const points = explode(line);
// Multipoint -> Points
const points = explode(multipoint);
```

Works with [`@arcgis/core`](https://www.npmjs.com/package/@arcgis/core) version 4.22 and up.