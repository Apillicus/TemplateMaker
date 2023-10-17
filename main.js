const Template = require('./template');

// This part of the code deals with UI interactions and uses the Template class
document.addEventListener('DOMContentLoaded', (event) => { 
 
  document.getElementById('templateCreationForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('templateName').value;
    const dimensions = {width: document.getElementById('templateWidth').value, height: document.getElementById('templateHeight').value};
    const units = document.getElementById('measurementUnit').value;
    if (!this.template) {
    this.template = new Template(name, dimensions, units); // create a new template when the form is submitted
  } else {
    this.template.name = name;
    this.template.dimensions = dimensions;
    this.template.units = units;
  }
  });
document.getElementById('units').addEventListener('change', () => {
  const units = this.value;
  this.template.units = units;
});

document.getElementById('width').addEventListener('input', () => {
  const width = this.value;
  this.template.dimensions.width = width;
});

document.getElementById('height').addEventListener('input', () => {
  const height = this.value;
  this.template.dimensions.height = height;
});

document.getElementById('newTemplate').addEventListener('click', () => {
  const dimensions = {width: document.getElementById('width').value, height: document.getElementById('height').value};
  const units = document.getElementById('units').value;
  if (!this.template) {
    this.template = new Template(dimensions, units);
  } else {
    this.template.dimensions = dimensions;
    this.template.units = units;
  }
});

// Function to start an interactive tutorial
function startTutorial(template) {
  this.template = template;
  let step = 0;
  const steps = [
    {selector: '#newTemplate', message: 'Click here to create a new template.'},
    {selector: '#saveTemplate', message: 'Click here to save your current template.'},
    {selector: '#loadTemplate', message: 'Click here to load a previously saved template.'},
    {selector: '#exportToPDF', message: 'Click here to export your template as a PDF.'},
    // ... other steps for other elements ...
  ];

  let tutorialModal = document.querySelector('.tutorial-modal');
  if (!tutorialModal) {
    tutorialModal = document.createElement('div');
    tutorialModal.className = 'tutorial-modal';
    document.body.appendChild(tutorialModal);
  }

  function showStep() {
    const currentStep = steps[step];
    const element = document.querySelector(currentStep.selector);
    element.classList.add('highlight'); // Assume 'highlight' class highlights the element

    tutorialModal.innerHTML = `<p>${currentStep.message}</p><button onclick="nextStep()">Next</button>`;
  }

  function nextStep() {
    const currentStep = steps[step];
    const element = document.querySelector(currentStep.selector);
    element.classList.remove('highlight');

    step++;
    if (step >= steps.length) {
      tutorialModal.remove();
    } else {
      showStep();
    }
  }

  showStep();
}

document.getElementById('startTutorial').addEventListener('click', () => {
  startTutorial();
});

document.getElementById('calibrate').addEventListener('click', () => {
  const calibrationSquare = { shape: 'square', dimensions: { width: 1, height: 1 }, position: { x: 0, y: 0 } };
  this.template.shapes.push(calibrationSquare);
  const measuredSize = prompt('Please print, measure the size of the printed square in inches, and enter the size here:');
  const scale = 1 / measuredSize;
  this.template.shapes.forEach(shape => {
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
  if (!this.template) {
    this.template = new Template(dimensions, units);
  } else {
    this.template.dimensions = dimensions;
    this.template.units = units;
  }
  saveTemplate(name);
});



function loadTemplate(id) {
  // Implement the loadTemplate function
}

document.getElementById('loadTemplate').addEventListener('click', () => {
  const id = prompt("Please enter the template ID:");
  loadTemplate(id);
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
  if (!this.template) {
    this.template = new Template(dimensions, units);
  } else {
    this.template.dimensions = dimensions;
    this.template.units = units;
  }
  exportToPDF(includeInstructions, includeNotes);
});

// Function to draw a shape
function drawShape(shape, dimensions) {
  template.drawShape(shape, dimensions);
}

document.getElementById('drawShapeBtn').addEventListener('click', () => {
  const shape = prompt("Please enter the type of shape (e.g., 'circle', 'rectangle'):");
  const dimensions = {width: prompt("Enter shape width:"), height: prompt("Enter shape height:")};
  const templateDimensions = {width: document.getElementById('width').value, height: document.getElementById('height').value};
  const units = document.getElementById('units').value;
  updateTemplate(undefined, templateDimensions, units);
  drawShape(shape, dimensions);
});

// Function to apply patterns
function applyPatterns(pattern) {
  template.applyPattern(pattern);
}

document.getElementById('applyPatternBtn').addEventListener('click', () => {
  const pattern = prompt("Please enter the pattern:");
  applyPatterns(pattern);
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
  if (!this.template) {
    this.template = new Template(dimensions, units);
  } else {
    this.template.dimensions = dimensions;
    this.template.units = units;
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
  this.template.addStitchPunchPatterns(pattern);
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

module.exports = {
  startTutorial,
  loadTemplate,
  drawShape,
  applyPatterns,
  enableSnapToGrid,
  exportDesign,
  selectPointCutPath,
  addJoiningMarks,
  estimateMaterials,
  selectTools,
  preview,
  share,
  customizeWorkspace,
  provideFeedback,
  saveTemplate,
  exportToPDF,
  updateTemplate
};})