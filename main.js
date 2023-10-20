//it says that require is not defined. 
const Template = require('./template');
const fs = require('fs');
const PDFDocument = require('pdfkit');

class Template {
  constructor(dimensions, units) {
    this.dimensions = dimensions;
    this.units = units;
    this.shapes = [];
    this.patterns = [];
    this.gridSize = 0;
    this.tools = [];
    this.settings = {};
  }

  save(name, details) {
    fs.writeFileSync(`./templates/${name}.json`, JSON.stringify({ ...details, shapes: this.shapes, patterns: this.patterns, gridSize: this.gridSize, tools: this.tools, settings: this.settings }));
  }

  static load(id) {
    const data = fs.readFileSync(`./templates/${id}.json`);
    return new Template(JSON.parse(data));
  }

  exportToPDF(includeInstructions, includeNotes) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(`./exports/${this.name}.pdf`));
    this.shapes.forEach(shape => shape.draw(doc));
    if (includeInstructions) doc.text(this.instructions);
    if (includeNotes) doc.text(this.notes);
    doc.end();
  }

  drawShape(shape, dimensions) {
    this.shapes.push({ shape, dimensions });
  }

  applyPattern(pattern) {
    this.patterns.push(pattern);
  }

  enableSnapToGrid(gridSize) {
    this.gridSize = gridSize;
  }

  exportDesign(includeMaterials, includeTools, includeCutList) {
    const design = { shapes: this.shapes, patterns: this.patterns };
    if (includeMaterials) design.materials = this.materials;
    if (includeTools) design.tools = this.tools;
    if (includeCutList) design.cutList = this.cutList;
    fs.writeFileSync(`./exports/${this.name}.json`, JSON.stringify(design));
  }

  addStitchPunchPatterns(pattern) {
    this.patterns.push(pattern);
  }

  selectPointCutPath(points) {
    this.cutList = points;
  }

  addJoiningMarks(marks) {
    this.joiningMarks = marks;
  }

  estimateMaterials() {
    // Simple example: summing the areas of the shapes
    const totalArea = this.shapes.reduce((sum, { shape, dimensions }) => {
      // Example: Assuming the shape is a rectangle
      if (shape === 'rectangle') {
        return sum + dimensions.width * dimensions.height;
      }
      // Other shape calculations...
      return sum;
    }, 0);
  
    // Assuming a simple material estimation based on total area
    this.materials = { 'totalArea': totalArea };
  }

  selectTools(tools) {
    this.tools = tools;
  }

  preview() {
    // This method would typically be implemented on the client-side
    // Here's a pseudo-implementation
    console.log("Rendering a preview of the shapes and patterns...");
  }
  

  share(users) {
    // Pseudo-code, this heavily depends on your application's infrastructure
    users.forEach(user => {
      console.log(`Sharing design with ${user}...`);
      // Add database entry, send emails, or other sharing logic...
    });
  }
  

  customizeWorkspace(settings) {
    this.settings = settings;
  }

  provideFeedback(feedback) {
    fs.writeFileSync(`./feedback/${Date.now()}.txt`, feedback);
  }

}

module.exports = Template;

// This part of the code deals with UI interactions and uses the Template class
document.addEventListener('DOMContentLoaded', (event) => {
  const Template = require('./template'); 
 
    let template; });

    //This isn't working for some reason says its null
  // document.getElementById('newTemplate').addEventListener('click', function() {
  //   let width = document.getElementById('width');
  //   let height = document.getElementById('height');

  //   if(width !== null && width.value === ""){
  //     //this is a check to see if they put a value in the width box.
  //     //will enter this if statemtn should the width value not be entered, essentially error handling.
  //     console.log('no value entered');
  //   }

  //   let dimensions = {width: document.getElementById('width').value, height: document.getElementById('height').value};
  //   const units = document.getElementById('units').value;
  //   template = newTemplate(dimensions, units); // create a new template when the button is clicked
  // });

function createNewTemplate() {
    let width = document.getElementById('width');
    let height = document.getElementById('height');

    if(width != null && width.value == ""){
      //this is a check to see if they put a value in the width box.
      //will enter this if statemtn should the width value not be entered, essentially error handling.
      console.log('no value entered');
      return;
    }

    if(height != null && height.value == ""){
      //this is a check to see if they put a value in the width box.
      //will enter this if statemtn should the width value not be entered, essentially error handling.
      console.log('no value entered');
      return;
    }
  

    let dimensions = {width: document.getElementById('width').value, height: document.getElementById('height').value};
    const units = document.getElementById('units').value;
    template = newTemplate(dimensions, units); // create a new template when the button is clicked
  };


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


//this can be done with the onclick event that is default with buttons. if it were a div then we would do it this way.
// document.getElementById('calibrate').addEventListener('click', function() {
//   calibrate();
// });

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
}
