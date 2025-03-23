import {
  Tree,
} from '@nx/devkit';
import { GenerateAngularApplicationGeneratorSchema } from './schema';
import { applicationGenerator } from '@nx/angular/generators';

export async function generateAngularApplicationGenerator(
  tree: Tree,
  options: GenerateAngularApplicationGeneratorSchema
) {
  await applicationGenerator(tree, {
    ...options,
    standalone: true,
    style: 'scss',
    directory: `${options.domain}`,
    tags: `domain:${options.domain}, type:app`,
    routing: true
  });

  const indexHtmlPath = `apps/${options.domain}/${options.name}/src/index.html`;
  const appCompHtml = `apps/${options.domain}/${options.name}/src/app/app.component.html`
  const appCompTs = `apps/${options.domain}/${options.name}/src/app/app.component.ts`
  const appCompSpec = `apps/${options.domain}/${options.name}/src/app/app.component.spec.ts`

  tree.delete(`apps/${options.domain}/${options.name}/src/app/nx-welcome.component.ts`);

  if (tree.exists(appCompHtml)) {
    tree.write(
      appCompHtml,
      tree.read(appCompHtml)!.toString().replace('<business-tools-monorepo-nx-welcome></business-tools-monorepo-nx-welcome>', '')
    );
  }
  
  if (tree.exists(appCompTs)) {
    tree.write(
      appCompTs,
      tree.read(appCompTs)!.toString()
        .replace('NxWelcomeComponent, ', '')
        .replace(`import { NxWelcomeComponent } from './nx-welcome.component';`, '')
    );
  }
  
  if (tree.exists(appCompSpec)) {
    tree.write(
      appCompSpec,
      tree.read(appCompSpec)!.toString()
        .replace('NxWelcomeComponent, ', '')
        .replace(`import { NxWelcomeComponent } from './nx-welcome.component';`, '')
    );
  }
  
  if (tree.exists(indexHtmlPath)) {
    tree.write(
      indexHtmlPath,
      tree.read(indexHtmlPath)!.toString().replace('</head>',
        `<link rel="stylesheet" href="https://necolas.github.io/normalize.css/7.0.0/normalize.css"> </head>`)
    );
  }
}

export default generateAngularApplicationGenerator;