// Function for the animation
const flipCoin = () => {
  $(".coin")
    .animate({ bottom: "85%" }, 1000)
    .animate({ top: "85%", bottom: "0%" }, 1000);
};

// Animating the coin and fliping upward
$(".flip-coin").click(function () {
  $(".coin").addClass("fa-flip");
  flipCoin();
  setTimeout(() => {
    $(".coin").removeClass("fa-flip");
    $(".coin").remove();
    $(".toss-container").append(`<i
    class="fa-brands fa-bitcoin fa-2xl coin"
    style="--fa-flip-x: 1; --fa-flip-y: 0; font-size: 5em"
  ></i>`);
    // Getting random head tail
    const randomOutcome = Math.round(Math.random() * 1);
    const computerText = randomOutcome == 1 ? "Head" : "Tail";
    $(".computer-select--value").text(computerText);

    if (randomOutcome === 1 && $(".input-toss.checked").text() === "Head") {
      console.log(`WIN`);
      $(".result").text("You Won 🏆").fadeOut(3000);
    } else {
      console.log(`LOSS`);
      $(".result").text("You Lost 😭").fadeOut(3000);
    }
  }, 2000);
});

// Clicked functionality
$(".input-toss").click(function () {
  $(".computer-select--value").text("None");
  // First removing checked class from all elements
  $(".input-toss").each(function (i, el) {
    $(this).removeClass("checked");
  });
  // Adding checked class to the selected element
  $(this).addClass("checked");
  // Adding selected side of coin to users
  $(".user-select--value").text($(this).text());
});
