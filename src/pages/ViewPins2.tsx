import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './ViewPins.css';
import { Pin, getPins } from '../data/pins';
import PinListItem from '../components/PinListItem';

const ViewPins2: React.FC = () => {
  const [pins, setPin] = useState<Pin[]>([]);

  useIonViewWillEnter(() => {
    const p = getPins();
    setPin(p);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inbox</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              List of pins
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {pins.map(m => <PinListItem key={m.id} pin={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default ViewPins2;
