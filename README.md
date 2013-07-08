checkboxtree
============

Checkboxes tree with check/uncheck parent and child elements. Realisation of the standard approach of resolving problem 
with parent and child checkboxes.

1) Create checkboxes tree;
2) Each checkbox must has global class. For example: "actionCheckboxes". This help you to process click by checkboxes;
3) Each checkbox must has attribute "id" with unique id;
4) Child checkboxes must have class like "parent-section_" + unique id of the parent element.
5) Include jquery.js;
6) Include checkboxtree.js;
7) Include $('.actionCheckboxes').on('click', clickByCheckbox) in the document.ready function;
8) That`s all! Enjoy!
