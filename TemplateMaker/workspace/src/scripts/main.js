import { Canvas } from './canvas.js';
import { Shape } from './shapes.js';
import { ZoomPan } from './zoom_pan.js';
import { GridSystem } from './grid_system.js';
import { ExportPrint } from './export_print.js';
import { Calibration } from './calibration.js';
import { Units } from './units.js';
import { StitchPunch } from './stitch_punch.js';
import { Pattern } from './pattern.js';
import { EdgeDetection } from './edge_detection.js';
import { VisualIndicators } from './visual_indicators.js';
import { Tutorial } from './tutorial.js';

// Initialize all modules
const canvas = new Canvas();
const shape = new Shape();
const zoomPan = new ZoomPan();
const gridSystem = new GridSystem();
const exportPrint = new ExportPrint();
const calibration = new Calibration();
const units = new Units();
const stitchPunch = new StitchPunch();
const pattern = new Pattern();
const edgeDetection = new EdgeDetection();
const visualIndicators = new VisualIndicators();
const tutorial = new Tutorial();

// Start the application
canvas.init();
shape.init();
zoomPan.init();
gridSystem.init();
exportPrint.init();
calibration.init();
units.init();
stitchPunch.init();
pattern.init();
edgeDetection.init();
visualIndicators.init();
tutorial.init();
