document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
  
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
  })


// CMS



// Create the URL for your endpoint and add the query
let URL = `https://fn92pamt.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'galleryImages'%5D%7B%0A%20%20name%2C%0A%20%20%22imageUrl%22%3A%20img.asset-%3Eurl%0A%7D%0A`;

fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          if (result.length > 0) {
            const galleryImages = document.querySelectorAll(".gallery-grid img")
            result.forEach((result, index) => {
              galleryImages[index].src = result.imageUrl
            });
          }
        })
        .catch((err) => console.error(err));
