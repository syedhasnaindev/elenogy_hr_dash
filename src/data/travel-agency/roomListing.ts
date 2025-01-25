import hotel17 from 'assets/img/hotels/17.png';
import hotel18 from 'assets/img/hotels/18.png';
import hotel19 from 'assets/img/hotels/19.png';
import hotel20 from 'assets/img/hotels/20.png';
import hotel21 from 'assets/img/hotels/21.png';
import hotel22 from 'assets/img/hotels/22.png';
import hotel23 from 'assets/img/hotels/23.png';
import hotel24 from 'assets/img/hotels/24.png';
export interface RoomListingInterface {
  name: string;
  category: string;
  price: number;
  img: string;
  bedRooms: string;
  beds: string;
  guest: string;
  child: string;
  bathRooms: string;
  totalRooms: number;
  amenities: string[];
}
export const RoomListingData: RoomListingInterface[] = [
  {
    name: 'Bunk Bed',
    category: 'Standard Room',
    price: 332.67,
    img: hotel17,
    bedRooms: '01',
    beds: '02',
    guest: '02',
    child: '01',
    bathRooms: '01',
    totalRooms: 65,
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'common area',
      'bathtub',
      'Heating',
      'Telephone'
    ]
  },
  {
    name: 'King bed',
    category: 'Presidential Suite',
    price: 450.67,
    img: hotel18,
    bedRooms: '02',
    beds: '03',
    guest: '02',
    child: '01',
    bathRooms: '02',
    totalRooms: 23,
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area'
    ]
  },
  {
    name: 'Queen bed',
    category: 'Deluxe Room',
    price: 400.5,
    img: hotel19,
    bedRooms: '02',
    beds: '02',
    guest: '02',
    child: '01',
    bathRooms: '02',
    totalRooms: 77,
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television'
    ]
  },
  {
    name: 'Twin bed',
    category: 'Family Room',
    price: 600.41,
    img: hotel20,
    bedRooms: '03',
    beds: '05',
    guest: '07',
    child: '01',
    bathRooms: '03',
    totalRooms: 12,
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service'
    ]
  },
  {
    name: 'Single bed',
    category: 'Honeymoon Suite',
    price: 350.8,
    img: hotel21,
    bedRooms: '01',
    beds: '01',
    guest: '02',
    child: '00',
    bathRooms: '01',
    totalRooms: 21,
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'common area',
      'bathtub'
    ]
  },
  {
    name: 'Single bed',
    category: 'Loft Suite',
    price: 200.22,
    img: hotel22,
    bedRooms: '01',
    beds: '01',
    guest: '01',
    child: '00',
    bathRooms: '01',
    totalRooms: 15,
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Television',
      'common area',
      'Kettle',
      'iron'
    ]
  },
  {
    name: 'Double bed',
    category: 'Corner Room',
    price: 290.55,
    img: hotel23,
    bedRooms: '01',
    beds: '02',
    guest: '04',
    child: '00',
    bathRooms: '02',
    totalRooms: 8,
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'common area',
      'bathtub',
      'Heating'
    ]
  },
  {
    name: 'Twin XL bed',
    category: 'Ocean View Room',
    price: 550.75,
    img: hotel24,
    bedRooms: '01',
    beds: '02',
    guest: '04',
    child: '01',
    bathRooms: '02',
    totalRooms: 6,
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service'
    ]
  },
  {
    name: 'Quad Bed',
    category: 'Standard Room',
    price: 550.65,
    img: hotel20,
    bedRooms: '02',
    beds: '04',
    guest: '04',
    child: '00',
    bathRooms: '02',
    totalRooms: 50,
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'tv'
    ]
  },
  {
    name: 'Executive Suite',
    category: 'Standard Room',
    price: 750.67,
    img: hotel21,
    bedRooms: '01',
    beds: '01',
    guest: '02',
    child: '01',
    bathRooms: '01',
    totalRooms: 22,
    amenities: [
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'common area',
      'Kettle',
      'iron',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'Coffee maker',
      'refrigerator',
      'Room service',
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television',
      'wifi',
      'tv',
      'common area',
      'bathtub',
      'Heating',
      'Telephone',
      'Television'
    ]
  }
];