// helpers
const getTabElements = (parentContainer, selector) => {
    const isChild = parentContainer.dataset.child === 'true';
    const elements = Array.from(parentContainer.querySelectorAll(selector));
    return isChild ? elements : elements.filter(el => el.closest('.tab').dataset.child !== 'true');
};

// if you want to use nested tabs, you should add data-child="true" to the child tab
export const useTab = (paraentElClass) => {
    const parentContainer = document.querySelector(paraentElClass);
    const tabTitles = getTabElements(parentContainer, '.tab-title');
    const tabContents = getTabElements(parentContainer, '.tab-content');
    const tabContainer = parentContainer.querySelector(".tab-container");

    tabContainer.addEventListener("mouseover", (e) => {
        const selectedTab = e.target.closest(".tab-title");
        if (!selectedTab) return;

        tabTitles.forEach((el) => el.classList.remove("active"));
        tabContents.forEach((el) => el.classList.remove("active"));

        const selectedTabContent = Array.from(parentContainer.querySelectorAll(`.tab-content-${selectedTab.dataset.tab}`))
        .filter((el) => {
            if (parentContainer.dataset.child !== 'true') {
                return el.closest('.tab').dataset.child !== 'true'
            } else {
                return el.closest('.tab').dataset.child === 'true'
            }
        });
        
        selectedTab.classList.add("active");
        selectedTabContent[0].classList.add("active");
    });
};
