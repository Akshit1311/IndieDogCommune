var camp = ``;

for (i = 1; i < 30; i++) {
  camp += `
    <div class="col-lg-4">
        <img class="camp-img my-4" src="images/camp/${i}.jpeg" width="100%" alt="" />
    </div>
    `;
}

$(".gal-items-camp").html(camp);

console.log("scripyt running");

// <div class="col-lg-4">
//         <img src="images/camp/1.jpeg" width="100%" alt="" />
//     </div>
//     <div class="col-lg-4">
//         <img src="images/camp/1.jpeg" width="100%" alt="" />
//     </div>
//     <div class="col-lg-4">
//         <img src="images/camp/1.jpeg" width="100%" alt="" />
//     </div>
