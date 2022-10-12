const setD = document.querySelector(".day-date");
const inputTask = document.querySelector("#input-task");
const btnAddTask = document.querySelector(".btn-add-task");
const sectionUpcomingTask = document.querySelector(".section-upcoming-task");
sectionCompletedTask = document.querySelector(".section-completed-task");

sectionDeletedTask = document.querySelector(".section-deleted-task");

const permanentDelete = (t) => {
  console.log(t.parentElement.parentElement);
  t.parentElement.parentElement.parentElement.removeChild(
    t.parentElement.parentElement
  );
  isDeletedTaskPresent();
};
const setDeletedToUpcoming = (t) => {
  const inputTaskVal =
    t.parentElement.parentElement.firstChild.nextElementSibling
      .nextElementSibling.nextElementSibling.value;
  if (sectionUpcomingTask.childElementCount) {
    sectionUpcomingTask.removeChild(sectionUpcomingTask.firstChild);
  }
  // Moving completed Item to Upcoming Task Section
  sectionUpcomingTask.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="input-group mb-3 bg-light-yellow">
      
      
      <span class="input-group-text bg-transparent">
          <input type="checkbox" onclick="setUpcomingToCompleted(this)"  class="form-check-input" />
      </span>
      <span class="input-group-text bg-transparent">
      ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
      </span>
      <input
          id="input-task"
          type="text"
          class="form-control bg-transparent"
          value="${inputTaskVal}"
      />
      <button class="btn btn-outline-dark">
          <i class="bi bi-trash fs-3"onclick="setUpcomingToDeleted(this)"></i>
      </button>
  </div>
  `
  );
  // Removing the completed item to Pending Tasks section

  sectionDeletedTask.removeChild(t.parentElement.parentElement);
  isDeletedTaskPresent();
};

const setDeletedToCompleted = (t) => {
  const inputTaskVal =
    t.parentElement.parentElement.firstChild.nextElementSibling
      .nextElementSibling.nextElementSibling.value;
  if (sectionCompletedTask.childElementCount) {
    sectionCompletedTask.removeChild(sectionCompletedTask.firstChild);
  }
  // Moving completed Item to Upcoming Task Section
  sectionCompletedTask.insertAdjacentHTML(
    "afterbegin",
    `
    
    <div class="input-group mb-3 bg-light-green">
        <span class="input-group-text bg-transparent">
            <i class="bi bi-check-all fs-5"></i>
        </span>
        <span class="input-group-text bg-transparent">${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</span>
        <input
            id="input-task"
            type="text"
            class="form-control text-decoration-line-through bg-transparent"
            value="${inputTaskVal}"
        />
        <button class="btn btn-outline-dark">
            <i class="bi bi-arrow-up fs-5" onclick="setCompletedToUpcoming(this)"></i>
        </button>
        <button class="btn btn-outline-dark">
            <i class="bi bi-trash fs-5" onclick="setCompletedToDeleted(this)"></i>
        </button>
    </div>
    `
  );
  // Removing the completed item to Pending Tasks section

  sectionDeletedTask.removeChild(t.parentElement.parentElement);
  isDeletedTaskPresent();
};

const setCompletedToDeleted = (t) => {
  const inputTaskVal =
    t.parentElement.parentElement.firstChild.nextElementSibling
      .nextElementSibling.nextElementSibling.value;
  if (sectionDeletedTask.childElementCount) {
    sectionDeletedTask.removeChild(sectionDeletedTask.firstChild);
  }
  // Moving completed Item to Upcoming Task Section
  sectionDeletedTask.insertAdjacentHTML(
    "afterbegin",
    `

    <div class="input-group mb-3 bg-light-green">
        <span class="input-group-text bg-transparent">
            <i class="bi bi-trash fs-5" onclick="permanentDelete(this)"></i>
        </span>
        <span class="input-group-text bg-transparent">${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</span>
        <input
            id="input-task"
            type="text"
            class="form-control bg-transparent"
            value="${inputTaskVal}"
            readonly
        />
        <button class="btn btn-outline-dark">
            <i class="bi bi-arrow-clockwise fs-5" onclick="setDeletedToCompleted(this)"></i>
        </button>
    </div>
    `
  );
  // Removing the completed item to Pending Tasks section

  sectionCompletedTask.removeChild(t.parentElement.parentElement);
  isCompletedTaskPresent();
};
const setCompletedToUpcoming = (t) => {
  const inputTaskVal =
    t.parentElement.parentElement.firstChild.nextElementSibling
      .nextElementSibling.nextElementSibling.value;
  if (sectionUpcomingTask.childElementCount) {
    sectionUpcomingTask.removeChild(sectionUpcomingTask.firstChild);
  }

  // Moving completed Item to Upcoming Task Section
  sectionUpcomingTask.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="input-group mb-3 bg-light-yellow">
      
      
      <span class="input-group-text bg-transparent">
          <input type="checkbox" onclick="setUpcomingToCompleted(this)"  class="form-check-input bg-transparent" />
      </span>
      <span class="input-group-text bg-transparent">
      ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
      </span>
      <input
          id="input-task"
          type="text"
          class="form-control bg-transparent"
          value="${inputTaskVal}"
      />
      <button class="btn btn-outline-dark">
          <i class="bi bi-trash fs-3"onclick="setUpcomingToDeleted(this)"></i>
      </button>
  </div>
  `
  );
  // Removing the completed item to Pending Tasks section

  sectionCompletedTask.removeChild(t.parentElement.parentElement);
  isCompletedTaskPresent();
};

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
  const text =
    t.parentElement.parentElement.firstElementChild.nextElementSibling
      .nextElementSibling.value;
  //   Removing the checked task from Upcoming task section
  if (sectionDeletedTask.childElementCount) {
    sectionDeletedTask.removeChild(sectionDeletedTask.firstChild);
  }
  sectionDeletedTask.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="input-group mb-3 bg-light-yellow">
        <span class="input-group-text bg-transparent">
            <i class="bi bi-trash fs-5" onclick="permanentDelete(this)"></i>
        </span>
        <span class="input-group-text bg-transparent">${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</span>
        <input
            id="input-task"
            type="text"
            class="form-control bg-transparent"
            value="${text}"
            readonly
        />
        <button class="btn btn-outline-dark">
            <i class="bi bi-arrow-clockwise fs-5" onclick="setDeletedToUpcoming(this)"></i>
        </button>
    </div>
    `
  );

  sectionUpcomingTask.removeChild(t.parentElement.parentElement);
  isUpcomingTaskPresent();
};

////////////////////////////////////////// FUNCTION TO CHANGE TASK UPCOMING TO COMPLETED //////////////////////////////////////////
const setUpcomingToCompleted = (t) => {
  const text = t.parentElement.nextElementSibling.nextElementSibling.value;
  if (sectionCompletedTask.childElementCount) {
    sectionCompletedTask.removeChild(sectionCompletedTask.firstChild);
  }
  //   Removing the checked task from Upcoming task section
  sectionCompletedTask.insertAdjacentHTML(
    "afterbegin",
    `
    
    <div class="input-group mb-3 bg-light-green">
        <span class="input-group-text bg-transparent">
            <i class="bi bi-check-all fs-5"></i>
        </span>
        <span class="input-group-text bg-transparent">${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}</span>
        <input
            id="input-task"
            type="text"
            class="form-control text-decoration-line-through bg-transparent"
            value="${text}"
        />
        <button class="btn btn-outline-dark">
            <i class="bi bi-arrow-up fs-5" onclick="setCompletedToUpcoming(this)"></i>
        </button>
        <button class="btn btn-outline-dark">
            <i class="bi bi-trash fs-5" onclick="setCompletedToDeleted(this)"></i>
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
      <div class="input-group mb-3 bg-light-yellow">
        <span class="input-group-text bg-transparent">
            <input type="checkbox" onclick="setUpcomingToCompleted(this)"  class="form-check-input bg-transparent" />
        </span>
        <span class="input-group-text bg-transparent">
        ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
        </span>
        <input
            id="input-task"
            type="text"
            class="form-control bg-transparent"
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
