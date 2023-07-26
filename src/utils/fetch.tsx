export interface NewsSchema {
    image:string,
    content:string,
    description:string,
    publishedAt:string,
    source:{
        url:string,
        name:string
    },
    title:string,
    url:string,
}
export const dummy_image = 'http://www.listercarterhomes.com/wp-content/uploads/2013/11/dummy-image-square.jpg'
const apikey = 'c6b9515bdec81abeb421e41a36647efb'; // new
// const apikey = 'fb4f2468fc839cf45fedd2ec66a5e7c9'
export default function articles_data():Promise<NewsSchema[]>{
    const url = `https://gnews.io/api/v4/search?q=tesla&lang=en&apikey=${apikey}`;
    return fetch(url).then(res=>res.json()).then(res=>{console.log(res.articles[0], 'this is me' ); return res.articles} )
    // return fetch(`http://localhost:4500/articles`).then(res=>res.json()).then(res=>{return res} )
}

export function article(title:String):Promise<NewsSchema[]>{
    const url = `https://gnews.io/api/v4/search?q=tesla&in=${title}&lang=en&apikey=${apikey}`;
return fetch(url).then(res=>res.json()).then(res=>{console.log(res.articles[0], 'this is me' ); return res.articles} )
}


// --------------------------
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA9DS40asOa_b-l5_4IlUTUWl7yvE9pphg",
//   authDomain: "triveous-35530.firebaseapp.com",
//   projectId: "triveous-35530",
//   storageBucket: "triveous-35530.appspot.com",
//   messagingSenderId: "1049648193344",
//   appId: "1:1049648193344:web:9e279ef6f28b80f7c824a5",
//   measurementId: "G-W1HX4E1RV8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);