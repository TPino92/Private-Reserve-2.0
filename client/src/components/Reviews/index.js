import React from 'react'
// import { Button, Comment, Form, Header } from 'semantic-ui-react'

const Reviews = () => {
//     <Comment.Group>
//     <Header as='h3' dividing>
//       Comments
//     </Header>

//     <Comment>
//       <Comment.Content>
//         <Comment.Author as='a'>Matt</Comment.Author>
//         <Comment.Metadata>
//           <div>Today at 5:42PM</div>
//         </Comment.Metadata>
//         <Comment.Text>Helps with me seizures!</Comment.Text>
//       </Comment.Content>
//     </Comment>

//     <Comment>
//       <Comment.Content>
//         <Comment.Author as='a'>Elliot Fu</Comment.Author>
//         <Comment.Metadata>
//           <div>Yesterday at 12:30AM</div>
//         </Comment.Metadata>
//         <Comment.Text>
//           <p>This has been very useful for my research. Thanks as well!</p>
//         </Comment.Text>
//       </Comment.Content>
//     </Comment>

//     <Comment>
//       <Comment.Content>
//         <Comment.Author as='a'>Joe Henderson</Comment.Author>
//         <Comment.Metadata>
//           <div>5 days ago</div>
//         </Comment.Metadata>
//         <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
//       </Comment.Content>
//     </Comment>

//     <Form reply>
//       <Form.TextArea />
//       <Button content='Add Reply' labelPosition='left' icon='edit' primary />
//     </Form>
//   </Comment.Group>


    return (
        <div className="ui Reviews">
            <h3 className="ui dividing header">Reviews</h3>

            <div className="comment">
                <div className="content">
                    <p>Matt</p>
                    <div className="metadata">
                        <div>Today at 5:42PM</div>
                    </div>
                    <div className="text">Helps with my seizures</div>
                </div>
            </div>

            <div className="comment">
                <div className="content">
                    <p>Elliot Fu</p>
                    <div className="metadata">
                        <div>Yesterday at 12:30AM</div>
                    </div>
                    <div className="text">
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </div>
                </div>
            </div>


            <div className="comment">
                <div className="content">
                    <p>Joe Henderson</p>
                    <div className="metadata">
                        <div>5 days ago</div>
                    </div>
                    <div className="text">Dude, this is awesome. Thanks so much</div>
                </div>
            </div>

            <form className="ui reply form">
                <div className="field">
                    <textarea rows="3"></textarea>
                </div>
                <button className="ui icon primary left labeled button">
                    <i aria-hidden="true" className="edit icon">
                    </i>Add Review</button>
            </form>
        </div>
    )
}

export default Reviews;