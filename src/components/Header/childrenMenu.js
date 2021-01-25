import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';

import { getChildRef, getParentRef } from '../../utils/database';
import { auth } from '../../utils/firebase';
import { ChildContext } from '../../utils/childContext';
import { BarButton, ChildButton } from './styles';

export const ChildrenMenu = () => {
  const [childMenu, setChildMenu] = useState(null);
  const history = useHistory();
  const { child, setChild } = useContext(ChildContext);

  const parentRef = useMemo(() => getParentRef(auth.currentUser.uid), []);
  const [childrenData, setChildrenData] = useState([]);

  const handleChildMenuClose = () => {
    setChildMenu(null);
  };

  const handleChildMenuOpen = (e) => {
    setChildMenu(e.currentTarget);
  };

  const handleMenuClick = (newChild) => {
    handleChildMenuClose();
    if (newChild === 'new') history.push('/new');
    else {
      setChild(newChild);
      history.push('/child');
    }
  };

  useEffect(() => {
    const childRefs = [];

    parentRef.on('value', (sn) => {
      const parent = sn.val() || [];

      for (const p of parent) {
        childRefs.push(getChildRef(p));
      }

      for (const childRef of childRefs) {
        childRef.on('value', (sn) => {
          const child = {
            id: sn.key,
            ...sn.val(),
          };
          setChildrenData((prevValues) => {
            return [...prevValues, child];
          });
        });
      }
    });

    return () => {
      parentRef.off();
      for (const childRef of childRefs) {
        childRef.off();
      }
    };
  }, [parentRef]);

  const firstChild = childrenData[0];
  useEffect(() => {
    if (!child && !!firstChild) setChild(firstChild);
  }, [child, setChild, firstChild]);

  if (!child)
    return (
      <BarButton component={Link} to="\new">
        New child
      </BarButton>
    );

  return (
    <>
      <ChildButton
        aria-controls="childMenu"
        aria-haspopup="true"
        onClick={handleChildMenuOpen}
      >
        {child.name}
      </ChildButton>
      <Menu
        id="childMenu"
        keepMounted
        anchorEl={childMenu}
        open={Boolean(childMenu)}
        onClose={handleChildMenuClose}
      >
        {childrenData.map((child) => (
          <MenuItem key={child.id} onClick={() => handleMenuClick(child)}>
            {child.name}
          </MenuItem>
        ))}
        <MenuItem onClick={() => handleMenuClick('new')}>New child</MenuItem>
      </Menu>
    </>
  );
};
