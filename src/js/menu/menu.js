export const menu = () => {

    // mobile mega menu
    const mobileMenu = document.querySelector("[js-mobile-menu]");
    const mobileMenuButton = document.querySelector("[js-mobile-menu-button]");
    const mobileMenuCloseButton = document.querySelector("[js-mobile-menu-close-button]");
    const mobileMenuOverlay = document.querySelector("[js-mobile-menu-overlay]");
    const mobileMenuItems = document.querySelectorAll("[js-mobile-menu-item]");
    const mobileMenuItemLinks = document.querySelectorAll("[js-mobile-menu-item-link]");
    const mobileMenuItemSubmenus = document.querySelectorAll("[js-mobile-menu-item-submenu]");
    const mobileMenuItemSubmenuLinks = document.querySelectorAll("[js-mobile-menu-item-submenu-link]");
    const mobileMenuItemSubmenuCloseButtons = document.querySelectorAll("[js-mobile-menu-item-submenu-close-button]");
    const mobileMenuItemSubmenuOverlays = document.querySelectorAll("[js-mobile-menu-item-submenu-overlay]");
    const mobileMenuItemSubmenuOverlay = document.querySelector("[js-mobile-menu-item-submenu-overlay]");
    const mobileMenuItemSubmenuOverlayCloseButton = document.querySelector("[js-mobile-menu-item-submenu-overlay-close-button]");

    const handleMobileMenuButtonClick = () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenuOverlay.classList.toggle("hidden");
    }

    const handleMobileMenuCloseButtonClick = () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenuOverlay.classList.toggle("hidden");
    }

    const handleMobileMenuOverlayClick = () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenuOverlay.classList.toggle("hidden");
    }

    const handleMobileMenuItemClick = (e) => {
        const item = e.target;
        const itemLink = item.querySelector("a");
        const itemLinkHref = itemLink.getAttribute("href");
        window.location.href = itemLinkHref;
    }

    const handleMobileMenuItemSubmenuCloseButtonClick = (e) => {
        const item = e.target;
        const itemSubmenu = item.closest("[js-mobile-menu-item-submenu]");
        const itemSubmenuOverlay = itemSubmenu.querySelector("[js-mobile-menu-item-submenu-overlay]");
        const itemSubmenuOverlayCloseButton = itemSubmenu.querySelector("[js-mobile-menu-item-submenu-overlay-close-button]");
        itemSubmenu.classList.toggle("hidden");
        itemSubmenuOverlay.classList.toggle("hidden");
        itemSubmenuOverlayCloseButton.classList.toggle("hidden");
    }

    const handleMobileMenuItemSubmenuOverlayClick = (e) => {
        const item = e.target;
        const itemSubmenu = item.closest("[js-mobile-menu-item-submenu]");
        const itemSubmenuOverlay = itemSubmenu.querySelector("[js-mobile-menu-item-submenu-overlay]");
        const itemSubmenuOverlayCloseButton = itemSubmenu.querySelector("[js-mobile-menu-item-submenu-overlay-close-button]");
        itemSubmenu.classList.toggle("hidden");
        itemSubmenuOverlay.classList.toggle("hidden");
        itemSubmenuOverlayCloseButton.classList.toggle("hidden");
    }

    const handleMobileMenuItemSubmenuOverlayCloseButtonClick = (e) => {
        const item = e.target;
        const itemSubmenu = item.closest("[js-mobile-menu-item-submenu]");
        const itemSubmenuOverlay = itemSubmenu.querySelector("[js-mobile-menu-item-submenu-overlay]");
        const itemSubmenuOverlayCloseButton = itemSubmenu.querySelector("[js-mobile-menu-item-submenu-overlay-close-button]");
        itemSubmenu.classList.toggle("hidden");
        itemSubmenuOverlay.classList.toggle("hidden");
        itemSubmenuOverlayCloseButton.classList.toggle("hidden");
    }

    const handleMobileMenuItemSubmenuLinkClick = (e) => {
        const item = e.target;
        const itemSubmenu = item.closest("[js-mobile-menu-item-submenu]");
        const itemSubmenuOverlay = itemSubmenu.querySelector("[js-mobile-menu-item-submenu-overlay]");
        const itemSubmenuOverlayCloseButton = itemSubmenu.querySelector("[js-mobile-menu-item-submenu-overlay-close-button]");
        itemSubmenu.classList.toggle("hidden");
        itemSubmenuOverlay.classList.toggle("hidden");
        itemSubmenuOverlayCloseButton.classList.toggle("hidden");
    }

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener("click", handleMobileMenuButtonClick);
    } 
    if (mobileMenuCloseButton) {
        mobileMenuCloseButton.addEventListener("click", handleMobileMenuCloseButtonClick);
    }
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener("click", handleMobileMenuOverlayClick);
    }
    if (mobileMenuItems) {
        mobileMenuItems.forEach((item) => {
            item.addEventListener("click", handleMobileMenuItemClick);
        });
    }

    if (mobileMenuItemSubmenuCloseButtons) {
        mobileMenuItemSubmenuCloseButtons.forEach((item) => {
            item.addEventListener("click", handleMobileMenuItemSubmenuCloseButtonClick);
        });
    }

    if (mobileMenuItemSubmenuOverlays) {
        mobileMenuItemSubmenuOverlays.forEach((item) => {
            item.addEventListener("click", handleMobileMenuItemSubmenuOverlayClick);
        });
    }

    if (mobileMenuItemSubmenuOverlayCloseButton) {
        mobileMenuItemSubmenuOverlayCloseButton.addEventListener("click", handleMobileMenuItemSubmenuOverlayCloseButtonClick);
    }

    if (mobileMenuItemSubmenuOverlay) {
        mobileMenuItemSubmenuOverlay.addEventListener("click", handleMobileMenuItemSubmenuOverlayClick);
    }

    if (mobileMenuItemSubmenuLinks) {
        mobileMenuItemSubmenuLinks.forEach((item) => {
            item.addEventListener("click", handleMobileMenuItemSubmenuLinkClick);
        });
    }

    if (mobileMenuItemSubmenuLinks) {
        mobileMenuItemSubmenuLinks.forEach((item) => {
            item.addEventListener("click", handleMobileMenuItemSubmenuLinkClick);
        });
    }
}