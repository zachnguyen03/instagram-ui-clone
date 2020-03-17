import React, { Component } from 'react';
import Postcard from './postcard.component';

export default class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [
            {
                imgSrc: 'https://images.unsplash.com/photo-1584424754226-b3621b1a2b51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                username: 'anhsterr',
                avatarSrc: 'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
                caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                likes: 150,
            },
            {
                imgSrc: 'https://images.unsplash.com/photo-1562887245-9d941e87344e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                username: 'lfc2puma',
                avatarSrc: 'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
                caption: 'Sandstorm played well in the tourney, slight below my performance...',
                likes: 5,
            },
            {
                imgSrc: 'https://images.unsplash.com/photo-1584397953205-20c78dda0b1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                username: 'alvissp',
                avatarSrc: 'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
                caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                likes: 15,
            },
            {
                imgSrc: 'https://images.unsplash.com/photo-1584386161274-91d1fcb007b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
                username: 'an.d.ton139',
                avatarSrc: 'https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg',
                caption: 'Toi la Antone va toi rat la hay xao loz. Toi co nhieu kien thuc trong dau nhung ma cu thich treu dua voi cam xuc cua ban be huhu dung nhu toi...',
                likes: 39,
            }
        ]};
    }

    render() {
        return this.state.posts.map(post => {
            return <Postcard post={post} key={post.username} />
        })
    }
}