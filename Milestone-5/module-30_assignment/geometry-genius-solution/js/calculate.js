// triangle
document.getElementById('calculate-triangle').addEventListener('click', function () {
    const triangleValueB = getInputFieldValueById('triangle-b');
    const triangleValueH = getInputFieldValueById('triangle-h');
    // validation
    if (!isInputValid(triangleValueB, triangleValueH)) {
        return;
    }
    const areaOfTriangle = (0.5 * triangleValueB * triangleValueH).toFixed(2);
    displayResult('Triangle', areaOfTriangle)
})
//rectangle
document.getElementById('rectangle-calculate').addEventListener('click', function () {
    const rectangleValueW = getInputFieldValueById('rectangle-w');
    const rectangleValueL = getInputFieldValueById('rectangle-l');
    // validation
    if (!isInputValid(rectangleValueL, rectangleValueW)) {
        return;
    }
    const areaOfRectangle = (rectangleValueW * rectangleValueL).toFixed(2);
    displayResult('Rectangle', areaOfRectangle)
})
//parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click', function () {
    const parallelogramValueB = getInputFieldValueById('parallelogram-b');
    const parallelogramValueH = getInputFieldValueById('parallelogram-h');
    // validation
    if (!isInputValid(parallelogramValueB, parallelogramValueH)) {
        return;
    }
    const areaOfParallelogram = (parallelogramValueB * parallelogramValueH).toFixed(2);
    displayResult('Parallelogram', areaOfParallelogram);
})
//rhombus 
document.getElementById('rhombus-calculate').addEventListener('click', function () {
    const rhombusValueD1 = getInputFieldValueById('rhombus-d1');
    const rhombusValueD2 = getInputFieldValueById('rhombus-d2');
    // validation
    if (!isInputValid(rhombusValueD1, rhombusValueD2)) {
        return;
    }
    const areaOfRhombus = (0.5 * rhombusValueD1 * rhombusValueD2).toFixed(2);
    displayResult('Rhombus', areaOfRhombus);
})
//pentagon
document.getElementById('pentagon-calculate').addEventListener('click', function () {
    const pentagonValueP = getInputFieldValueById('pentagon-p');
    const pentagonValueB = getInputFieldValueById('pentagon-b');
    // validation
    if (!isInputValid(pentagonValueB, pentagonValueP)) {
        return;
    }
    const areaOfPentagon = (0.5 * pentagonValueB * pentagonValueP).toFixed(2);
    displayResult('Pentagon', areaOfPentagon);
})
//ellipse
document.getElementById('ellipse-calculate').addEventListener('click', function () {
    const ellipseValueA = getInputFieldValueById('ellipse-a');
    const ellipseValueB = getInputFieldValueById('ellipse-b');
    // validation
    if (!isInputValid(ellipseValueA, ellipseValueB)) {
        return;
    }
    const areaOfEllipse = (3.14 * ellipseValueA * ellipseValueB).toFixed(2);
    displayResult('Pentagon', areaOfEllipse);

})

const areaElements = document.getElementsByClassName('area-card');
for (const singleArea of areaElements) {
    singleArea.addEventListener('mouseenter',function(){
        singleArea.style.backgroundColor=generateRandomColor();
 
    })
}