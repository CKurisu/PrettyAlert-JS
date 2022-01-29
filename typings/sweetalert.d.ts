import { PrettyAlert } from '../src/core';

declare global {
    const SweetAlert: PrettyAlert;
}
declare const swal: PrettyAlert;
export default swal;
export as namespace swal;
