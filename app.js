// console.dir(window);

// let btns = document.querySelector(".btn");
// try {
//   btns.addEventListener("click", () => {
//     console.log("button got pressed");
//   });
// } catch (e) {
//   console.log(e);
// }

let arr = [
  {
    name: "Harsh",
    image: "./assets/profile_img_1.avif",
    status: "Add Friend",
  },
  {
    name: "Zain",
    image: "./assets/profile_img_2.avif",
    status: "Add Friend",
  },
  {
    name: "Aman",
    image: "./assets/profile_img_3.avif",
    status: "Add Friend",
  },
];

function print() {
  let clutter = "";

  arr.forEach((el, index) => {
    clutter += `<div class="card">
        <div class="img">
          <img src = "${el.image}" alt="" />
        </div>
        <h2>${el.name}</h2>
        <h4>${el.status}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
          temporibus odit aliquid illo eos id dicta maxime atque. Earum.
        </p>
        <button id="${index}">${el.status}</button>
      </div>`;
    // console.log(clutter);
  });

  let main = document.querySelector("#main");
  main.innerHTML = clutter;
}
print();

main.addEventListener("click", (pointerEvents) => {
  arr[pointerEvents.target.id].status = "friends";
  let h4 = document.querySelector("h4");
  h4.style.color = "green";
  print();
});
