// import React, { useContext, useEffect, useState } from "react";

// import { productContext } from "../../Context/ProductContext";
// import CommentList from "./CommentList";
// const Community = () => {
//   // const [email, setEmail] = useState("");
//   // const [name, setName] = useState("");
//   // const [comment, setComment] = useState("");

//   const [state, setState] = useState({
//     name: "",
//     email: "",      
//     comment: "",
//   });
//   const { postNewComment } = useContext(productContext);
//   function commentOnChange(e) {
//     let newCommentObj = {
//       ...state,
//       [e.target.name]: e.target.value,
//     };
//     setState(newCommentObj);
//     console.log(newCommentObj);
//   }
//   function handleCommentClick(e) {
//     e.preventDefault();

//     setState({
//       name: "",
//       email: "",
//       comment: "",
//     });
//     postNewComment(state);
//     console.log(state);
//   }

//   // setEmail("");
//   // setName("");
//   // setComment("");

//   return (
//     <>
//       <div>
//         <div className="box-wrapper">
//           <div className="comment-box">
//             <h3 className="main_info-community">
//               Leave a commentary and make a contribution to our community
//             </h3>
//             <input
//               type="text"
//               name="name"
//               value={state.name}
//               placeholder="Name"
//               className="name-comment"
//               onChange={commentOnChange}
//             />
//             <input
//               name="email"
//               type="text"
//               value={state.email}
//               placeholder="Email"
//               className="name-comment"
//               onChange={commentOnChange}
//             />
//             <textarea
//               type="text"
//               name="comment"
//               className="comment-text"
//               value={state.comment}
//               onChange={commentOnChange}
//             />
//             <button
//               style={{
//                 width: "160px",
//                 height: "25px",
//                 marginTop: "20px",
//               }}
//               onClick={handleCommentClick}
//             >
//               Post Comment
//             </button>
//           </div>
//         </div>
//         <div className="main_comment-list">
//           <div className="secondary_list">
//             <h3>Comments</h3>
//           </div>
//           <CommentList />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Community;
