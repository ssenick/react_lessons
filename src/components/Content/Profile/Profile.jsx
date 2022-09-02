import React from "react";
import prof from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import AboutProfile from "./AboutProfile/AboutProfile";


const Profile = (props) => {

   return (
      <div className={prof.profile}>
         <div className={prof.profileImage}>
            <img
               src="https://wallpapers-fenix.eu/full/170112/061513544.jpg"
               alt=""
            />
         </div>
         <div className={prof.profileContent}>
            <AboutProfile aboutProfile={props.profilePage.aboutProfile}/>
            <MyPosts
               newPostText={props.profilePage.posts.newPostText}
               postData={props.profilePage.posts.postData}
               addNewPost={props.addNewPost}
               updateTextArea={props.updateTextArea}
               updateTextInput={props.updateTextInput}
            />
         </div>
      </div>
   );
};

export default Profile;
