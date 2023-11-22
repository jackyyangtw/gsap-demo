export const useTab = (paraentElClass) => {
    const parentContainer = document.querySelector(paraentElClass);
    const tabTitles = parentContainer.querySelectorAll(".tab-title");
    const tabContents = parentContainer.querySelectorAll(".tab-content");
    const tabContainer = parentContainer.querySelector(".tab-container");

    tabContainer.addEventListener("mouseover", (e) => {
        const selectedTab = e.target.closest(".tab-title");
        if (!selectedTab) return;

        tabTitles.forEach((el) => el.classList.remove("active"));
        tabContents.forEach((el) => el.classList.remove("active"));

        selectedTab.classList.add("active");
        parentContainer
            .querySelector(`.tab-content-${selectedTab.dataset.tab}`)
            .classList.add("active");
    });
};