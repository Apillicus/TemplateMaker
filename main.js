const Template = require('./template');

// Function to create a new template
function newTemplate(dimensions, units) {
  let template = new Template(dimensions, units);
  return template;
}

// Function to start a tutorial
function startTutorial() {
  // Implement functionality
}

// Function to save a template
function saveTemplate(template, name, details) {
  template.save(name, details);
}

// Function to load a template
function loadTemplate(id) {
  let template = Template.load(id);
  return template;
}

// Function to export a template to PDF
function exportToPDF(template, includeInstructions, includeNotes) {
  template.exportToPDF(includeInstructions, includeNotes);
}

// Function to draw a shape
function drawShape(template, shape, dimensions) {
  template.drawShape(shape, dimensions);
}

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

// Function to select point/cut path
function selectPointCutPath(template, points) {
  template.selectPointCutPath(points);
}

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
