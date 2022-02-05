export class Application {
    public readonly width: number;
    public readonly height: number;

    private running = false;
    private code = {
        "tab": 9,
        "del": 8,
        "exit": 3,
    };

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    private async *inputs() {
        Deno.setRaw(Deno.stdin.rid, true);
        const buffer = new Uint8Array(1);
        while (this.running) {
            await Deno.stdin.read(buffer);
            yield buffer[0];
        }
        Deno.setRaw(Deno.stdin.rid, false);
    }

    public async start() {
        this.running = true;
        for await (const code of this.inputs()) {
            console.log(code);
            switch (code) {
                case this.code.tab: {
                    break;
                }
                case this.code.del: {
                    break;
                }
                case this.code.exit: {
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    public setCode(key: "tab" | "del" | "exit", code: number) {
        this.code[key] = code;
    }

    public static FullScreen = class FullScreen extends Application {
        constructor() {
            const { columns, rows } = Deno.consoleSize(Deno.stdout.rid);
            super(columns, rows);
        }
    };
}

const app = new Application.FullScreen();
app.start();
