function isActiveMenuItem(history: { location: { pathname: string } }, path: string) {
    if (history.location.pathname === path) return true
};

export default isActiveMenuItem;