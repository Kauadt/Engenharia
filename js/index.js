const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function changeTab(event) {
    event.preventDefault();
    const target = event.target.getAttribute("data-bs-target");
    const tab = new bootstrap.Tab(document.querySelector(target));
    tab.show();

    document.querySelector("#posGrad").scrollIntoView({
        behavior: 'smooth'
    });
}
