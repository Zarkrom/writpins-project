import React, { useState } from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonInput } from '@ionic/react';
import { Pin, createPin } from '../data/pins';

/* interface PinListCardProps {
    title: string;
    content: string;
    onValidate: (title: string, quote: string) => void;
} */

interface PinListCardProps {
    onValidate: (pin: Pin) => void;
}

const PinListCard: React.FC<PinListCardProps> = ({ onValidate }) => {
    const [title, setTitle] = useState('');
    const [citation, setCitation] = useState('');
    
    const handleValidation = () => {
        if (title.trim() !== '' && citation.trim() !== '') {
            const newPin = createPin(title, citation);
            onValidate(newPin);
            // Réinitialisez les champs de saisie après la validation si nécessaire
            setTitle('');
            setCitation('');
        }
    };

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Créer une nouvelle épingle</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <IonCardContent>
                <IonInput
                    placeholder="Titre"
                    value={title}
                    onIonChange={(e) => setTitle(e.detail.value!)}
                />
                <IonInput
                    placeholder="Citation"
                    value={citation}
                    onIonChange={(e) => setCitation(e.detail.value!)}
                />
            </IonCardContent>
            </IonCardContent>
            <IonButton onClick={handleValidation}>Create Pin</IonButton>
        </IonCard>
    );
};

export default PinListCard;
