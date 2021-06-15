const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)

function dragstart(event) {
  event.target.classList.add("active");
  setTimeout(()=>event.target.classList.add("hide"),0)
}

function dragend(event) {
  event.target.className = "item";
}

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", drop);
}

function dragenter(event) {
  event.target.classList.add("dragenter")
}

function dragover(event) {
  // prevent default to allow drop
  event.preventDefault()
}

function dragleave(event) {
  event.target.classList.remove("dragenter")
}

function drop(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  event.target.append(item);
  event.target.classList.remove("dragenter")
}
