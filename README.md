# use-component-to-svg
do you want to convert your component to a nice SVG ? or are you working with Google Maps and tired of using SVGs and want to use your component as it is instead ?
this hook is for you.

### Installation
```npm install --save @hmurrar/use-component-to-svg```
or
```yarn add @hmurrar/use-component-to-svg```

### Usage
```
import useComponentToSvg from '@hmurrar/use-component-to-svg';

// in a component
const MyComponent = () => {
    const componentSvg = useComponentToSvg(<MyTestComponent {...props} />);
    ...
};

// with Google Maps
    const componentSvg = useComponentToSvg(<MyTestComponent {...props} />);
    ...
    
    return (
        ...
        <Marker
              position={{anyLat, anyLng}}
              icon={{
                  url: componentSvg,
              }}
          />
    );
```

### How it works
- component is rendered to string using `renderToString` from `react-dom/server`
- using `DomParser` the string component is parset to `HTML`
- using `html-to-image` function `toSvg` the parsed `HTML` is converted to a string that represents the component
- the hook will return the string.