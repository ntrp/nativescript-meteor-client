declare const require;

export interface NsMeteorOptions {
    url: string;
    debug?: boolean;
    timeout?: number;
}

declare const module: any;
module.exports = (opts: NsMeteorOptions, wsImpl: any) => {
    require('./meteor/index')(opts, wsImpl);
};