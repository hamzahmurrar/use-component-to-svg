import { useEffect, useState } from 'react';
import { getIcon } from './helper';

const useComponentToSvg = (el: JSX.Element) => {
  const [icon, setIcon] = useState<string>('');

  useEffect(() => {
    getIcon(el)
      .then(setIcon)
      .catch(setIcon);
  }, []);

  return icon;
};

export default useComponentToSvg;
