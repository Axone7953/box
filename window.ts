interface WindowSettings {
    x?: number;
    y?: number;
    height?: number;
    width?: number;
    title?: string;
    border?: "double" | "solid" | "dashed" | "none";
}

export class Window {
    private settings = {
        x: 0,
        y: 0,
        height: 10,
        width: 20,
        title: "Box",
        border: "solid",
        visible: true,
    };

    constructor(settings: WindowSettings = {}) {
        (Object.keys(settings) as Array<keyof typeof settings>).forEach((key) => {
            if (settings[key] == undefined) {
                delete settings[key];
            }
        });
        Object.assign(this.settings, settings);
    }

    public get position() {
        return { x: this.settings.x, y: this.settings.y };
    }

    public get size() {
        return { width: this.settings.width, height: this.settings.height };
    }

    private update() {

    }

    public move(x: number, y: number) {
        this.settings.x += x;
        this.settings.y += y;
        this.update();
    }

    public goto(x: number, y: number) {
        this.settings.x = x;
        this.settings.y = y;
        this.update();
    }

    public resize(width: number, height: number) {
        this.settings.width = width;
        this.settings.height = height;
        this.update();
    }

    public show() {
        this.settings.visible = true;
        this.update();
    }

    public hide() {
        this.settings.visible = false;
        this.update();
    }
}

const win = new Window({ x: 10, title: "Test", border: undefined });
