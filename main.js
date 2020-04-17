var pageCounter = 1;
var moduleContainer = document.getElementById('module-info');
var btn = document.getElementById("btn");

btn.addEventListerner("click", function() {
  var oReq = new XMLHttpRequest();
  oReq.open('GET', 'https://github.com/oliviaanderson3936/CIS2169-CW2/blob/master/module-' + pageCounter + '.json');
  oReq.onload = function() {
    var oData = JSON.parse(oReq.responseText);
    renderHTML(oData);
  };
  oReq.send();
pageCounter++;
if(pageCounter > 3){
  btn.disabled = true;
}
});

function renderHTML(data) {
  var htmlString = "";
  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].Name + " course is " + data[i].Course + " which has assignments ";
    for (ii = 0; ii < data[i].Module.Assignment.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].Module.Assignment[ii];
      } else {
        htmlString += " and " + data[i].Module.Assignment[ii];
      }
    }
    htmlString += ' and Learning Outcomes ';
    for (ii = 0; ii < data[i].Module.Learning_outcome.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].Module.Learning_outcome[ii];
      } else {
        htmlString += " and " + data[i].Module.Learning_outcome[ii];
      }
    }
    htmlString += ' and Volumes ';
    for (ii = 0; ii < data[i].Module.Volume.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].Module.Volume[ii];
      } else {
        htmlString += " and " + data[i].Module.Volume[ii];
      }
    }
    htmlString += ' and Weighting ';
    for (ii = 0; ii < data[i].Module.Weighting.length; ii++) {
      if (ii == 0) {
        htmlString += data[i].Module.Weighting[ii];
      } else {
        htmlString += " and " + data[i].Module.Weighting[ii];
      }
    }
    htmlString += '.</p>';
  }
}
