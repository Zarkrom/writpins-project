import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Pin } from '../data/pins';
import './PinListItem.css';

interface PinListItemProps {
  pin: Pin;
}

const PinListItem: React.FC<PinListItemProps> = ({ pin }) => {
  return (
    // <IonItem routerLink={`/pin/${pin.id}`} detail={false}>
    <IonItem>
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {pin.title}
        </h2>
        <span>{pin.citation}</span>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default PinListItem;
