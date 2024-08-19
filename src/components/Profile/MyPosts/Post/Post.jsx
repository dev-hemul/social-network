import React from 'react';
import s from "./Post.module.css";
import avatar from './../../../../avatar.svg';

const Post = () => {
	return (
		<div className={s.item}>
			<img src={avatar} alt=""/>
			post 1
			<div>
				<span>like</span>
			</div>
		</div>
	)
}

export default Post;

