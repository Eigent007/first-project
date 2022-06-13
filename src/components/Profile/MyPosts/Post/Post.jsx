import React from 'react';
import s from './Post.module.css'

const Post = (p) => {
  return(
<div className={s.item}>
<img alt='' src='https://t3.ftcdn.net/jpg/02/84/87/88/360_F_284878821_E2nyf8wkMPLWnnn0D7DdgYAv7ngrCQTH.jpg' />
<div>{p.post}</div>
  {p.text}
<div>{p.likeCount}</div>
<div>
<span>like</span>
</div>

</div>


  )
};

export  default Post;