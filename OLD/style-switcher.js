
$(document).ready(function(){
    // $('#style-switcher').val('static');

    $('#style-switcher').change(function() {
        // alert("Selected value is : " + document.getElementById("style-switcher").value);
        // alert("current stlye is : " + document.getElementById("style-switcher").value);
        $('#css-that-switches').attr('href', document.getElementById("style-switcher").value + '.css')
        // alert('#style-sitcher option:value')
    })
    
});

const movementScaler = 10;
document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
    const height = window.innerHeight;
    const width = window.innerWidth;
    let target = document.getElementById("fucker")
    // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
    let yAxisDegree = event.pageX / width * 40 - 20;
    let xAxisDegree = event.pageY / height * -1 * 40 + 20;
    yAxisDegree = yAxisDegree/movementScaler;
    xAxisDegree = xAxisDegree/movementScaler;
    target.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
    // Set the sheen position
    // setSheenPosition(event.pageX / width, event.pageY / width);
}
function setSheenPosition(xRatio, yRatio) {
    // This creates a "distance" up to 400px each direction to offset the sheen
    const xOffset = 1 - (xRatio - 0.5) * 800;
    const yOffset = 1 - (yRatio - 0.5) * 800;
    let target = document.getElementById("fucker")
    target.style.setProperty('--sheenX', `${xOffset}px`)
    target.style.setProperty('--sheenY', `${yOffset}px`)
}