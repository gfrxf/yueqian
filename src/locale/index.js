import Vue from "vue";
import VueI18n from "vue-i18n";

import English from "./en.json";
import Français from "./fr.json"; //法语
import Português from "./pt.json";//葡萄牙语
import Deutsch from "./de.json";  //德语
import Pусский from "./ru.json";  //俄语
// import pt from "./pt.json";
// import pl from "./pl.json";

Vue.use(VueI18n);

const i18n = new VueI18n({
    fallbackLocale: "English",
    locale: localStorage.getItem("locale") || "English" || "zh",
    messages: {
        English,
        Français,
        Português,
        Deutsch,
        Pусский
      
    }
});

export default i18n;
