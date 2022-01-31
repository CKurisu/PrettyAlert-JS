import swal, { PrettyAlert } from './core';

declare global {
    const PrettyAlert: PrettyAlert;
}
export default swal;
export as namespace swal;
