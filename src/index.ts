declare const require;

export interface NsMeteorOptions {
    url: string;
    debug?: boolean;
    timeout?: number;
}

declare var module: any;
module.exports = (opts: NsMeteorOptions) => {
    require('./meteor/index')(opts);
};