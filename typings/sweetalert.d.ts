import swal, { PrettyAlert } from './core';

declare global {
    const SweetAlert: PrettyAlert;
}
export default swal;
export as namespace swal;
