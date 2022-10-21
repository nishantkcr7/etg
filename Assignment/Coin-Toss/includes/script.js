const flipCoin = () => {
  $(".coin")
    .animate(
      {
        bottom: "0%",
      },
      1000
    )
    .animate(
      {
        top: "85%",
      },
      1000
    );
};
const resetCoinPosition = () => {
  $(".coin").css({
    faFlipX: "1",
    faFlipY: "0",
  });
};
$(".flip-coin").click(function () {
  $(".coin").addClass("fa-flip");
  flipCoin();
  setTimeout(() => {
    $(".coin").removeClass("fa-flip");
  }, 2500);
  resetCoinPosition();

  //   console.log($(this).toggleClass("fa-fllip"));
});
