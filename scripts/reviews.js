//reviews//
let reviewers = ["BillyBob67", "ChillyWilly99", "MotelReviewer101", "James504"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 3, 1, 4];
let reviewDates = ["12/29/2026", "02/24/2024", "01/05/2024", "04/19/2026"];
let reviews = [
   "I had an amazing experience! The customer service was top-notch, and the champagne exceeded my expectations. A perfect stay from start to finish—highly recommend!",
   "The rooms are actually quite nice and comfortable. However, the overall experience was just okay due to some service delays. A decent, middle-of-the-road choice if you just need a solid room for the night.",
   "The rooms were nice, but the experience was ruined by hidden fees and non-existent Wi-Fi. To make matters worse, the management was incredibly rude when I asked for help. Definitely not worth the headache!",
   "The motel has shown a lot of overall improvement lately. The rooms are much nicer than they used to be, and you can tell the management is putting in the effort to upgrade the property. There are still a few minor service kinks to iron out, but it’s definitely on the right track.",
];
let reviewTitles = ["5-Star Service & Amazing Champagne!", "Good Stay, Minor Issues", "Overpriced and Unprofessional — Avoid!", "Making Great Progress!"];
//star image//
function starImages(rating) {
      let imageText = "";
      for(let i = 1; i <= rating; i++) {
            imageText += "<img src='images/star.png' alt=''>";
      }
      return imageText;
}

for (let i = 0; i < reviewers.length; i++){
      let reviewCode = "";

      if (reviewType[i] === "p") {
            reviewCode += "<table class='prime'>";
      } else if (reviewType[i] === "N") {
            reviewCode += "<table class='new'>";
      } else {
            reviewCode += "<table>";
      }

      reviewCode += "<caption>" + reviewTitles[i] + "</caption>";
      reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";
      reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
      reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";
      reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
      reviewCode += "</table>";

      document.getElementsByTagName("article")[0].insertAdjacentHTML("beforeEnd", reviewCode);
}
