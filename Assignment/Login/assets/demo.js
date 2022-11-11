cookie =
  "username=kkkkk; usermobile=55555; ext_name=ojplmecpdpgccookcobabopnaifgidhf";

const userCookieObj = {};
cookieArr = cookie.split("; ");
cookieArr.forEach((c) => {
  userCookieObj[c.split("=")[0]] = c.split("=")[1];
});

console.log(userCookieObj);
