import React from 'react';

export const Emoji = ({ emoji, ...props }) => {
  let emojiSym = '';
  switch (emoji) {
    case 'eat':
      emojiSym = '🍼';
      break;
    case 'poo':
      emojiSym = '💩';
      break;
    case 'dashboard':
      emojiSym = '📅';
      break;

    default:
      break;
  }

  return (
    <span className="emoji" role="img" aria-label={emoji} {...props}>
      {emojiSym}
    </span>
  );
};
