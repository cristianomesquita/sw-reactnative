import { SIDE_MENU_IS_OPEN } from './type';

export const sideMenuIsOpen = isOpen => (
    { type: SIDE_MENU_IS_OPEN, payload: isOpen }
);
