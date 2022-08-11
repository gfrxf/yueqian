import store from "@/store/index";
export default function px2rem() {
    if (!store.state.ismobile) {
        (function () {
            function setRootFontSize() {
                const height = 1080;
                let rem, rootHeight;
                const rootHtml = document.documentElement;
                rootHeight =
                    rootHtml.clientHeight > height
                        ? height
                        : rootHtml.clientHeight;
                rem = (rootHeight / height) * 100;
                rootHtml.style.fontSize = `${rem}px`;
            }
            setRootFontSize();
            window.addEventListener("resize", setRootFontSize);
        })();
    } else {
        let preFontSize, rootHtml, deviceWidth;
        /* 竖屏 */
        // if (window.orientation == 180 || window.orientation == 0) {
        rootHtml = document.documentElement;
        deviceWidth = rootHtml.clientWidth;
        rootHtml.style.fontSize = deviceWidth / (750 / 100) + "px";
        preFontSize = deviceWidth / (750 / 100) + "px";
        sessionStorage.setItem("preFontSize", preFontSize);
        // } else {
        //     document.documentElement.style.fontSize = sessionStorage.getItem('preFontSize')
        // }
    }
}
