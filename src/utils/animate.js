import * as PIXI from "pixi.js-legacy";

class animate {
    constructor(id) {
        if (window.pixiStore === undefined) {
            window.pixiStore = {
                urlList: {},
                callbackID: {
                    part1: 0,
                    part5: 0
                }
            };
        }

        this.idGroup = {
            "part1-ani": "part1",
            part5rw: "part5",
            part52rw: "part5"
        };

        this.picInfo = {
            pu: {
                width: 1000,
                height: 1642,
                folderu: "p1pu/",
                imgnum: 40
            },
            hu: {
                width: 1400,
                height: 1308,
                folderu: "p5hu/",
                imgnum: 107
            },
            an: {
                width: 700,
                height: 1672,
                folderu: "p5an/",
                imgnum: 80
            },
            sh: {
                width: 880,
                height: 1512,
                folderu: "p5sh/",
                imgnum: 83
            },
            wu: {
                width: 920,
                height: 1689,
                folderu: "p5wu/",
                imgnum: 40
            },
            you: {
                width: 650,
                height: 1308,
                folderu: "p5you/",
                imgnum: 126
            },
            la: {
                width: 720,
                height: 1310,
                folderu: "p5la/",
                imgnum: 80
            },
            bai: {
                width: 1330,
                height: 1756,
                folderu: "p5bai/",
                imgnum: 67
            },
            le: {
                width: 830,
                height: 1302,
                folderu: "p5le/",
                imgnum: 40
            },
            be: {
                width: 930,
                height: 1174,
                folderu: "p5be/",
                imgnum: 90
            }
        };
        this.id = id;
        this.app = new PIXI.Application({
            transparent: true,
            forceCanvas: true
        });

        this.anim = null;
        document.getElementById(this.id).innerHTML = "";
        document.getElementById(this.id).appendChild(this.app.view);
    }

    animation(type, retryTimes, callbackID) {
        this.app.stage.removeChild(this.anim);

        let imgs = [];
        let frames = [];

        for (let $i = 0; $i <= this.picInfo[type].imgnum; $i++) {
            let imgUrl = require("@/assets/" +
                this.picInfo[type].folderu +
                type +
                $i +
                ".png");

            if (
                window.pixiStore.urlList[imgUrl] === undefined ||
                window.pixiStore.urlList[imgUrl] === false
            ) {
                window.pixiStore.urlList[imgUrl] = true;
                imgs.push(imgUrl);
            }
        }

        this.app.loader.reset();
        this.app.loader.add(imgs).load(() => {
            if (
                window.pixiStore.callbackID[this.idGroup[this.id]] !==
                callbackID
            ) {
                return;
            }

            let dirty = false;

            for (let $i = 0; $i <= this.picInfo[type].imgnum; $i++) {
                let imgUrl = require("@/assets/" +
                        this.picInfo[type].folderu +
                        type +
                        $i +
                        ".png"),
                    textrue = PIXI.Texture.from(imgUrl);
                if (textrue.orig.width === 1) {
                    window.pixiStore.urlList[imgUrl] = false;
                    PIXI.Texture.removeFromCache(imgUrl);
                    if (dirty === false) {
                        dirty = true;
                    }
                }

                frames.push(textrue);
            }

            if (dirty && retryTimes < 1) {
                retryTimes++;
                this.animation(type, retryTimes, callbackID);
                return;
            } else if (dirty && retryTimes >= 1) {
                return;
            }

            this.app.stage.removeChild(this.anim);
            this.resize(type);

            document.getElementById(this.id).style.background = "none";

            this.anim = new PIXI.AnimatedSprite(frames);
            this.anim.animationSpeed = 20 / 60;
            this.app.stage.addChild(this.anim);
            this.anim.play();
        });
    }

    render(type) {
        document.getElementById(this.id).style.background = "";
        let retryTimes = 0;
        window.pixiStore.callbackID[this.idGroup[this.id]]++;
        this.animation(
            type,
            retryTimes,
            window.pixiStore.callbackID[this.idGroup[this.id]]
        );
    }

    resize(type) {
        let width = document.getElementById(this.id).offsetWidth;
        let height = document.getElementById(this.id).offsetHeight;

        this.app.renderer.resize(width, height);
        this.app.stage.scale.x =
            this.app.renderer.width / this.picInfo[type].width;
        this.app.stage.scale.y =
            this.app.renderer.height / this.picInfo[type].height;
    }
}

const animateObj = id => {
    return new animate(id);
};

export default animateObj;
