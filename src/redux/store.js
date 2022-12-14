import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
   _state: {
      content: {
         dialogsPage: {
            dialogsData: [
               {id: 1, name: 'Igor'},
               {id: 2, name: 'Ira'},
               {id: 3, name: 'Alona'},
               {id: 4, name: 'Igor'},
               {id: 5, name: 'Daniil'},
               {id: 6, name: 'Mama'},
            ],
            messagesData: [
               {id: 1, message: 'hi'},
               {id: 2, message: 'How is your name?'},
               {id: 3, message: 'Dima )'},
            ],
            textArea: '',
         },
         profilePage: {
            aboutProfile: {
               id: 1,
               src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaHWHLDl411K6vo4P6im_KF1JBUXGjdDvWw&usqp=CAU",
               name: 'Ruslan S.',
               date: "14 january",
               city: "Namestovo",
               href: "https://greenshop.ssenick.fun"
            },
            posts: {
               postData: [
                  {
                     id: 1,
                     message: 'Post 1 Post 1 Post 1',
                     like: '1',
                     src: "https://s1.1zoom.me/big0/280/Dogs_Bulldog_Snout_479887.jpg"
                  },
                  {
                     id: 2,
                     message: 'Post 2 Post 2 Post 2',
                     like: '10',
                     src: "https://oir.mobi/uploads/posts/2019-12/1576378395_1-2.png"
                  },
                  {
                     id: 3,
                     message: 'Post 3 Post 3 Post 3',
                     like: '100',
                     src: "https://krot.info/uploads/posts/2022-03/1646115263_2-krot-info-p-smeshnie-sobaki-smeshnie-foto-2.jpg"
                  },
               ],
               newPostText: {
                  textArea: '',
                  textInput: '',
               },
            }
         },
      },
      aside: {
         navList: [
            {id: 1, nameLink: 'Profile', to: "/profile"},
            {id: 2, nameLink: 'Messages', to: "/dialogs"},
            {id: 3, nameLink: 'Login', to: "/login"},
         ],
         friends: [
            {
               id: 1,
               src: 'https://s1.1zoom.me/b5050/279/Dogs_Colored_background_489617_3840x2400.jpg',
               name: 'Ira',
               to: "/dialogs"
            },
            {
               id: 2,
               src: 'https://zoodoma.com/wp-content/uploads/2019/04/frenchie-face-e1554109768762.jpg',
               name: 'Andrii',
               to: "/dialogs"
            },
            {
               id: 3,
               src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RrbeDSBmhZT6psLXpEolt95PYJUnJXQeyltUgu9cTng4mEKG5ETeRbd-2KIglKnfG1s&usqp=CAU',
               name: "Igor",
               to: "/dialogs"
            },

         ]
      },
   },
   _callSubscriber() {
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },
   getState() {
      return this._state;
   },


   dispatch(action) {
      this._state.content.profilePage.posts = profileReducer(this._state.content.profilePage.posts, action);
      this._state.content.dialogsPage = dialogsReducer(this._state.content.dialogsPage, action);
      this._callSubscriber(this._state);
   }
}


export default store;