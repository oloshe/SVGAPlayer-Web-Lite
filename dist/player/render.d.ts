import { DynamicElements, Video, BitmapsCache, ReplaceElements } from '../types';
declare function render(canvas: HTMLCanvasElement | OffscreenCanvas, bitmapsCache: BitmapsCache, dynamicElements: DynamicElements, replaceElements: ReplaceElements, videoEntity: Video, currentFrame: number): void;
export default render;
