import React from 'react';
import mainImage from './../image-content.jpg';
import s from "./Profile.module.css";

const Profile = () => {
	return (
		<div className={s.content}>
				<div>
					<img src={mainImage} alt=""/>
				</div>
				<div>
					ava + description
				</div>
				<div>
					My Posts
					<div>
						New Posts
					</div>
					<div className={s.posts}>
						<div className={s.item}>Post 1</div>
						<div className={s.item}>Post 2</div>
					</div>
				</div>
			</div>
	)
}

export default Profile;

