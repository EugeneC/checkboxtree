/**
 * @author Eugene Chetverikov
 * @source: https://github.com/EugeneC/checkboxtree
 * @license: open-source
 */

function clickByCheckbox(){
    var currentElement = $(this);
    // check parent when all child elements are checked
    setCheckForParent(currentElement);
    //check child elements when parent are checked
    setCheckForChild(currentElement, currentElement.prop('checked'));
}

function setCheckForParent(child){
    //get child id
    var childClass = child.attr('class');
    if (childClass){
        // get number of checked items with same parent
        var checkedElements = $("input[type='checkbox'][class='"+childClass+"']:checked").length;
        // get number of all items with same parent
        var allElements = $("input[type='checkbox'][class='"+childClass+"']").length;
        //get parent element by child id
        childClass = childClass.split("parent-section_");
        var parentId = childClass[1];
        var parent = $("input[type='checkbox'][id='section_"+parentId+"']");

        if (checkedElements==allElements){
            //check parent
            parent.prop('checked', true);
            setCheckForParent(parent);
        }else{
            //un check parent
            parent.prop('checked', false);
            setCheckForParent(parent);
        }
    }
}

function setCheckForChild(parent, isChecked){
    // (un) check all child elements
    var childElements = $('.parent-' + parent.attr('id'))
     if (isChecked){
        var children = childElements.prop('checked', true);
    }else{
        var children = childElements.prop('checked', false);
    }

    // setCheckForChild for each child elements
    for (var i=0; i<childElements.length; i++){
        var element = childElements.eq(i);
        setCheckForChild(element, isChecked);
    }
}