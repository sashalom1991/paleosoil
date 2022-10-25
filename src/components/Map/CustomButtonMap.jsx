import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import Leaflet from 'leaflet';

const createLeafletButton = (label, { onClick, className, position }) => {
  const LeafletButton = Leaflet.Control.extend({
    onAdd: map => {
      const button = Leaflet.DomUtil.create('button', className);
      button.innerHTML = label;
      if (onClick) {
        button.addEventListener('click', () => {
          onClick(map);
        });
      }
      return button;
    },
  });
  return new LeafletButton({ position });
};

const LeafletButton = ({ children, onClick, className, position }) => {
  const map = useMap();
  useEffect(() => {
    const control = createLeafletButton(children, {
      onClick,
      className,
      position,
    });
    control.addTo(map);
    return () => {
      control.remove();
    };
  }, [map, children, onClick, position, className]);

  return null;
};

export default LeafletButton;
