import { toSvg } from 'html-to-image';
import { renderToString } from 'react-dom/server'

export const getIcon = async (el: JSX.Element): Promise<string> => {
  if (!el) {
    return '';
  }
  const componentString = renderToString(el);
  const parser = new DOMParser();
  const componentHtml = parser.parseFromString(componentString, 'text/html');
  try {
    return await toSvg(componentHtml.body);
  } catch (e) {
    const error = e.message || e;
    console.error(`failed to getIcon for element, ${error}`);
    return '';
  }
};
