export const createPin = (title: string, citation: string): Pin => {
  const newPin: Pin = {
    id: pins.length,
    title: title,
    citation: citation,
  };
  pins.push(newPin);
  return newPin;
};

export interface Pin {
  id: number;
  title: string;
  citation: string;
}

const pins: Pin[] = [
  {
    id: 0,
    title: "Pin initial",
    citation: "Pin initial description"
  },
  {
    id: 1,
    title: "Pin 1",
    citation: "Pin 1 description"
  },
  {
    id: 2,
    title: "Pin 2",
    citation: "Pin 2 description"
  },
  {
    id: 3,
    title: "Pin 3",
    citation: "Pin 3 description"
  },
  {
    id: 4,
    title: "Pin 4",
    citation: "Pin 4 description"
  },
  {
    id: 5,
    title: "Pin 5",
    citation: "Pin 5 description"
  },
  {
    id: 6,
    title: "Pin 6",
    citation: "Pin 6 description"
  },
  {
    id: 7,
    title: "Pin 7",
    citation: "Pin 7 description"
  }
];

export const getPins = () => pins;

export const getPin = (id: number) => pins.find(m => m.id === id);
