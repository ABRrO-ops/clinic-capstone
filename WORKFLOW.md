## Workflow Comparison (FE-03)

### Exactness
The first workflow, generated from a vague prompt (“Create a settings form in React”), produced no usable code. The file remained empty, which demonstrates that a non‑specific request cannot lead to a functional implementation. In contrast, the second workflow, based on a precise prompt with clear requirements, delivered a complete React component using react‑hook‑form and zod. It included validation rules for email, password, and confirmation, and all unit tests passed successfully. This shows that precision in prompting directly impacts the accuracy of the output.

### Accessibility
The vague branch contained no accessibility features because it had no code at all. The precise branch, however, implemented accessible error messages with aria‑invalid and role="alert", and ensured that each input field had a label. This makes the form usable for screen readers and aligns with best practices in frontend engineering.

### Edge Cases
With the vague workflow, edge cases could not be tested. The precise workflow covered multiple scenarios: invalid email formats, weak passwords, mismatched confirmation fields, and successful submissions. Each case was validated through automated tests, ensuring robustness and reliability.

### Effort of Review
The vague workflow required no review effort, but only because it produced nothing usable. The precise workflow required more setup time (dependencies, schema, tests), but the review effort was reduced thanks to automated validation. Although the second branch felt slower to configure, it ultimately saved time by producing a reliable and testable component.

### Errors from AI
The vague workflow highlighted a major limitation: the AI did not generate any code when given insufficient context. In the precise workflow, the AI produced correct code, but introduced heavy dependencies and Babel warnings during installation. These issues were manageable, but they illustrate that even with precise prompts, AI output must be reviewed carefully.

### Conclusion
The comparison demonstrates that vague prompts lead to incomplete or unusable results, while precise prompts with constraints, examples, and verification steps produce accurate, accessible, and testable code. Although the precise workflow required more effort initially, it delivered a functional component that met project standards. This exercise clearly shows that directing the AI with detailed specifications is essential for achieving professional results.

## Bonus Comparison

Claude produced complete code with validation and tests, similar to Cursor.  
Cursor generated a production-ready component integrated in Vite, with all tests passing.  
v0 created the files and configs, but the preview was blank until the component was manually linked to the main page. Once integrated, the form rendered correctly.  
This comparison shows that Cursor and Claude deliver directly usable code, while v0 focuses more on scaffolding and requires additional steps to achieve a working UI.
