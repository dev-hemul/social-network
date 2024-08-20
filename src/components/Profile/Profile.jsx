import React from 'react';
import mainImage from "./../../image-content.jpg";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
		<div>
			<div>
				<img src={mainImage} alt=""/>
			</div>
			<div>ava + description</div>
			<MyPosts />
		</div>
	)
}

export default Profile;
