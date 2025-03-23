import { Tree } from '@nx/devkit';
import { GenerateAngularLibraryGeneratorSchema } from './schema';
export declare function generateAngularLibraryGenerator(tree: Tree, // The file system tree that allows you to manipulate files
options: GenerateAngularLibraryGeneratorSchema): Promise<void>;
export default generateAngularLibraryGenerator;
