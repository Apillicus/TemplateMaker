const Template = require('./template');

// Function to create a new template
function newTemplate(dimensions, units) {
  let template = new Template(dimensions, units);
  return template;
}
document.getElementById('newTemplate').addEventListener('click', function() {
  const dimensions = {width: document.getElementById('width').value, height: document.getElementById('height').value};
  const units = document.getElementById('units').value;
  newTemplate(dimensions, units);
});

// Function to start an interactive tutorial
function startTutorial() {
  let step = 0;
  const steps = [
    {selector: '#newTemplate', message: 'Click here to create a new template.'},
    {selector: '#saveTemplate', message: 'Click here to save your current template.'},
    {selector: '#loadTemplate', message: 'Click here to load a previously saved template.'},
    {selector: '#exportToPDF', message: 'Click here to export your template as a PDF.'},
    // ... other steps for other elements ...
  ];

  const tutorialModal = document.createElement('div');
  tutorialModal.className = 'tutorial-modal';
  document.body.appendChild(tutorialModal);

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

document.getElementById('startTutorial').addEventListener('click', function() {
  startTutorial();
});

document.getElementById('calibrate').addEventListener('click', function() {
  calibrate();
});

// Function to add calibration square
function calibrate() {
  // Assuming 'template' is a global or otherwise accessible variable
  const calibrationSquare = { shape: 'square', dimensions: { width: 1, height: 1 }, position: { x: 0, y: 0 } }; // Positioned outside the normal template area
  template.shapes.push(calibrationSquare);
  alert('A 1-inch calibration square has been added outside your template area. Please print and measure to ensure correct sizing.');
}

// Function to save a template
function saveTemplate(template, name, details) {
  template.save(name, details);
}

document.getElementById('saveTemplate').addEventListener('click', function() {
  const name = prompt("Please enter a name for your template:");
  const details = {}; // Collect any necessary details from the user or the application
  saveTemplate(template, name, details); // Assuming 'template' is accessible from this scope
});

// Function to load a template
function loadTemplate(id) {
  let template = Template.load(id);
  return template;
}

document.getElementById('loadTemplate').addEventListener('click', function() {
  const id = prompt("Please enter the template ID:");
  loadTemplate(id);
});

// Function to export a template to PDF
function exportToPDF(template, includeInstructions, includeNotes) {
  template.exportToPDF(includeInstructions, includeNotes);
}

document.getElementById('exportToPDF').addEventListener('click', function() {
  const includeInstructions = confirm("Include instructions in the PDF?");
  const includeNotes = confirm("Include notes in the PDF?");
  exportToPDF(template, includeInstructions, includeNotes); // Assuming 'template' is accessible from this scope
});

// Function to draw a shape
function drawShape(template, shape, dimensions) {
  template.drawShape(shape, dimensions);
}

document.getElementById('drawShapeBtn').addEventListener('click', function() {
  const shape = prompt("Please enter the type of shape (e.g., 'circle', 'rectangle'):");
  const dimensions = {width: prompt("Enter shape width:"), height: prompt("Enter shape height:")};
  drawShape(template, shape, dimensions); // Assuming 'template' is accessible from this scope
});

// Function to apply patterns
function applyPatterns(template, pattern) {
  template.applyPattern(pattern);
}

// Function to enable snap to grid
function enableSnapToGrid(template, gridSize) {
  template.enableSnapToGrid(gridSize);
}

// Function to export design
function exportDesign(template, includeMaterials, includeTools, includeCutList) {
  template.exportDesign(includeMaterials, includeTools, includeCutList);
}

// Function to reset all changes
function reset(template) {
  template.reset();
}

// Function to add stitch/punch patterns
function addStitchPunchPatterns(template, pattern) {
  template.addStitchPunchPatterns(pattern);
}

  // Bind stitchSelect function (addStitchPunchPatterns) to the appropriate control, e.g., a button
  document.getElementById('stitchSelect').addEventListener('click', function() {
    const pattern = prompt("Please enter the stitch pattern:");
    addStitchPunchPatterns(template, pattern); // Assuming 'template' is accessible from this scope
  });

// Function to select point/cut path
function selectPointCutPath(template, points) {
  template.selectPointCutPath(points);
}

  // Bind pointSelect function (selectPointCutPath) to the appropriate control, e.g., a button
  document.getElementById('pointSelect').addEventListener('click', function() {
    const points = prompt("Please enter the points for the cut path (e.g., 'x1,y1;x2,y2'):");
    selectPointCutPath(template, points.split(';').map(point => point.split(',').map(Number))); // Convert the input string to an array of points
  });
  
// Function to add joining marks
function addJoiningMarks(template, marks) {
  template.addJoiningMarks(marks);
}

// Function to estimate materials
function estimateMaterials(template) {
  return template.estimateMaterials();
}

// Function to select tools
function selectTools(template, tools) {
  template.selectTools(tools);
}

// Function to preview
function preview(template) {
  template.preview();
}

// Function to share
function share(template, users) {
  template.share(users);
}

// Function to customize workspace
function customizeWorkspace(template, settings) {
  template.customizeWorkspace(settings);
}

// Function to provide feedback/support
function provideFeedback(template, feedback) {
  template.provideFeedback(feedback);
}

module.exports = {
  newTemplate,
  startTutorial,
  saveTemplate,
  loadTemplate,
  exportToPDF,
  drawShape,
  applyPatterns,
  enableSnapToGrid,
  exportDesign,
  reset,
  addStitchPunchPatterns,
  selectPointCutPath,
  addJoiningMarks,
  estimateMaterials,
  selectTools,
  preview,
  share,
  customizeWorkspace,
  provideFeedback
};
