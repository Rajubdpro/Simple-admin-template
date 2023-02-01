
(function() {
  "use strict";
/*--------------------------
 # Start chart js
--------------------------*/
var options = {
  series: [{
  name: 'series1',
  data: [31, 40, 28, 51, 42, 109, 100]
}],
  chart: {
    toolbar: {
      show: false
      },
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
tooltip: {
  enabled: false,
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();
var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

/*-------------------------------------
   Bottom chart 
------------------------------------*/

var options = {
  series: [
  {
    name: "This Week",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  {
    name: "Previous Week",
    data: [12, 11, 14, 18, 17, 13, 13]
  }
],
  chart: {
  height: 400,
  type: 'line',
  dropShadow: {
    enabled: true,
    color: '#000',
    top: 18,
    left: 7,
    blur: 10,
    opacity: 0.2
  },
  toolbar: {
    show: false
  }
},
colors: ['#4791FF', '#02BC77'],
dataLabels: {
  enabled: true,
},
stroke: {
  curve: 'smooth'
},
title: {
  text: 'Sales Last 30 days',
  align: 'left'
},
grid: {
  borderColor: '#e7e7e7',
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
markers: {
  size: 1
},
xaxis: {
  categories: ['1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec','8 Dec', '9 Dec', '10 Dec', '10 Dec', '10 Dec', '10 Dec', '10 Dec', '10 Dec', '10 Dec']
},
yaxis: {
  min: 0,
  max: 60
},
legend: {
  position: 'bottom',
  horizontalAlign: 'center'
}
};

var chart = new ApexCharts(document.querySelector("#sales_chart"), options);
chart.render();


/*--------------------------
 # End chart js
--------------------------*/


  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-sidebar-btn')) {
    on('click', '.toggle-sidebar-btn', function(e) {
      select('body').classList.toggle('toggle-sidebar')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

})();