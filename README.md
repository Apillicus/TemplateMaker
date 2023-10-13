1. Current Functions:
In DesignManager Class:

    constructor(): Initializes a new instance with various properties.
    reset(): Resets the instance properties.
    drawShape(): Adds a new shape to the shapes array.
    applyPattern(): Adds a new pattern to the patterns array.
    enableSnapToGrid(): Sets the gridSize for snap-to-grid functionality.
    addStitchPunchPatterns(): Adds a stitch punch pattern to the patterns array.
    selectPointCutPath(): Sets the cutList with points for cutting.
    addJoiningMarks(): Sets the joiningMarks.
    estimateMaterials(): Calculates the total material area required.
    selectTools(): Sets the tools array.
    preview(): Placeholder for a function to preview the design.
    share(): Placeholder for a function to share the design with others.
    customizeWorkspace(): Sets the workspace settings.
    undoAction(): Allows users to undo the last action.
    redoAction(): Allows users to redo an action that was undone.
    importDesign(): Allows users to import a design from an external file.
    adjustColorScheme(): Lets users change the color scheme of their design or workspace.

In Global Script:

    newTemplate(): Creates a new Template instance.
    startTutorial(): Initiates an interactive tutorial.
    calibrate(): Adds a calibration square to the template.
    saveTemplate(): Saves the current template.
    loadTemplate(): Loads an existing template.
    exportToPDF(): Exports the current template to PDF.
    drawShape(): Draws a new shape on the template.
    applyPatterns(): Applies selected patterns to the template.
    enableSnapToGrid(): Enables snap-to-grid functionality.
    exportDesign(): Exports the current design.
    reset(): Resets the current changes.
    addStitchPunchPatterns(): Adds new stitch/punch patterns to the template.
    selectPointCutPath(): Defines a cutting path on the template.
    addJoiningMarks(): Adds joining marks to the template.
    estimateMaterials(): Estimates the materials needed for the current design.
    selectTools(): Selects tools for the current project.
    preview(): Previews the current design.
    share(): Shares the current design.
    customizeWorkspace(): Customizes the workspace settings.
    provideFeedback(): Sends feedback.

2. Additional Functions (Suggestions):

    collaborate(): Enable real-time collaboration with other users.

3. User Stories:

    As a user, I want to create a new template with specific dimensions and units so that I can start a new design project.
    As a user, I want to draw different shapes on my template so that I can create a design outline.
    As a user, I want to apply patterns to my shapes so that my design is intricate and detailed.
    As a user, I want to enable snap-to-grid so that I can make precise placements and alignments.
    As a user, I want to add stitch or punch patterns to my design so that I can prepare it for specific production techniques.
    As a user, I want to save, load, and export my designs so that I can easily manage multiple projects.
    As a user, I want to preview my design so that I can review and ensure it meets my expectations before finalizing.
    As a user, I want to share my designs with others so that I can receive feedback or collaborate.
    As a new user, I want to have an interactive tutorial so that I can understand how to use the application efficiently.

4. Overall Plan for the App:

    Development Phase:
        Select the tech stack (front-end framework, back-end language & framework, database, etc.).
        Set up version control (e.g., Git) and project management tools (e.g., Jira).
        Design UI/UX and finalize the wireframes.
        Implement front-end and back-end functionalities.
        Test (unit tests, integration tests, E2E tests).

    Beta Phase:
        Deploy the app to a staging environment.
        Perform beta testing with a select group of users.
        Collect feedback and make necessary adjustments.

    Launch Phase:
        Deploy the app to the production environment.
        Plan a launch strategy (marketing, promotions, etc.).
        Monitor app performance and user feedback.

    Post-Launch Phase:
        Regularly update the app based on user feedback and emerging trends.
        Ensure continuous monitoring, security checks, and performance optimizations.
        Possibly expand features, such as social sharing, community galleries, or an online marketplace.

5. To-Do List:

    Finalize the app's feature list.
    Set up a development environment.
    Choose a suitable back-end programming language and framework.
    Create a database schema.
    Implement server-side logic for handling user requests.
    Design and implement a
