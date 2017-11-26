import { GET_SUPPLIES } from './type';

export const getSupplies = supplies => (
    { type: GET_SUPPLIES, payload: supplies }
);
