const setD = document.querySelector(".day-date");
const inputTask = document.querySelector("#input-task");
const btnAddTask = document.querySelector(".btn-add-task");
const sectionUpcomingTask = document.querySelector(".section-upcoming-task");
sectionCompletedTask = document.querySelector(".section-completed-task");

sectionDeletedTask = document.querySelector(".section-deleted-task");

const isUpcomingTaskPresent = () => {
  if (!sectionUpcomingTask.childElementCount) {
    sectionUpcomingTask.innerHTML =
      "<div class='my-2 py-2 ps-3 fs-4 no-upcoming-task'>No upcoming tasks...</div>";
  }
};
const isDeletedTaskPresent = () => {
  if (!sectionDeletedTask.childElementCount) {
    sectionDeletedTask.innerHTML =
      "<div class='py-1 ps-3 fs-4 no-upcoming-task'>No deleted tasks...</div>";
  }
};
const isCompletedTaskPresent = () => {
  if (!sectionCompletedTask.childElementCount) {
    sectionCompletedTask.innerHTML =
      "<div class='py-1 ps-3 fs-4 no-upcoming-task'>No completed tasks...</div>";
  }
};

isUpcomingTaskPresent();
isCompletedTaskPresent();
isDeletedTaskPresent();
////////////////////////////////////////// FUNCTION TO DELETE UPCOMING TASK AND ADDING TO DELETED TASK //////////////////////////////////////////

const setUpcomingToDeleted = (t) => {
  console.log(
    t.parentElement.parentElement.firstElementChild.nextElementSibling.value
  );
  console.log(sectionUpcomingTask);
  const text =
    t.parentElement.parentElement.firstElementChild.nextElementSibling.value;
  //   Removing the checked task from Upcoming task section
  if (sectionDeletedTask.childElementCount) {
    sectionDeletedTask.removeChild(sectionDeletedTask.firstChild);
  }
  sectionDeletedTask.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="row">
        <div class="col text-small">
            <span>${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</span>
        </div>
    </div>

    <div class="input-group mb-3">
        <span class="input-group-text bg-light">
            <i class="bi bi-trash fs-5"></i>
        </span>
        <input
            id="input-task"
            type="text"
            class="form-control"
            value="${text}"
            readonly
        />
        <button class="btn btn-outline-dark">
            <i class="bi bi-arrow-clockwise fs-5"></i>
        </button>
    </div>
    `
  );
  sectionUpcomingTask.removeChild(t.parentElement.parentElement.parentElement);
  isUpcomingTaskPresent();
};

////////////////////////////////////////// FUNCTION TO CHANGE TASK UPCOMING TO COMPLETED //////////////////////////////////////////
const setUpcomingToCompleted = (t) => {
  console.log(t.parentElement.parentElement.firstChild);
  const text = t.parentElement.nextElementSibling.value;
  if (sectionCompletedTask.childElementCount) {
    sectionCompletedTask.removeChild(sectionCompletedTask.firstChild);
  }
  //   Removing the checked task from Upcoming task section
  sectionCompletedTask.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="row">
        <div class="col text-small">
            <span>${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</span>
        </div>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text bg-light">
            <i class="bi bi-check-all fs-5"></i>
        </span>
        <input
            id="input-task"
            type="text"
            class="form-control text-decoration-line-through"
            value="${text}"
        />
        <button class="btn btn-outline-dark">
            <i class="bi bi-arrow-up fs-5"></i>
        </button>
        <button class="btn btn-outline-dark">
            <i class="bi bi-trash fs-5"></i>
        </button>
    </div>
    `
  );

  sectionUpcomingTask.removeChild(t.parentElement.parentElement);
  isUpcomingTaskPresent();
};

////////////////////////////////////////// EVENT TO ADD THE TASK TO UPCOMING //////////////////////////////////////////

btnAddTask.addEventListener("click", (e) => {
  const inputTaskVal = inputTask.value;
  if (inputTaskVal === "") {
    inputTask.attributes.placeholder.value = "Please Enter Task!";
  } else {
    inputTask.attributes.placeholder.value = "Add a task";
    if (sectionUpcomingTask.childElementCount) {
      sectionUpcomingTask.removeChild(sectionUpcomingTask.firstChild);
    }
    // Up
    sectionUpcomingTask.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="row">
      <div class="col text-small">
          <span>${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</span>
      </div>
  </div>

    <div class="input-group mb-3">
        <span class="input-group-text bg-light">
            <input type="checkbox" onclick="setUpcomingToCompleted(this)"  class="form-check-input" />
        </span>
        <input
            id="input-task"
            type="text"
            class="form-control"
            value="${inputTaskVal}"
        />
        <button class="btn btn-outline-dark">
            <i class="bi bi-trash fs-3"onclick="setUpcomingToDeleted(this)"></i>
        </button>
    </div>
    `
    );
    inputTask.value = "";
    // Down
  }
});

////////////////////////////////////////// FUNCTION TO TOGGLE THE INPUT TASK ICON //////////////////////////////////////////
inputTask.addEventListener("focus", (t) => {
  inputTask.parentElement.firstElementChild.lastElementChild.classList.remove(
    "hidden"
  );
  inputTask.parentElement.firstElementChild.firstElementChild.classList.add(
    "hidden"
  );
});
inputTask.addEventListener("blur", (t) => {
  inputTask.parentElement.firstElementChild.lastElementChild.classList.add(
    "hidden"
  );
  inputTask.parentElement.firstElementChild.firstElementChild.classList.remove(
    "hidden"
  );
});
////////////////////////////////////////// FUNCTION TO SET THE CURRENT DAY AND DATE //////////////////////////////////////////

const setDayDate = (el) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateVal = date.getDate();
  el.innerText = `${day}, ${month} ${dateVal}`;
};
setDayDate(setD);
