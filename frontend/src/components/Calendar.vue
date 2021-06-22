<template>
<div class="main">
  <div id="calendar">

    <div id="calHeader">
      <div id="part1">
      <i class="fa fa-arrow-left fa-2x" id="leftArrow" onclick="updateCalendar('prev')"></i>
      <h1 id="monthHeading"></h1>
      <i class="fa fa-arrow-right fa-2x" id="rightArrow" onclick="updateCalendar('prev')"></i>
      </div>
      <h2 id="yearHeading"></h2>
    </div>
    
    <div id="grid">
      <div class="row">
          <div class="gridSquare daySquare" id="Sun">Sun</div>
          <div class="gridSquare daySquare" id="Mon">Mon</div>
          <div class="gridSquare daySquare" id="Tue">Tue</div>
          <div class="gridSquare daySquare" id="Wed">Wed</div>
          <div class="gridSquare daySquare" id="Thu">Thu</div>
          <div class="gridSquare daySquare" id="Fri">Fri</div>
          <div class="gridSquare daySquare" id="Sat">Sat</div>
      </div>
      <div class="row1">
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
      </div>
      <div class="row2">
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
      </div>
      <div class="row3">
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
      </div>
      <div class="row4">
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
      </div>
      <div class="row5">
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
      </div>
      <div class="row6">
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
          <div class="gridSquare numSquare"></div>
      </div>
    </div> <!-- grid -->
    
  </div> <!-- calendar -->
  </div>
</template>

<script>
  var months = new Array();
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";

  var currentMonth;
  var currentYear;
  var firstDay;
  var leapYear;

function fillCalendar() {

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();

  if ((year%4) == 0) {
    leapYear = true;
  } else {
    leapYear = false;
  }

  currentMonth = month;
  currentYear = year;
  setMonthYear(month, year);

  firstDay = today.getDay();

  fillDays(firstDay);

}

function setMonthYear(theMonth, theYear) {

    monthName = months[theMonth];
    document.getElementById("monthHeading").innerHTML = monthName;
    document.getElementById("yearHeading").innerHTML = theYear;
}

function fillDays(day) {

  var length = 31;

  if ((currentMonth == 3) || (currentMonth == 5) || (currentMonth == 8) || (currentMonth == 10)) {
    length = 30;
  }

  if (currentMonth == 1) {
    if (leapYear == true) {
      length = 29;
    }
  }

  if (currentMonth == 1) {
    if (leapYear == false) {
      length = 28;
    }
  }

  var firstRow = $('.row1');
  firstRowSquares = firstRow.children();
  var secRow = $('.row2');
  secRowSquares = secRow.children();
  var thirdRow = $('.row3');
  thirdRowSquares = thirdRow.children();
  var fourthRow = $('.row4');
  fourthRowSquares = fourthRow.children();
  var fifthRow = $('.row5');
  fifthRowSquares = fifthRow.children();
  var sixthRow = $('.row6');
  sixthRowSquares = sixthRow.children();

  var lastNum = 1;


    for (var i=day; i < 7; i++) {
        firstRowSquares[i].innerHTML = lastNum;
        lastNum = lastNum + 1;
    }

    for (var i=0; i < 7; i++) {
        secRowSquares[i].innerHTML = lastNum;
        lastNum++;
    }

    for (var i=0; i < 7; i++) {
        thirdRowSquares[i].innerHTML = lastNum;
        lastNum++;
    }

    for (var i=0; i < 7; i++) {
        fourthRowSquares[i].innerHTML = lastNum;
        lastNum++;
    }

    for (var i=0; i < 7; i++) {
      if (lastNum > length) {
        break;
      }
      fifthRowSquares[i].innerHTML = lastNum;
      lastNum++;
    }

    if ((lastNum > length) == false) {
      for (var i=0; i < 7; i++) {
        if (lastNum > length) {
          break;
        }
        sixthRowSquares[i].innerHTML = lastNum;
        lastNum++;
      }
    }

}

function updateCalendar(direction) {

  if (direction == 'prev') {

    if (currentMonth == 0) {
      currentMonth = 11;
      currentYear = currentYear - 1;
    } else {
      currentMonth = currentMonth - 1;
    }

  } else {

    if (currentMonth == 11) {
      currentMonth = 0;
      currentYear = currentYear + 1;
    } else {
      currentMonth++;
    }
  }

  setMonthYear(currentMonth, currentYear);

  var newDay = new Date(months[currentMonth]+" 1, "+currentYear.toString());
  firstDay = newDay.getDay();

  //clear first row and last 2 rows
  var firstRow = $('.row1');
  firstRowSquares = firstRow.children();

  var fifthRow = $('.row5');
  fifthRowSquares = fifthRow.children();

  var sixthRow = $('.row6');
  sixthRowSquares = sixthRow.children();

  for (var i=0; i < 7; i++) {
        firstRowSquares[i].innerHTML = "";
    }

  for (var i=0; i < 7; i++) {
      fifthRowSquares[i].innerHTML = "";
  }

  for (var i=0; i < 7; i++) {
      sixthRowSquares[i].innerHTML = "";
  }

  if ((currentYear%4) == 0) {
    leapYear = true;
  } else {
    leapYear = false;
  }

  fillDays(firstDay);

  
}
</script>

<style lang="scss">

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {

    display: block;

}

body {

    line-height: 1;

}

ol, ul {

    list-style: none;

}

blockquote, q {
    quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

table {

    border-collapse: collapse;
    border-spacing: 0;

}

/* Jonnemarie Kahwaty */

* {
    box-sizing: border-box;
}

h1 {
  font-size: 1.5em;
}

.navIcon {
  display: inline-block;
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 5px;
  width: 23%;
  border-right: 1px solid gray;
}

// footer {
//   text-align: center;
//   width: 100%;
//   border-top: 1px solid gray;
//   box-shadow: 0px 0px 5px black;
//   bottom: 0;
//   position: fixed;
//   background-color: #f4f4f4;
// }

#calendar {
  width: 100%;
  margin: 0px auto;
  padding: 10px;
  padding-top: 30px;
}

#calHeader {
  height: 60px;
  border-bottom: 1px solid black;
  background-color: #444444;
  text-align: center;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
}

#calHeader h1 {
  display: inline-block;
  margin-top: 10px;
  font-family: regB;
}

#calHeader h2 {
  padding: 5px;
  font-family: .8em;
}

#grid {
  display: inline-block;
  background: #fff;
  border-collapse: collapse;
  color: #222;
  font-size: 12px;
  width: 100%;
  height: 100%;
  text-align: center;
}

.gridSquare {
  display: inline-block;
  width: 13%;
  text-align: center;
  padding-top: 15px;
}

.daySquare {
  color: black;
  font-family: regB;
  text-transform: uppercase;
}

.numSquare {
  color: #444;
  text-align: center;
  padding: 15px;
  /*border: 1px solid #ccc;*/
}

#part1 {
  width: 100%;
}

#leftArrow {
  float: left;
  padding-top: 10px;
  padding-left: 10px;
}

#rightArrow {
  float: right;
  padding-top: 10px;
  padding-right: 10px;
}

#leftArrow:hover, #rightArrow:hover {
  cursor: pointer;
}

.currentDate {
  background: #ccc;
}
</style>