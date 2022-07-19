const courses = [
  {
    name: "complete react course",
    price: "2.4",
  },
  {
    name: "complete Angular course",
    price: "2.9",
  },
  {
    name: "complete C++ course",
    price: "2.6",
  },
];

function generateList() {
  const ul = document.querySelector(".list-group");
  course.forEach( (course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}
generateList();
