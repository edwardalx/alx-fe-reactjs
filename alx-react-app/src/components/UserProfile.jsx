const UserProfile = (p) => {
   return (
     <div>
       <h2>{p.name}</h2>
       <p>Age: {p.age}</p>
       <p>Bio: {p.bio}</p>
     </div>
   );
 };
 export default UserProfile