import { ActionOptions, SwalState } from './modules/state';
import { SwalOptions } from './modules/options';
export declare type SwalParams = (string | Partial<SwalOptions>)[];
export interface PrettyAlert {
    (...params: SwalParams): Promise<any>;
    close?(namespace?: string): void;
    getState?(): SwalState;
    setActionValue?(opts: string | ActionOptions): void;
    stopLoading?(): void;
    setDefaults?(opts: object): void;
}
declare const swal: PrettyAlert;
export default swal;
