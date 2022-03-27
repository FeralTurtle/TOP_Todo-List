const projects = (() => {
    const testObj1 = {
        property1: 'a property',
        property2: false,
    };
    const testObj2 = {
        property1: 'property b',
        property2: true,
    };
    const testObj3 = {
        foo: 'bar',
    }
    
    const projectsArray1 = [testObj1, testObj2];
    const projectsArray2 = [testObj3];

    const projectsArray = [projectsArray1, projectsArray2];

    return { projectsArray };
})();

export { projects };
