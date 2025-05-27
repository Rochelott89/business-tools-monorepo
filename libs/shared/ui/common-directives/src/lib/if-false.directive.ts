import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[btLibsUiIfFalse]',
  standalone: true,
})
export class IfFalseDirective {
  // Inject the template that this structural directive is attached to
  private templateRef = inject(TemplateRef);
  
  // Inject the container where the template will be rendered
  private viewContainer = inject(ViewContainerRef);

  // Track whether the template has already been added to the view
  private embeddedTemplateAdded = false;

  /**
   * Structural directive input: condition to evaluate.
   * - If the condition is FALSE, the template will be rendered (added to the DOM).
   * - If the condition is TRUE, the template will be removed (if it was previously added).
   */
  @Input() set btLibsUiIfFalse(condition: boolean) {

    // Only render the template if condition is FALSE and it's not already rendered
    if (!condition && !this.embeddedTemplateAdded) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.embeddedTemplateAdded = true;
    }
    // If condition is TRUE and the template was added, remove it from the view
    else if (condition && this.embeddedTemplateAdded) {
      this.viewContainer.clear();
      this.embeddedTemplateAdded = false;
    }
  }
}
