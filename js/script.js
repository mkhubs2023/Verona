
 var priceElement = document.getElementById('price').innerHTML.trim();
 var totalDays = document.getElementById('total').innerHTML.trim();

 flatpickr("#myID", {
     inline: true,
     mode: "range",
     dateFormat: "d.m.Y",
     onReady: function (selectedDates, dateStr, instance) {
         // Get the day labels
         const dayLabels = instance.calendarContainer.querySelectorAll(".flatpickr-weekday");

         // Define an array of day abbreviations
         const dayAbbreviations = ["S", "M", "T", "W", "T", "F", "S"];

         // Loop through the day labels and update their text content
         dayLabels.forEach(function (dayLabel, index) {
             dayLabel.textContent = dayAbbreviations[index];
         });
     },

     onChange: function (selectedDates, dateStr, instance) {
         console.log(selectedDates)
         const days = parseInt(Math.abs(selectedDates[0] - selectedDates[1]) / (1000 * 60 * 60 * 24), 10) + 1
         const match = priceElement.match(/\d+/);
         let newPrice;
         const typeRate = document.getElementById('typeRate').innerHTML.trim();
         if (typeRate !== "Daily") {
             if (typeRate === "Weekly") {
                 newPrice = parseInt(match[0], 10) * 7;
                 totalDays = 7 + " Days Price";
             } else {
                 newPrice = parseInt(match[0], 10) * 30;
                 totalDays = 30 + " Days Price";
             }
         } else {

             if (days) {
                 newPrice = parseInt(match[0], 10) * days;
                 totalDays = days + " Days Price";
             } else {
                 newPrice = parseInt(match[0], 10)
                 totalDays = 1 + " Day Price"
             }
         }
         document.getElementById('price').textContent = newPrice + " AED";
         document.getElementById('total').textContent = totalDays;
     },
 });

 var weeklyText = document.getElementById('weekly').innerHTML.trim();
 var weekly = document.getElementById('weekly');
 var monthly = document.getElementById('monthly');
 var typeRate = document.getElementById('typeRate');
 var typeRatePrice = document.getElementById('typeRatePrice');
 var calendarSelect = document.getElementById('calendarSelect');

 weekly.addEventListener('click', function () {
     var typeRateText = document.getElementById('typeRate').innerHTML.trim();
     var monthlyText = document.getElementById('monthly').innerHTML.trim();
     var match = priceElement.match(/\d+/);

     if (typeRateText === "Weekly" && monthlyText == "Monthly") {
         typeRate.textContent = "Daily";
         weekly.textContent = "Weekly";
         calendarSelect.textContent = "Select Days";
         newPrice = parseInt(match[0], 10);
         typeRatePrice.textContent = newPrice + " AED";

     }
     else if (typeRateText === "Weekly" && monthlyText == "Daily") {
         typeRate.textContent = "Monthly";
         weekly.textContent = "Weekly";
         calendarSelect.textContent = "Select the first day";
         newPrice = parseInt(match[0], 10) * 30
         typeRatePrice.textContent = newPrice + " AED";
     }

     else if (typeRateText === "Daily" && monthlyText == "Monthly") {
         typeRate.textContent = "Weekly";
         weekly.textContent = "Daily";
         calendarSelect.textContent = "Select the first day";
         newPrice = parseInt(match[0], 10) * 7;
         typeRatePrice.textContent = newPrice + " AED";
     }

     else if (typeRateText === "Daily" && monthlyText == "Weekly") {
         typeRate.textContent = "Monthly";
         weekly.textContent = "Daily";
         calendarSelect.textContent = "Select the first day";
         newPrice = parseInt(match[0], 10) * 30;
         typeRatePrice.textContent = newPrice + " AED";
     }

     else if (typeRateText === "Monthly" && monthlyText == "Weekly") {
         typeRate.textContent = "Daily";
         weekly.textContent = "Monthly";
         calendarSelect.textContent = "Select Days";
         newPrice = parseInt(match[0], 10);
         typeRatePrice.textContent = newPrice + " AED";
     }
     else if (typeRateText === "Monthly" && monthlyText == "Daily") {
         typeRate.textContent = "Weekly";
         weekly.textContent = "Monthly";
         calendarSelect.textContent = "Select the first day";
         newPrice = parseInt(match[0], 10) * 7;
         typeRatePrice.textContent = newPrice + " AED";
     }
     else {
         typeRate.textContent = "Weekly";
         weekly.textContent = "Monthly";
         calendarSelect.textContent = "Select the first day";
         newPrice = parseInt(match[0], 10) * 7;
         typeRatePrice.textContent = newPrice + " AED";
     }
 });

 monthly.addEventListener('click', function () {
     var typeRateText = document.getElementById('typeRate').innerHTML.trim();
     var weeklyText = document.getElementById('weekly').innerHTML.trim();
     var match = priceElement.match(/\d+/);


     if (typeRateText === "Weekly" && weeklyText == "Monthly") {
         typeRate.textContent = "Daily";
         monthly.textContent = "Weekly";
         calendarSelect.textContent = "Select Days";
         newPrice = parseInt(match[0], 10);
         typeRatePrice.textContent = newPrice + " AED";
     }
     else if (typeRateText === "Weekly" && weeklyText == "Daily") {
         typeRate.textContent = "Monthly";
         monthly.textContent = "Weekly";
         calendarSelect.textContent = "Select the first day";
         newPrice = parseInt(match[0], 10) * 30;
         typeRatePrice.textContent = newPrice + " AED";
     }
     else if (typeRateText === "Daily" && weeklyText == "Weekly") {
         typeRate.textContent = "Monthly";
         monthly.textContent = "Daily";
         calendarSelect.textContent = "Select the first day";
         newPrice = parseInt(match[0], 10) * 30;
         typeRatePrice.textContent = newPrice + " AED";
     }
     else if (typeRateText === "Daily" && weeklyText == "Monthly") {
         typeRate.textContent = "Weekly";
         monthly.textContent = "Daily";
         calendarSelect.textContent = "Select the first day";
         newPrice = parseInt(match[0], 10) * 7;
         typeRatePrice.textContent = newPrice + " AED";
     }
     else if (typeRateText === "Monthly" && weeklyText == "Weekly") {
         typeRate.textContent = "Daily";
         monthly.textContent = "Monthly";
         calendarSelect.textContent = "Select Days";
         newPrice = parseInt(match[0], 10);
         typeRatePrice.textContent = newPrice + " AED";
     }
     else if (typeRateText === "Monthly" && weeklyText == "Daily") {
         typeRate.textContent = "Weekly";
         monthly.textContent = "Monthly";
         calendarSelect.textContent = "Select the first day 01";
         newPrice = parseInt(match[0], 10) * 7;
         typeRatePrice.textContent = newPrice + " AED";
     }
     else {
         typeRate.textContent = "Weekly";
         monthly.textContent = "Daily";
         calendarSelect.textContent = "Select the first day";
         newPrice = parseInt(match[0], 10) * 7;
         typeRatePrice.textContent = newPrice + " AED";
     }

 });
