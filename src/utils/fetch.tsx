export interface NewsSchema {
    author:string,
    content:string,
    description:string,
    publishedAt:string,
    source:{
        id:string,
        name:string
    },
    title:string,
    url:string,
    urlToImage:string
}
// const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-06-24&sortBy=publishedAt&apiKey=${process.env.NEXT_API_KEY}`;
const url = 'http://localhost:4500/articles';

export const dummy_image = 'http://www.listercarterhomes.com/wp-content/uploads/2013/11/dummy-image-square.jpg'

export default function articles_data():Promise<NewsSchema[]>{
    // return fetch(url).then(res=>res.json()).then(res=>{console.log(res[0], 'this is me' ); return res.articles} )
    return fetch(url).then(res=>res.json()).then(res=> res)
}

export function article(title:string):Promise<NewsSchema[]>{
    return fetch(`${url}?title_like=${title}`).then(res=>res.json()).then(res=> res)
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