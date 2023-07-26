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
// const url = 'http://localhost:4500/articles';
export const dummy_image = 'http://www.listercarterhomes.com/wp-content/uploads/2013/11/dummy-image-square.jpg'

export default function articles_data():Promise<NewsSchema[]>{
    const url = `https://newsapi.org/v2/everything?q=tesla&from=${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}&sortBy=publishedAt&apiKey=${'2580ab0ec6664dde939a1f101b3c14bb'}`;
    return fetch(url).then(res=>res.json()).then(res=>{console.log(res[0], 'this is me' ); return res.articles} )
    // return fetch(url).then(res=>res.json()).then(res=> res)
}

export function article(title:String):Promise<NewsSchema[]>{
    const url = `https://newsapi.org/v2/everything?q=${title}&from=${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}&sortBy=publishedAt&apiKey=${'2580ab0ec6664dde939a1f101b3c14bb'}`;
console.log(url, 'this i si sis ')
    return fetch(url).then(res=>res.json()).then(res=> {console.log(res[0], 'this is me' ); return res.articles})
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