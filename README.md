checkboxtree
============

Checkboxes tree with check/uncheck parent and child elements. Realisation of the standard approach of resolving problem 
with parent and child checkboxes.

1) Create checkboxes tree;<br/>
2) Each checkbox must has global class. For example: "actionCheckboxes". This help you to process click by checkboxes;<br/>
3) Each checkbox must has attribute "id" with unique id;<br/>
4) Child checkboxes must have class like "parent-section_" + unique id of the parent element.<br/>
5) Include jquery.js;<br/>
6) Include checkboxtree.js;<br/>
7) Include $('.actionCheckboxes').on('click', clickByCheckbox) in the document.ready function;<br/>
8) That`s all! Enjoy!

P.S.: CheckboxTree will work in one-level list too! Try it!
