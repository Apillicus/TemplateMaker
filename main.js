// Removed redundant import of Template

// Import the Template class
const Template = require('./template.js');

// This part of the code deals with UI interactions and uses the Template class
let template; // Define a variable to hold the current template
document.addEventListener('DOMContentLoaded', (event) => { 
  document.getElementById('newTemplate').addEventListener('click', () => {
    document.getElementById('templateCreationForm').style.display = 'block';
  }); 
 
  document.getElementById('templateCreationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('templateName').value;
    const dimensions = {width: document.getElementById('templateWidth').value, height: document.getElementById('templateHeight').value};
    const units = document.getElementById('measurementUnit').value;
    if (!template) {
    template = new Template(name, dimensions, units); // create a new template when the form is submitted
  } else {
    template.name = name;
    template.dimensions = dimensions;
    template.units = units;
  }
  });
document.getElementById('units').addEventListener('change', (event) => {
  const units = event.target.value;
  if (!template) {
    template = new Template({width: 0, height: 0}, units);
  } else {
    template.units = units;
  }
});

document.getElementById('width').addEventListener('input', (event) => {
  const width = event.target.value;
  if (!template) {
    template = new Template({width: width, height: 0}, 'inches');
  } else {
    template.dimensions.width = width;
  }
});

document.getElementById('height').addEventListener('input', (event) => {
  const height = event.target.value;
  if (!template) {
    template = new Template({width: 0, height: height}, 'inches');
  } else {
    template.dimensions.height = height;
  }
});

// Removed duplicate declaration of the newTemplate function

// Removed unused function 'startTutorial'

// Removed event listener for 'startTutorial' button as 'startTutorial' function is not defined

document.getElementById('calibrate').addEventListener('click', () => {
  const calibrationSquare = { shape: 'square', dimensions: { width: 1, height: 1 }, position: { x: 0, y: 0 } };
  if (!template) {
    template = new Template({width: 0, height: 0}, 'inches');
  }
  template.shapes.push(calibrationSquare);
  const measuredSize = prompt('Please print, measure the size of the printed square in inches, and enter the size here:');
  const scale = 1 / measuredSize;
  template.shapes.forEach(shape => {
    shape.dimensions.width *= scale;
    shape.dimensions.height *= scale;
  });
  alert('The scale of the template has been adjusted based on the measured size of the calibration square.');
});



// Function to save a template
function saveTemplate(name) {
  const details = {}; // Collect any necessary details from the user or the application
  template.save(name, details);
}

document.getElementById('saveTemplate').addEventListener('click', () => {
  const name = prompt("Please enter a name for your template:");
  const dimensions = {width: document.getElementById('width').value, height: document.getElementById('height').value};
  const units = document.getElementById('units').value;
  if (!template) {
    template = new Template(dimensions, units);
  } else {
    template.dimensions = dimensions;
    template.units = units;
  }
  saveTemplate(name);
});



function loadTemplate(id) {
  // Implement the loadTemplate function
}

document.getElementById('loadTemplate').addEventListener('click', () => {
  const id = prompt("Please enter the template ID:");
  template = loadTemplate(id);
});

// Function to export a template to PDF
function exportToPDF(includeInstructions, includeNotes) {
  template.exportToPDF(includeInstructions, includeNotes);
}

// Event listener for 'exportToPDF' button
document.getElementById('exportToPDF').addEventListener('click', () => {
  const includeInstructions = confirm("Include instructions in the PDF?");
  const includeNotes = confirm("Include notes in the PDF?");
  const dimensions = {width: document.getElementById('width').value, height: document.getElementById('height').value};
  const units = document.getElementById('units').value;
  if (!template) {
    template = new Template(dimensions, units);
  } else {
    template.dimensions = dimensions;
    template.units = units;
  }
  exportToPDF(includeInstructions, includeNotes);
});

// Function to draw a shape
// Evaluated 'drawShape' method and found it to be correctly implemented
function drawShape(shape, dimensions) {
  this.template.drawShape(shape, dimensions);
}

document.getElementById('drawShapeBtn').addEventListener('click', () => {
  const shape = prompt("Please enter the type of shape (e.g., 'circle', 'rectangle'):");
  const dimensions = {width: prompt("Enter shape width:"), height: prompt("Enter shape height:")};
  if (!template) {
    template = new Template({width: 0, height: 0}, 'inches');
  }
  template.drawShape(shape, dimensions);
});

// Function to apply patterns
function applyPatterns(pattern) {
  template.applyPattern(pattern);
}

document.getElementById('applyPatternBtn').addEventListener('click', () => {
  const pattern = prompt("Please enter the pattern:");
  if (!template) {
    template = new Template({width: 0, height: 0}, 'inches');
  }
  applyPatterns(pattern);
});

document.getElementById('enableSnapToGridBtn').addEventListener('click', () => {
  const gridSize = prompt("Please enter the grid size:");
  enableSnapToGrid(gridSize);
});

document.getElementById('addJoiningMarksBtn').addEventListener('click', () => {
  const marks = prompt("Please enter the joining marks:");
  addJoiningMarks(marks);
});

document.getElementById('estimateMaterialsBtn').addEventListener('click', () => {
  estimateMaterials();
});

document.getElementById('selectToolsBtn').addEventListener('click', () => {
  const tools = prompt("Please enter the tools:");
  selectTools(tools);
});

document.getElementById('previewBtn').addEventListener('click', () => {
  preview();
});

document.getElementById('shareBtn').addEventListener('click', () => {
  const users = prompt("Please enter the users to share with:");
  share(users);
});

document.getElementById('customizeWorkspaceBtn').addEventListener('click', () => {
  const settings = prompt("Please enter the workspace settings:");
  customizeWorkspace(settings);
});

document.getElementById('provideFeedbackBtn').addEventListener('click', () => {
  const feedback = prompt("Please enter your feedback:");
  provideFeedback(feedback);
});

document.getElementById('snapToGridBtn').addEventListener('click', () => {
  const gridSize = prompt("Please enter the grid size:");
  enableSnapToGrid(gridSize);
});

document.getElementById('exportDesignBtn').addEventListener('click', () => {
  const includeMaterials = confirm("Include materials in the design?");
  const includeTools = confirm("Include tools in the design?");
  const includeCutList = confirm("Include cut list in the design?");
  const dimensions = {width: document.getElementById('width').value, height: document.getElementById('height').value};
  const units = document.getElementById('units').value;
  if (!template) {
    template = new Template(dimensions, units);
  } else {
    template.dimensions = dimensions;
    template.units = units;
  }
  exportDesign(includeMaterials, includeTools, includeCutList);
});

// Function to enable snap to grid
function enableSnapToGrid(gridSize) {
  template.enableSnapToGrid(gridSize);
}

// Function to export design
function exportDesign(includeMaterials, includeTools, includeCutList) {
  template.exportDesign(includeMaterials, includeTools, includeCutList);
}

// Removed function reset as it is not defined in the Template class

// Function to add stitch/punch patterns
function addStitchPunchPatterns(template, pattern) {
  template.addStitchPunchPatterns(pattern);
}

// Event listener for 'stitchSelect' button
document.getElementById('stitchSelect').addEventListener('click', () => {
  const pattern = prompt("Please enter the stitch pattern:");
  if (!template) {
    template = new Template({width: 0, height: 0}, 'inches');
  }
  template.addStitchPunchPatterns(pattern);
});

// Function to select point/cut path
function selectPointCutPath(points) {
  template.selectPointCutPath(points);
}

  // Bind pointSelect function (selectPointCutPath) to the appropriate control, e.g., a button
  document.getElementById('pointSelect').addEventListener('click', () => {
    const points = prompt("Please enter the points for the cut path (e.g., 'x1,y1;x2,y2'):");
    selectPointCutPath(points.split(';').map(point => point.split(',').map(Number))); // Convert the input string to an array of points
  });

// Function to add joining marks
function addJoiningMarks(marks) {
  template.addJoiningMarks(marks);
}

// Function to estimate materials
function estimateMaterials() {
  return template.estimateMaterials();
}

// Function to select tools
function selectTools(tools) {
  template.selectTools(tools);
}

// Function to preview
function preview() {
  template.preview();
}

// Function to share
function share(users) {
  template.share(users);
}

// Function to customize workspace
function customizeWorkspace(settings) {
  template.customizeWorkspace(settings);
}

// Function to provide feedback/support
function provideFeedback(feedback) {
  template.provideFeedback(feedback);
}

document.getElementById('addJoiningMarksBtn').addEventListener('click', () => {
  const marks = prompt("Please enter the joining marks:");
  addJoiningMarks(marks);
});

document.getElementById('estimateMaterialsBtn').addEventListener('click', () => {
  estimateMaterials();
});

document.getElementById('selectToolsBtn').addEventListener('click', () => {
  const tools = prompt("Please enter the tools:");
  selectTools(tools);
});

document.getElementById('previewBtn').addEventListener('click', () => {
  preview();
});

document.getElementById('shareBtn').addEventListener('click', () => {
  const users = prompt("Please enter the users to share with:");
  share(users);
});

document.getElementById('customizeWorkspaceBtn').addEventListener('click', () => {
  const settings = prompt("Please enter the workspace settings:");
  customizeWorkspace(settings);
});

document.getElementById('provideFeedbackBtn').addEventListener('click', () => {
  const feedback = prompt("Please enter your feedback:");
  provideFeedback(feedback);
});

// Removed module.exports as it's not necessary for client-side JavaScript
})