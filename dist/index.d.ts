export interface NsMeteorOptions {
    url: string;
    debug?: boolean;
    timeout?: number;
}
export declare const nsMeteorInit: (opts: NsMeteorOptions) => void;
