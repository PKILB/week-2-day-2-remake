let packages = [
  {
    priorityLevel: "same-day",
    to: "Boone",
    trackingNumber: "60 lbs",
    isFragile: false,
    hasPackage: true,
  },
  {
    priorityLevel: "free",
    to: "Harold",
    trackingNumber: "75 lbs",
    isFragile: true,
    hasPackage: true,
  },
  {
    priorityLevel: "free",
    to: "Nehemiah",
    trackingNumber: "20 lbs",
    isFragile: false,
    hasPackage: true,
  },
  {
    priorityLevel: "free",
    to: "Terry",
    trackingNumber: "100 lbs",
    isFragile: true,
    hasPackage: true,
  },
];

function drawPackages(packages) {
  let packageElement = document.getElementById("packages");
  // console.log(packageElement)
  let packageLineup = "";

  packages.forEach((package) => {
    packageLineup += `
    <div class="row">
        <div class="col-2">
            TO: 
        </div>
        <div class="col-4">
            ${package.to}
        </div>
        <div class="col-2">
            ID: 
        </div>
        <div class="col-4">
            ${package.trackingNumber}
        </div>
    </div>

    `;
  });

  packageElement.innerHTML = packageLineup;
}

drawPackages(packages);
