import React from 'react';

const paths = {
  'arrow-up-right': 'M6 18 18 6M6 6h12v12',
  'arrow-down': 'M12 4v16m-6-6 6 6 6-6',
  'arrow-up': 'M12 20V4m-6 6 6-6 6 6',
  'arrow-left': 'M20 12H4m6-6-6 6 6 6',
  'close': 'm6 6 12 12M18 6 6 18',
  'menu': 'M4 8h16M4 16h16',
  'star': 'm12 3 2.8 5.7 6.3.9-4.6 4.5 1.1 6.3-5.6-3-5.6 3 1.1-6.3L3 9.6l6.2-.9Z',
};

export default function Icon({ name = 'arrow-up-right', className = '' }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill={name === 'star' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={paths[name]} /></svg>;
}
