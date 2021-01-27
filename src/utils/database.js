import { db } from './firebase';

export const childrenRef = db.ref('children');
export const getParentRef = (parentId) =>
  !!parentId ? db.ref(`parents/${parentId}`) : null;
export const getChildRef = (childId) =>
  !!childId ? db.ref(`children/${childId}`) : null;
export const getEatRef = (childId) =>
  !!childId ? db.ref(`eat/${childId}`) : null;
export const getPooRef = (childId) =>
  !!childId ? db.ref(`poo/${childId}`) : null;
