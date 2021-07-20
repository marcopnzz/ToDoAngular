export class ActionToDo {
    private text: string
    private state: boolean

    constructor(text: string) {
        this.text = text
        this.state = false
    }

    public getText(): string {
        return this.text;
    }

    public setText(text: string): void {
        this.text = text;
    }

    public isState(): boolean {
        return this.state;
    }

    public setState(state: boolean): void {
        this.state = state;
    }

}