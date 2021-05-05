import Listeners from './Listeners.js';
import Renderer from './Renderer.js';

Listeners.onCreate(() => Renderer.create());
/* Listeners.onGeometryChange((geometry) => Renderer.changeGeometry(geometry)); */
/* Listeners.onScale((scale) => Renderer.changeScale(scale)); */