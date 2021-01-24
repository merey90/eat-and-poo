import { db } from './firebase';

export const childrenRef = db.ref('children');
export const getParentRef = (parentId) => db.ref(`parents/${parentId}`);
export const getChildRef = (childId) => db.ref(`children/${childId}`);
