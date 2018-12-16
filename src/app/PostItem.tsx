// import * as React from 'react';
//
//
// export type HandleSmth = (e: React.FormEvent<HTMLInputElement>) => string;
//
// interface IPropsObj {
//   id: number,
//   src: string
// }
// const handleSmth: HandleSmth = e => {
//   return 'qweqwe';
// }
//
// export interface IProps {
//   body: IPropsObj[],/// Array<IPropsObj>
//   handleAddPost: (e: React.FormEvent<HTMLLIElement>) => void
// }
// export const PostItem: React.SFC<IProps> = ({ body, handleAddPost }) => {
//     return (
//       <div>
//         <li>{body[0].id}</li>
//         <li onClick={handleAddPost}>{body[0].src}</li>
//         <form>
//           <input type="button" id="qwe" onClick={handleSmth} value="Click me"/>
//         </form>
//        <div className="container">
//
//        </div>
//       </div>
//     )
// }
//
// export default PostItem;
