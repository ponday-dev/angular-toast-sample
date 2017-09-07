export type ToastOption = {
    canCloseManual?: boolean,
    closeAuto?: boolean,
    timeout?: number,
    message?: string,
    color?: string,
    theme?: string,
};

export class ToastOptions {

    readonly symbol: Symbol;
    readonly canCloseManual: boolean;
    readonly closeAuto: boolean;
    readonly timeout: number;
    readonly color: string;
    readonly theme: string;
    message: string;

    constructor(options: ToastOption = {}) {
        this.symbol = Symbol();
        this.closeAuto = (options.closeAuto !== undefined) ? options.closeAuto : true;
        this.canCloseManual = !!options.canCloseManual || !this.closeAuto;
        this.timeout = (options.timeout && options.timeout >= 0) ? options.timeout : 2000;
        this.message = (options.message !== undefined) ? options.message : '';
        this.color = options.color || COLOR_BLACK;
        this.theme = options.theme || COLOR_WHITE;
    }

}

export const COLOR_WHITE = 'white';
export const COLOR_BLACK = '#424242';

export const COLOR_RED = '#f44336';
export const COLOR_BLUE = '#03A9F4';
export const COLOR_GREEN = '#8BC34A';
export const COLOR_ORANGE = '#FF9800';
