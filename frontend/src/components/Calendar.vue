<template>
<div class="main">
  <div id="calendar">

    <div id="calHeader">
      <div id="part1">
      <i class="fa fa-arrow-left fa-2x" id="leftArrow" @click="updateCalendar('prev')"></i>
      <h1 id="monthHeading"></h1>
      <i class="fa fa-arrow-right fa-2x" id="rightArrow" @click="updateCalendar('prev')"></i>
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
  import { onMounted } from 'vue'

export default {
  data() {
    return {
      months: [
        "January","February","March","April","May","June","July","August","September","October","November","December",
      ],
      currentMonth: '',
      currentYear: '',
      firstDay: '',
      leapYear: '',
    }
  },
  mounted: function () { 
    
      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth();
      var year = today.getFullYear();

      if ((year%4) == 0) {
        this.leapYear = true;
      } else {
        this.leapYear = false;
      }

      this.currentMonth = month;
      this.currentYear = year;
      this.setMonthYear(month, year);

      this.firstDay = day;

      this.fillDays(this.firstDay);
  },

  methods: {
    setMonthYear(theMonth, theYear) {
        var monthName = this.months[theMonth];
        document.getElementById("monthHeading").innerHTML = monthName;
        document.getElementById("yearHeading").innerHTML = theYear;
    },

    fillDays(day) {
      console.log(day);
      var length = 31;

      if ((this.currentMonth == 3) || (this.currentMonth == 5) || (this.currentMonth == 8) || (this.currentMonth == 10)) {
        length = 30;
      }

      if (this.currentMonth == 1) {
        if (this.leapYear == true) {
          length = 29;
        }
      }

      if (this.currentMonth == 1) {
        if (this.leapYear == false) {
          length = 28;
        }
      }

      var firstRow = document.getElementsByClassName('row1');
      console.log(firstRow);
      var firstRowSquares = firstRow[0].children;
      console.log(firstRowSquares);
      var secRow = document.getElementsByClassName('row2');
      var secRowSquares = secRow[0].children;
      var thirdRow = document.getElementsByClassName('row3');
      var thirdRowSquares = thirdRow[0].children;
      var fourthRow = document.getElementsByClassName('row4');
      var fourthRowSquares = fourthRow[0].children;
      var fifthRow = document.getElementsByClassName('row5');
      var fifthRowSquares = fifthRow[0].children;
      var sixthRow = document.getElementsByClassName('row6');
      var sixthRowSquares = sixthRow[0].children;

      var lastNum = 1;


      for (var a=day; a < 7; a++) {
          firstRowSquares[a].innerHTML = lastNum;
          lastNum = lastNum + 1;
      }

      for (var b=0; b < 7; b++) {
          secRowSquares[b].innerHTML = lastNum;
          lastNum++;
      }

      for (var c=0; c < 7; c++) {
          thirdRowSquares[c].innerHTML = lastNum;
          lastNum++;
      }

      for (var d=0; d < 7; d++) {
          fourthRowSquares[d].innerHTML = lastNum;
          lastNum++;
      }

      for (var e=0; e < 7; e++) {
        if (lastNum > length) {
          break;
        }
        fifthRowSquares[e].innerHTML = lastNum;
        lastNum++;
      }

      if ((lastNum > length) == false) {
        for (var f=0; f < 7; f++) {
          if (lastNum > length) {
            break;
          }
          sixthRowSquares[f].innerHTML = lastNum;
          lastNum++;
        }
      }
    },

    updateCalendar(direction) {
       if (direction == 'prev') {

        if (this.currentMonth == 0) {
          this.currentMonth = 11;
          this.currentYear = this.currentYear - 1;
        } else {
          this.currentMonth = this.currentMonth - 1;
        }

      } else {

        if (this.currentMonth == 11) {
          this.currentMonth = 0;
          this.currentYear = this.currentYear + 1;
        } else {
          this.currentMonth++;
        }
      }

      this.setMonthYear(this.currentMonth, this.currentYear);

      var newDay = new Date(this.months[this.currentMonth] +" 1, "+ this.currentYear.toString());
      this.firstDay = newDay.getDay();

      //clear first row and last 2 rows
      var firstRow = document.getElementsByClassName('row1');
      var firstRowSquares = firstRow[0].children();

      var fifthRow = document.getElementsByClassName('row5');
      var fifthRowSquares = fifthRow[0].children();

      var sixthRow = document.getElementsByClassName('row6');
      var sixthRowSquares = sixthRow[0].children();

      for (var g=0; g < 7; g++) {
            firstRowSquares[g].innerHTML = "";
        }

      for (var h=0; h < 7; h++) {
          fifthRowSquares[h].innerHTML = "";
      }

      for (var i=0; i < 7; i++) {
          sixthRowSquares[i].innerHTML = "";
      }

      if ((this.currentYear%4) == 0) {
        this.leapYear = true;
      } else {
        this.leapYear = false;
      }

      this.fillDays(this.firstDay);
   
    },
  }
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