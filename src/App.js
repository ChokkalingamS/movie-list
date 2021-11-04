import  { useState } from 'react';

import './App.css';

export default function App()
{
  // Movie list
  let Movies=
[
  {MovieName:"Master",Cast:{Hero:"Vijay",Villain:"VijaySethupathi"},Rating:"7.8",Poster:"https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",Summary:"JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes."},
  {MovieName:"Valimai",Cast:{Hero:"AjithKumar",Villain:"Kartikeya"},Rating:"Unknown",Poster:"https://static.toiimg.com/photo/msid-86259894/86259894.jpg?44930",Summary:"Unknown"},
  {MovieName:"Soorari Potru",Cast:{Hero:"Surya",Villain:"Paresh Raval"},Rating:"9.1",Poster:"https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/11/10/Pictures/_e739398e-03aa-11ea-8324-1e09595151a0.jpg",Summary:"Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest."},
  {MovieName:"Vikram Vedha",Cast:{Hero:"Madhavan",Villain:"VijaySethupathi"},Rating:"8.3",Poster:"https://www.mirchi9.com/wp-content/uploads/2017/07/Vikram-Vedha-Excellent-Reviews-for-Edge-of-the-Seat-Thriller-1.jpg",Summary:"Vikram, a pragmatic policeman, and his partner Simon are on the hunt to capture Vedha. When Vedha voluntarily surrenders, he offers to tell Vikram a story, throwing Vikram's life into disarray."},
  {MovieName:"Asuran",Cast:{Hero:"Dhanush",Villain:"Naren"},Rating:"8.5",Poster:"https://i.ytimg.com/vi/xiPuH81AbcU/maxresdefault.jpg",Summary:"A farmer goes on the run with his family as he is compelled to protect his son, who has murdered a wealthy upper-caste landlord in a fit of vengeance"},
  {MovieName:"Oh ManaPenne",Cast:{Hero:"HarishKalyan",Villain:"PriyaBhavani Shankar"},Rating:"7.5",Poster:"https://static.moviecrow.com/gallery/20211001/189962-FAmineeVQAQB-O-.jfif",Summary:"Oh Manapenne! is a 2021 Indian Tamil-language romantic comedy film directed by Kaarthikk Sundar in his directorial debut and written by Deepak Sundarrajan. A remake of the Telugu film Pelli Choopulu, it stars Harish Kalyan and Priya Bhavani Shankar."}
];
  return (
  <div class="Main">
    {Movies.map(x=> <Movie data={x}/>)}
    
  </div>
  );
}



function Movie(props)
{
  let{data:{MovieName:name,Cast:{Hero,Villain},Rating,Poster,Summary}}=props 
  // For condional styling based on rating 
  let colors=(Rating>8)?"Green":"Red";
  let color={color:`${colors}`}
 
  // Content  Visibility
  let[content,setContent]=useState("none");
  let description={display:content};

  // Show/Hide Description
  let[visibility,setVisibility]=useState("Show")
  return(
    <section className="Container">
      <img  className="Poster"src={Poster} alt={name} title={name}></img>
      <div className="Details">
    <p>Name   : {name}</p>
    <p>Cast   : {Hero},{Villain}</p>
    <p>Rating :<span  style={color}>{Rating}</span></p>
    <button onClick={()=>{(content==="block")?setContent("none"):setContent("block");(visibility==="Hide")?setVisibility("Show"):setVisibility("Hide")}}>{visibility} Description</button>
    <p className="Summary" style={description}>Summary : {Summary}</p>
    <Counter/>
    </div>
    </section>
  );
}

// Like & Dislike button
function Counter()
{
  let [like,setLike]=useState(0);
  let [dislike,setDislike]=useState(0);
  return(
    <div className="count">
      <button onClick={()=>setLike(like+1)}><i className="far fa-thumbs-up"></i>{like}</button>
      <button onClick={()=>setDislike(dislike+1)}><i className="far fa-thumbs-down"></i>{dislike}</button>
    </div>
  )

  }

