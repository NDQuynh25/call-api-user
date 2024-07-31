export interface BackendRes<T> {
    info: Info;
    results: T[];
}

export interface Info {
    seed: string | number;
    results: number | string;
    page: number | string;
    version: number | string;
}

export interface User {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DateInfo;
    registered: DateInfo;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Location {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinates;
    timezone: Timezone;
}

export interface Street {
    number: number;
    name: string;
}

export interface Coordinates {
    latitude: string;
    longitude: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface DateInfo {
    date: string;
    age: number;
}

export interface Id {
    name: string;
    value: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

// Ví dụ sử dụng với dữ liệu đã cung cấp
// const exampleData: BackendRes<Results> = {
//     info: {
//         seed: "51ba8e01f4a7434c",
//         results: 1,
//         page: 1,
//         version: "1.4"
//     },
//     results: [
//         {
//             gender: "male",
//             name: {
//                 title: "Mr",
//                 first: "Akhil",
//                 last: "Saniel"
//             },
//             location: {
//                 street: {
//                     number: 445,
//                     name: "Mint St"
//                 },
//                 city: "Dehradun",
//                 state: "Lakshadweep",
//                 country: "India",
//                 postcode: 98775,
//                 coordinates: {
//                     latitude: "4.9408",
//                     longitude: "-97.3730"
//                 },
//                 timezone: {
//                     offset: "+9:00",
//                     description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
//                 }
//             },
//             email: "akhil.saniel@example.com",
//             login: {
//                 uuid: "1ce0838f-2feb-42b7-bf83-1a61d837a48c",
//                 username: "orangeduck197",
//                 password: "william1",
//                 salt: "i05TiSEC",
//                 md5: "f71738e2bdf1028763ed149354fc926a",
//                 sha1: "605817ff56e1d0935b777ba30d9b938bdb2ad6b3",
//                 sha256: "e6fe889f1a8ffbe162ce85b3ec9b2c23c8f6182bbbac483a78908b488134a95e"
//             },
//             dob: {
//                 date: "1983-01-31T12:38:59.381Z",
//                 age: 41
//             },
//             registered: {
//                 date: "2010-04-07T19:27:15.071Z",
//                 age: 14
//             },
//             phone: "9524625741",
//             cell: "8495379697",
//             id: {
//                 name: "UIDAI",
//                 value: "712268286843"
//             },
//             picture: {
//                 large: "https://randomuser.me/api/portraits/men/11.jpg",
//                 medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
//                 thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg"
//             },
//             nat: "IN"
//         }
//     ]
// };
