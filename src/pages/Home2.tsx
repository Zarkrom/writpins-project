import PinListItem from '../components/PinListItem';
import { useState } from 'react';
import { Pin, getPins } from '../data/pins';
import { IonContent, IonHeader, IonList, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Home.css';
import PinListCard from '../components/PinListCard';


const Home2: React.FC = () => {

  const handlePinCreation = (pin: Pin) => {
    setPins([...pins, pin]);
    console.log('Nouveau pin créé:', pin);
  };

  const [pins, setPins] = useState<Pin[]>([]);
  
  useIonViewWillEnter(() => {
    const pipins = getPins();
    setPins(pipins);
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
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {pins.map(m => <PinListItem key={m.id} pin={m} />)}
        </IonList>

        {/* <PinListCard title={''} content={''} onValidate={function (title: string, quote: string): void {
          throw new Error('Function not implemented.');
        } } /> */}

        <PinListCard onValidate={handlePinCreation} />
      </IonContent>
    </IonPage>
  );
};

export default Home2;
