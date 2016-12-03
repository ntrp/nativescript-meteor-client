declare var require;

export interface NsMeteorOptions {
    url: string;
    debug?: boolean;
    timeout?: number;
}

export const nsMeteorInit = (opts: NsMeteorOptions) => {
    require('./meteor/index')(opts);
};