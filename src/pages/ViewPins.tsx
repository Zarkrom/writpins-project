import { useState } from 'react';
import { Pin, getPin } from '../data/pins';
import { IonBackButton, IonButtons,IonCard,IonContent,IonHeader,IonIcon,IonItem,IonLabel,IonNote,IonPage,IonTextarea,IonToolbar,useIonViewWillEnter } from '@ionic/react';
import { chatbox, personCircle, chatboxEllipsesOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewPins.css';
import PinListCard from '../components/PinListCard';

function ViewPin() {
  const [pin, setPin] = useState<Pin>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const pipin = getPin(parseInt(params.id, 10));
    setPin(pipin);
  });

  return (
    <IonPage id="view-pin-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      {pin ? (
          <>
            <IonItem>
              <IonIcon aria-hidden="true" icon={personCircle} color="primary"></IonIcon>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {pin.title}
                </h2>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <h1>{pin.citation}</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do;
              </p>
            </div>
          </>
        ) : (
          <div>Pin not found</div>
        )}
        <PinListCard title={''} content={''} onValidate={function (title: string, quote: string): void {
          throw new Error('Function not implemented.');
        } } />
      </IonContent>
    </IonPage>
  );
}

export default ViewPin;
