"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAngularLibraryGenerator = generateAngularLibraryGenerator;
const tslib_1 = require("tslib");
const generators_1 = require("@nx/angular/generators"); // This is the Nx generator for creating Angular libraries
// Define the types of libraries we are supporting (used when 'all' type is selected)
const TYPES = ['ui', 'data-access', 'feature', 'util'];
// The main generator function to create Angular libraries
function generateAngularLibraryGenerator(tree, // The file system tree that allows you to manipulate files
options // Options provided by the user when running the generator
) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // If the 'type' option is 'all', generate libraries for all types listed in the TYPES array
        if (options.type === 'all') {
            // Loop through each type and generate the library for that type
            for (const type of TYPES) {
                yield generateLibrary(tree, options, type); // Call the helper function to generate each library
            }
        }
        else {
            // If 'type' is not 'all', generate only the library for the specific type the user selected
            yield generateLibrary(tree, options, options.type);
        }
        // After the library is generated, clean up the initial files
        // The path to the generated library's source files
        const path = `libs/${options.domain}/${options.type}/${options.name}/src`;
        // Remove the initial component that Nx generates (we don’t want it)
        tree.delete(`${path}/lib/${options.name}`);
        // Clear the contents of the index.ts file to avoid exporting anything by default
        tree.write(`${path}/index.ts`, ''); // Write an empty string to the index.ts file
    });
}
// Helper function to generate a library for a specific type
function generateLibrary(tree, // The file system tree to manipulate files
options, // The options object containing the user inputs
type // The type of the library to generate (e.g., 'ui', 'data-access')
) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // Call Nx's libraryGenerator to actually generate the library based on the options
        yield (0, generators_1.libraryGenerator)(tree, {
            name: options.name, // The name of the library (provided by the user)
            simpleName: true, // Use a simple name for the library
            standalone: true, // Make the library standalone (independent)
            buildable: true, // Make the library buildable
            prefix: `bt-libs-${type}`, // Prefix for the library's selectors, customized by type
            style: 'scss', // Set the style format to SCSS (can be adjusted based on the user’s preference)
            changeDetection: 'OnPush', // Use OnPush change detection strategy for performance
            directory: `libs/${options.domain}/${type}`, // The directory structure to place the library under
            tags: `domain:${options.domain}, type:${type}`, // Tags to categorize the library
            importPath: `@bt-libs/${options.domain}/${type}/${options.name}`, // Import path for the library
        });
    });
}
// Export the generator function as the default export so it can be used by Nx
exports.default = generateAngularLibraryGenerator;
//# sourceMappingURL=generator.js.map