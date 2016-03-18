
// data
var storefrontWindow1 = {
    type: 'window',
    width: [60],
    height: [60],
    fromTop: 0,
    leftJamb: false,
    rightJamb: true,
    frameColor: "white",
    glassColor: 'green'
};

var drawingData = [];
drawingData.push(storefrontWindow1);

// calling
$(function () {
    startDrawing(drawingData);
});

// const variable
var frameWidth = 1.75;
var glassStop = 1;

// variables
var startX = 0;
var startY = 0;
var axisX = startX;
var axisY = startY;
var fontSize = 3.8;

// loop index
var iWidth = 0;
var iHeight = 0;

// start point for second window or door
var finalWidth = 0;
var finalHeight = 0;


// start to draw storefront and door
var startDrawing = function (data) {

    // paper
    $('#canvas').empty();
    var paper = Raphael('canvas');

    // check data
    if (data.length < 1) {

        paper.rect(startX, startY, 80, 1).attr({
            'stroke-width': '0'
        });

        paper.text(startX + 40, startY, 'There are no systems.').attr(
        {
            "font-size": fontSize,
            "font-family": "Arial",
            'fill': 'red'
        });

        addAttr();
        return false;
    }

    // adjust
    adjustJambs(data);

    // check locaton
    for (var i = 0; i < data.length - 1; i++) {

        if (data[i].type == 'door' && data[i + 1].type == 'door') {

            paper.rect(startX, startY, 80, 1).attr({
                'stroke-width': '0'
            });

            paper.text(startX + 40, startY, 'Invalid configuration').attr(
            {
                "font-size": fontSize,
                "font-family": "Arial",
                'fill': 'red'
            });

            addAttr();

            return false;
        }
    }

    for (var i = 0; i < data.length; i++) {

        // storefront window
        if (drawingData[i].type == 'window') {
            drawStorefrontWindow(paper, drawingData[i]);
        }
    }

    addAttr();
    return true;
};


// draw storefront door
var drawStorefrontDoor = function (paper, sfData, threshold) {

    // variables
    var totalFrameHeight = sfData.height;
    var doorWidth = sfData.width;
    var leafStartPosition = 0;
    var frameGap = 0.25;
    var doorBevel = 3.5;
    var doorTop = 3.875;
    var doorBottom = 6.50;
    var thresholdGap = 0.5;
    var thresholdWidth = 0;
    var loopAmount = 1;

    // adjust
    axisX = finalWidth;
    axisY = startY;

    if (sfData.transom == true) {
        totalFrameHeight += sfData.transomHeight;
    }

    if (sfData.threshold == 'ada') {
        thresholdWidth = 0.5;
    }
    else if (sfData.threshold == 'high') {
        thresholdWidth = 2.25;
    }

    // left jamb
    paper.rect(axisX, axisY, frameWidth, totalFrameHeight).attr({
        'stroke-width': 0.3,
        'fill': sfData.frameColor,
        'fill-opacity': 0.8
    }).toBack();
    // right jamb
    paper.rect(axisX + sfData.width - frameWidth, axisY, frameWidth, totalFrameHeight).attr({
        'stroke-width': 0.3,
        'fill': sfData.frameColor,
        'fill-opacity': 0.8
    }).toBack();

    // frame header
    paper.rect(axisX + frameWidth, startY, sfData.width - frameWidth * 2, frameWidth).attr({
        'stroke-width': 0.3,
        'fill': sfData.frameColor,
        'fill-opacity': 0.8
    });

    // frame header (only with transom)
    if (sfData.transom == true) {
        paper.rect(axisX + frameWidth, startY + sfData.transomHeight, sfData.width - frameWidth * 2, frameWidth).attr({
            'stroke-width': 0.3,
            'fill': sfData.frameColor,
            'fill-opacity': 0.8
        });
    }

    // frame threshold
    paper.rect(axisX + frameWidth, startY + sfData.height + sfData.transomHeight - thresholdWidth, sfData.width - frameWidth * 2, thresholdWidth).attr({
        'stroke-width': 0.3,
        'fill': 'silver',
        'fill-opacity': 1
    });

    // adjust
    if (sfData.configuration == 'XX') {
        doorWidth = doorWidth / 2 + 2 - (frameGap / 2);
        loopAmount = 2;
    }

    // door panel
    for (var i = 0; i < loopAmount; i++) {
        // door left bevel
        paper.rect(axisX + frameWidth + frameGap + leafStartPosition, axisY + frameWidth + frameGap, doorBevel, totalFrameHeight - frameWidth - frameGap - thresholdGap - thresholdWidth).attr({
            'stroke-width': 0.3,
            'fill': sfData.frameColor,
            'fill-opacity': 0.8
        });

        // door left glass stop
        paper.rect(axisX + frameWidth + frameGap + doorBevel + leafStartPosition, axisY + frameWidth + frameGap + doorTop, glassStop, totalFrameHeight - frameWidth - frameGap - thresholdGap - doorBottom - doorTop - thresholdWidth).attr({
            'stroke-width': 0.3,
            'fill': sfData.frameColor,
            'fill-opacity': 0.8
        });

        // door right bevel
        paper.rect(axisX + doorWidth - doorBevel - frameGap - frameWidth + leafStartPosition, axisY + frameWidth + frameGap, doorBevel, totalFrameHeight - frameWidth - frameGap - thresholdGap - thresholdWidth).attr({
            'stroke-width': 0.3,
            'fill': sfData.frameColor,
            'fill-opacity': 0.8
        });

        // door right glass stop
        paper.rect(axisX + doorWidth - doorBevel - frameGap - frameWidth - glassStop + leafStartPosition, axisY + frameWidth + frameGap + doorTop, glassStop, totalFrameHeight - frameWidth - frameGap - thresholdGap - doorTop - doorBottom - thresholdWidth).attr({
            'stroke-width': 0.3,
            'fill': sfData.frameColor,
            'fill-opacity': 0.8
        });

        // door top bevel
        paper.rect(axisX + frameWidth + doorBevel + frameGap + leafStartPosition, startY + sfData.transomHeight + frameWidth + frameGap, doorWidth - frameWidth * 2 - doorBevel * 2 - frameGap * 2, doorTop).attr({
            'stroke-width': 0.3,
            'fill': sfData.frameColor,
            'fill-opacity': 0.8
        });

        // door top glass stop
        paper.rect(axisX + frameWidth + doorBevel + frameGap + glassStop + leafStartPosition, startY + sfData.transomHeight + frameWidth + frameGap + doorTop, doorWidth - frameWidth * 2 - doorBevel * 2 - frameGap * 2 - glassStop * 2, glassStop).attr({
            'stroke-width': 0.3,
            'fill': sfData.frameColor,
            'fill-opacity': 0.8
        });

        // door bottom bevel
        paper.rect(axisX + frameWidth + doorBevel + frameGap + leafStartPosition, startY + sfData.transomHeight + sfData.height - doorBottom - thresholdGap - thresholdWidth, doorWidth - frameWidth * 2 - doorBevel * 2 - frameGap * 2, doorBottom).attr({
            'stroke-width': 0.3,
            'fill': sfData.frameColor,
            'fill-opacity': 0.8
        });

        // door bottom glass stop
        paper.rect(axisX + frameWidth + doorBevel + frameGap + glassStop + leafStartPosition, startY + sfData.transomHeight + sfData.height - doorBottom - thresholdGap - glassStop - thresholdWidth, doorWidth - frameWidth * 2 - doorBevel * 2 - frameGap * 2 - glassStop * 2, glassStop).attr({
            'stroke-width': 0.3,
            'fill': sfData.frameColor,
            'fill-opacity': 0.8
        });

        leafStartPosition = doorWidth - 3.75;
    }


    // horizontal dimensions
    dimHorizontal(paper, axisX + frameWidth, axisY, sfData.width - frameWidth * 2, totalFrameHeight);
    dimHorizontal(paper, axisX, axisY, sfData.width, totalFrameHeight, 5);

    // vertical dimensions
    dimVertical(paper, axisX, axisY + frameWidth, sfData.height - frameWidth, 0, 0);
    dimVertical(paper, axisX, axisY, sfData.height, 0, 5);

    // adjsut
    finalWidth += sfData.width;


    // handles data


};

// draw storefront window
var drawStorefrontWindow = function (paper, sfData) {

    // variables
    var currentDimY = 0;
    var currentPunchY = 0;
    var currentPunchY2 = 0;
    var currentGlassStop = 0;
    var maxPunch = 96;

    // adjust
    var fromTop = sfData.fromTop;
    startX = finalWidth;
    axisX = finalWidth;
    axisY = fromTop;
    currentPunchY = 0;

    // dimension
    var sfWidth = sfData.width;
    var sfHeight = sfData.height.reverse();

    var totalWidth = 0;
    $.each(sfData.width, function () {
        totalWidth += this;
    });
    totalWidth += (sfData.width.length + 1) * frameWidth;

    var totalHeight = 0;
    $.each(sfData.height, function () {
        totalHeight += this;
    });
    totalHeight += (sfData.height.length + 1) * frameWidth;

    // adjust
    if (sfData.leftJamb == false) {
        totalWidth -= frameWidth;
    }
    if (sfData.rightJamb == false) {
        totalWidth -= frameWidth;
    }

    finalWidth += totalWidth;

    for (iWidth = 0; iWidth < sfData.width.length; iWidth++) {

        // reset
        currentDimY = fromTop;

        for (iHeight = 0; iHeight < sfData.height.length; iHeight++) {

            // reset
            axisY += startY;

            // adjust
            var adjustFrame = 0;
            if (sfData.leftJamb == false && iWidth == 0) {
                adjustFrame = frameWidth;
            }

            if (iHeight == 0) {

                // frame (header)
                paper.rect(axisX + frameWidth - adjustFrame, startY + currentDimY, sfWidth[iWidth], frameWidth).attr({
                    'stroke-width': 0.3,
                    'fill': sfData.frameColor,
                    'fill-opacity': 0.8
                });

                paper.rect(axisX + frameWidth - adjustFrame + glassStop, startY + currentDimY + frameWidth, sfWidth[iWidth] - glassStop * 2, glassStop).attr({
                    'stroke-width': 0.3,
                    'fill': sfData.frameColor,
                    'fill-opacity': 0.8
                });

                // frame (bottom)
                paper.rect(axisX + frameWidth - adjustFrame, totalHeight + axisY - frameWidth, sfWidth[iWidth], frameWidth).attr({
                    'stroke-width': 0.3,
                    'fill': sfData.frameColor,
                    'fill-opacity': 0.8
                });

                paper.rect(axisX + frameWidth - adjustFrame + glassStop, totalHeight + axisY - frameWidth - glassStop, sfWidth[iWidth] - glassStop * 2, glassStop).attr({
                    'stroke-width': 0.3,
                    'fill': sfData.frameColor,
                    'fill-opacity': 0.8
                });
            }
            else {
                // frame (horizontals)
                paper.rect(axisX, startY + currentDimY, sfWidth[iWidth], frameWidth).attr({
                    'stroke-width': 0.3,
                    'fill': sfData.frameColor,
                    'fill-opacity': 0.8
                }).toBack();

                paper.rect(axisX + glassStop, startY + currentDimY - glassStop, sfWidth[iWidth] - glassStop * 2, glassStop).attr({
                    'stroke-width': 0.3,
                    'fill': sfData.frameColor,
                    'fill-opacity': 0.8
                }).toBack();

                paper.rect(axisX + glassStop, startY + currentDimY + frameWidth, sfWidth[iWidth] - glassStop * 2, glassStop).attr({
                    'stroke-width': 0.3,
                    'fill': sfData.frameColor,
                    'fill-opacity': 0.8
                }).toBack();
            }

            // frame (jamb left) and mullions
            if (sfData.leftJamb == true || iWidth > 0) {

                if (iHeight == 0) {
                    paper.rect(axisX, axisY, frameWidth, totalHeight).attr({
                        'stroke-width': 0.3,
                        'fill': sfData.frameColor,
                        'fill-opacity': 0.8
                    });

                    currentGlassStop = 0;
                    for (var i = 0; i < sfData.height.length; i++) {

                        if (iWidth != 0) {
                            paper.rect(axisX - glassStop, axisY + frameWidth + currentGlassStop, glassStop, sfData.height[i]).attr({
                                'stroke-width': 0.3,
                                'fill': sfData.frameColor,
                                'fill-opacity': 0.8
                            });
                        }

                        paper.rect(axisX + frameWidth, axisY + frameWidth + currentGlassStop, glassStop, sfData.height[i]).attr({
                            'stroke-width': 0.3,
                            'fill': sfData.frameColor,
                            'fill-opacity': 0.8
                        });

                        if (iWidth + 1 == sfData.width.length) {
                            paper.rect(axisX - glassStop + sfData.width[sfData.width.length - 1] + frameWidth, axisY + frameWidth + currentGlassStop, glassStop, sfData.height[i]).attr({
                                'stroke-width': 0.3,
                                'fill': sfData.frameColor,
                                'fill-opacity': 0.8
                            });
                        }

                        currentGlassStop += sfData.height[i] + frameWidth;
                    }

                    axisX += frameWidth;
                }
            }
            else {
                paper.rect(axisX, axisY + frameWidth + currentGlassStop, glassStop, sfData.height[iHeight]).attr({
                    'stroke-width': 0.3,
                    'fill': sfData.frameColor,
                    'fill-opacity': 0.8
                });

                paper.rect(axisX + sfData.width[iWidth] - glassStop, axisY + frameWidth + currentGlassStop, glassStop, sfData.height[iHeight]).attr({
                    'stroke-width': 0.3,
                    'fill': sfData.frameColor,
                    'fill-opacity': 0.8
                });

                currentGlassStop += sfData.height[iHeight] + frameWidth;
            }

            // horizontal dimensions
            if (iHeight == 0) {
                dimHorizontal(paper, axisX, axisY, sfWidth[iWidth], totalHeight);
            }

            // vertical dimensions (D.L.O.)
            if (iWidth == 0) {
                var d = dimVertical(paper, startX + 11, startY + currentDimY + frameWidth, sfHeight[iHeight], totalWidth);
            }

            currentDimY += sfHeight[iHeight] + frameWidth;

            if (finalHeight < currentDimY) {
                finalHeight = currentDimY;
            }

            var a = paper.setFinish();
        }

        axisX = axisX + sfData.width[iWidth];
    }
    // frame (jamb right)
    if (sfData.rightJamb == true) {
        paper.rect(axisX, axisY, frameWidth, totalHeight).attr({
            'stroke-width': 0.3,
            'fill': sfData.frameColor,
            'fill-opacity': 0.8
        });
    }

    // total horizontal dimensions
    dimHorizontal(paper, startX, startY + fromTop, totalWidth, totalHeight, 5);

    // punch domensions
    var dimIndex1 = 0;
    var dimIndex2 = 0;
    var height = sfData.height.reverse();

    for (var i = 0; i < height.length; i++) {

        currentPunchY += height[i] + frameWidth;

        if (i < height.length - 1 && currentPunchY < maxPunch) {
            dimIndex1 = i;
            dimVertical(paper, startX, totalHeight - currentPunchY, currentPunchY, totalWidth, (dimIndex1 * 5));
            currentPunchY2 = currentPunchY;
        }
        else {
            dimVertical(paper, startX, startY, currentPunchY - currentPunchY2, totalWidth, (dimIndex2 * 5));
            dimIndex2 += 1;
        }
    }

    // total vertical dimensions
    if (dimIndex1 < dimIndex2) {
        dimIndex1 = dimIndex2;
    }
    if (height.length > 2) {
        dimIndex1 += 1;
    }

    dimVertical(paper, startX, axisY, totalHeight, 0, (dimIndex1 * 5));
};



// adjust jambs
var adjustJambs = function (data) {

    // last
    if (data.length > 2) {
        if (data[data.length - 2].type == 'door') {
            data[data.length - 1].leftJamb = false;
            data[data.length - 1].rightJamb = true;
        } else {
            data[data.length - 1].leftJamb = true;
            data[data.length - 1].rightJamb = true;
        }
    } else {
        data[data.length - 1].leftJamb = true;
        data[data.length - 1].rightJamb = true;
    }

    // middle
    for (var i = 0; i < data.length - 1; i++) {

        if (data[i + 1].type == 'window') {
            data[i].leftJamb = true;
            data[i].rightJamb = false;

            if (data[i - 1] != undefined && data[i - 1].type == 'door') {
                data[i].leftJamb = false;
            }
        }
        else {
            data[i].leftJamb = true;
            data[i].rightJamb = false;

            if (data[i - 1] != undefined && data[i - 1].type == 'door') {
                data[i].leftJamb = false;
            }
        }
    }
}

// add attr to svg image
var addAttr = function () {
    $('svg').attr(
    {
        'id': 'mySVG',
        'style': 'overflow: hidden; display: inline; width: 100%; height: 400px;'
    });
}

// dimension function (vertical)
var dimVertical = function (paper, startX, startY, height, totalWidth, space) {

    // check
    if (space == null) {
        space = 0;
    }

    // settings
    var separationLine = 1;
    var extendLine = 6 + space;
    var endLine = 2;
    var circleLine = 0.5;
    var textHeight = 2;

    // text
    var txt = paper.text((startX - separationLine - extendLine + textHeight), (startY + (height / 2)), (height + '\"')).attr(
        {
            "font-size": fontSize,
            "font-family": "Arial",
            'fill': 'blue'
        }).rotate(-90);

    // start set
    paper.setStart();

    // first horizontal line
    paper.path([
        'M' + (startX - separationLine), startY,
        'L' + (startX - separationLine - extendLine), startY
    ]);

    paper.circle((startX - extendLine + separationLine), (startY), circleLine).attr({
        'fill': 'blue'
    });

    // second horizontal line
    paper.path([
        'M' + (startX - separationLine), (startY + height),
        'L' + (startX - separationLine - extendLine), (startY + height)
    ]);

    paper.circle((startX - extendLine + separationLine), (startY + height), circleLine).attr({
        'fill': 'blue'
    });

    // vertical line
    paper.path([
        'M' + (startX - extendLine + separationLine), (startY - endLine),
        'L' + (startX - extendLine + separationLine), (startY + height + endLine)
    ]);

    // end set
    paper.setFinish().attr({
        'stroke-width': 0.3,
        'stroke': 'blue'
    }).toFront();

    // hide lines in the back of the text
    paper.rect(txt.getBBox().x, txt.getBBox().y, txt.getBBox().width, txt.getBBox().height).attr({
        stroke: 'white',
        fill: 'white'
    });

    txt.toFront();
};

// dimension function (horizontal)
var dimHorizontal = function (paper, startX, startY, width, totalHeight, space) {

    // check
    if (space == null) {
        space = 0;
    }

    // settings
    var separationLine = 1;
    var extendLine = 6 + space;
    var endLine = 2;
    var circleLine = 0.5;
    var textHeight = 2;

    // changes
    startY += totalHeight;

    // text
    var txt = paper.text((startX + (width / 2)), (startY + separationLine + extendLine - textHeight), (width + '\"')).attr(
        {
            "font-size": fontSize,
            "font-family": "Arial",
            'fill': 'blue'
        });

    // start set
    paper.setStart();

    // first vertical line
    paper.path([
        'M' + startX, (startY + separationLine),
        'L' + startX, (startY + separationLine + extendLine)
    ]);

    paper.circle(startX, (startY + extendLine - separationLine), circleLine).attr({
        'fill': 'blue'
    });

    // second vertical line
    paper.path([
        'M' + (startX + width), (startY + separationLine),
        'L' + (startX + width), (startY + separationLine + extendLine)
    ]);

    paper.circle(startX + width, (startY + extendLine - separationLine), circleLine).attr({
        'fill': 'blue'
    });

    // horizontal line
    paper.path([
        'M' + (startX - endLine), (startY + separationLine + extendLine - endLine),
        'L' + (startX + width + endLine), (startY + separationLine + extendLine - endLine)
    ]).toBack();

    // end set
    paper.setFinish().attr({
        'stroke-width': 0.3,
        'stroke': 'blue'
    }).toFront();

    // hide lines in the back of the text
    paper.rect(txt.getBBox().x, txt.getBBox().y, txt.getBBox().width, txt.getBBox().height).attr({
        stroke: 'white',
        fill: 'white',
    });

    txt.toFront();
};
